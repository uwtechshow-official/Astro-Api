import fetch from 'node-fetch'
const BASE_API = `https://www.guruapi.tech/api/igstalk?username=`

export async function instaStalk(query) {
  try {
    const data = await fetch(BASE_API + query)
    const response = await data.json()
    return response
  } catch (error) {
    console.log('API ERROR:', error)
  }
}
