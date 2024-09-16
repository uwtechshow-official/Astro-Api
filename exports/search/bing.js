import axios from 'axios'
import { load } from 'cheerio'

export async function Bing(query) {
  const searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}`

  try {
    const { data } = await axios.get(searchUrl)
    const $ = load(data)
    const results = $('li.b_algo')
      .map((_, element) => {
        const title = $(element).find('h2').text().trim()
        const link = $(element).find('h2 a').attr('href')
        const description = $(element).find('p').text().trim()

        return { title, link, description }
      })
      .get()
      .filter((result) => result.title && result.link && result.description)

    return results
  } catch (error) {
    console.error('Error fetching Bing search results:', error)
    return []
  }
}
