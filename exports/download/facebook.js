import axios from 'axios'
async function facebook(url) {
  try {
    const response = await axios.get(`https://api.prabath-md.tech/api/fdown?url=${encodeURIComponent(url)}`)

    // Custom output formatting
    const output = {
      creator: 'Astro',
      status: response.data.status === 'success ✅' ? 200 : 'Error',
      data: response.data.data,
    }

    return output
  } catch (error) {
    console.error('Error fetching data:', error)
    // Return a custom error message if an error occurs
    return {
      creator: 'Astro',
      status: 'Error',
      data: null,
    }
  }
}

export { facebook }
