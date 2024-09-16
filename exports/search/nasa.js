import axios from 'axios'

const NASA_API_URL = 'https://api.nasa.gov/planetary/apod'
const API_KEY = '1Upr7aaI5KycaN9w03dLpHgmu69PmSjO4aFZxHyC'

async function fetchNasaNews(date) {
  try {
    const response = await axios.get(NASA_API_URL, {
      params: {
        api_key: API_KEY,
        date: date || '',
      },
    })

    const data = response.data

    const newsDetails = {
      title: data.title,
      date: data.date,
      explanation: data.explanation,
      url: data.url,
      hdurl: data.hdurl || 'N/A', // Optional URL for high-definition image
      media_type: data.media_type,
    }

    return newsDetails
  } catch (error) {
    console.error('Error fetching NASA news:', error)
    throw new Error('Failed to fetch NASA news.')
  }
}

export { fetchNasaNews }
