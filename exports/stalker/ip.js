import axios from 'axios'

const IPINFO_API_URL = 'https://ipinfo.io/'
const API_TOKEN = '1210f3e9224667'

export async function ipStalk(ipAddress) {
  if (!ipAddress) {
    throw new Error('IP address is required.')
  }

  try {
    const response = await axios.get(`${IPINFO_API_URL}${ipAddress}?token=${API_TOKEN}`)
    const data = response.data

    // Check if `loc` is available and formatted correctly
    const [latitude, longitude] = data.loc ? data.loc.split(',') : [null, null]

    const ipDetails = {
      ip: data.ip,
      hostname: data.hostname,
      city: data.city,
      region: data.region,
      country: data.country,
      location: {
        latitude: latitude || 'Unknown',
        longitude: longitude || 'Unknown',
      },
      organization: data.org,
      postal: data.postal,
      timezone: data.timezone,
    }

    return ipDetails
  } catch (error) {
    console.error('Error fetching IP data:', error)
    throw new Error('Failed to fetch IP data.')
  }
}
