import fetch from 'node-fetch'

const API_BASE_URL = 'https://ironman.koyeb.app/ironman/dl/spotify?link='

export async function fetchSpotifyData(urlQuery) {
  try {
    const encodedUrlQuery = encodeURIComponent(urlQuery)
    const response = await fetch(API_BASE_URL + encodedUrlQuery)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const responseData = await response.json()
    const { metadata, link } = responseData
    return { metadata, link }
  } catch (error) {
    console.error('Error fetching Spotify data:', error)
    throw error
  }
}
