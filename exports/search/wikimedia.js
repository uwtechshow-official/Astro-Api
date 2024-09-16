import axios from 'axios'
import { load } from 'cheerio'

export async function wikimedia(title) {
  try {
    const response = await axios.get(`https://commons.wikimedia.org/w/index.php?search=${encodeURIComponent(title)}&title=Special:MediaSearch&go=Go&type=image`)
    const $ = load(response.data)

    const results = $('.sdms-search-results__list-wrapper > div > a')
      .map((_, element) => {
        const $element = $(element)
        return {
          title: $element.find('img').attr('alt'),
          source: new URL($element.attr('href'), 'https://commons.wikimedia.org').href,
          image: $element.find('img').attr('data-src') || $element.find('img').attr('src'),
        }
      })
      .get()

    return results
  } catch (error) {
    console.error('Error fetching Wikimedia data:', error.message)
    throw error
  }
}
