import fetch from 'node-fetch'

export async function instagram(url) {
  try {
    const BASE_URL = 'https://cobalt.tools'
    const BASE_API = 'https://api.cobalt.tools/api'

    await fetch(BASE_API + '/json', {
      method: 'OPTIONS',
      headers: {
        'access-control-request-method': 'POST',
        'access-control-request-headers': 'content-type',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        origin: BASE_URL,
        referer: BASE_URL,
      },
    })

    const res = await fetch(BASE_API + '/json', {
      method: 'POST',
      headers: {
        origin: BASE_URL,
        referer: BASE_URL,
        'user-agent': BASE_URL,
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        url: url,
        filenamePattern: 'basic',
      }),
    }).then((v) => v.json())

    const stream = await fetch(res.url)

    return {
      status: stream.status,
      url: stream.url,
    }
  } catch (e) {
    throw e
  }
}
