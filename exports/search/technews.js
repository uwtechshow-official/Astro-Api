import axios from 'axios'

const TECHNEWS_API_URL = 'https://fantox001-scrappy-api.vercel.app/technews/random'

async function techNews() {
  try {
    const response = await axios.get(TECHNEWS_API_URL)
    const data = response.data
    return data
  } catch (error) {
    console.error('Error fetching tech news:', error)
    throw new Error('Failed to fetch tech news.')
  }
}

export { techNews }
