import axios from 'axios'
import * as cheerio from 'cheerio'
import FormData from 'form-data'

export async function glossysilver(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'create-glossy-silver-3d-text-effect-online-802.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function writetext(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'write-text-on-wet-glass-online-589.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function blackpinklogo(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'create-blackpink-logo-online-free-607.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function glitchtext(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'create-digital-glitch-text-effects-online-767.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function advancedglow(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'advanced-glow-effects-74.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function typographytext(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'create-typography-text-effect-on-pavement-online-774.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function pixelglitch(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'create-pixel-glitch-text-effect-online-769.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function neonglitch(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'create-impressive-neon-glitch-text-effects-online-768.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function nigerianflag(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'nigeria-3d-flag-text-effect-online-free-753.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function americanflag(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'free-online-american-flag-3d-text-effect-generator-725.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function deletingtext(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'create-eraser-deleting-text-effect-online-717.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function blackpinkstyle(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'online-blackpink-style-logo-maker-effect-711.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function glowingtext(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'create-glowing-text-effects-online-706.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function underwater(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + '3d-underwater-text-effect-online-682.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function logomaker(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'free-bear-logo-maker-online-673.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function cartoonstyle(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'create-a-cartoon-style-graffiti-text-effect-online-668.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function papercut(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'multicolor-3d-paper-cut-style-text-effect-658.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function watercolor(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'create-a-watercolor-text-effect-online-655.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function effectclouds(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'write-text-effect-clouds-in-the-sky-online-619.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function gradienttext(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'create-3d-gradient-text-effect-online-600.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function summerbeach(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'write-in-sand-summer-beach-online-free-595.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function luxurygold(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'create-a-luxury-gold-text-effect-online-594.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function multicolored(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'create-multicolored-neon-light-signatures-591.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function sandsummer(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'write-in-sand-summer-beach-online-576.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function galaxy(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'create-galaxy-wallpaper-mobile-online-528.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function nineteenseventeen(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + '1917-style-text-effect-523.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function makingneon(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'royal-text-effect-online-free-471.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function texteffect(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'free-create-a-3d-hologram-text-effect-441.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function galaxystyle(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'create-galaxy-style-free-name-logo-438.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}

export async function lighteffect(text) {
  try {
    const baseUrl = 'https://en.ephoto360.com/'
    let url = baseUrl + 'create-light-effects-green-neon-online-429.html'

    const headers = {
      Cookie: 'PHPSESSID=str8f3mh1evvid59aa95ub3kf5',
    }

    const response = await axios.get(url, { headers })
    let $ = cheerio.load(response.data)

    const token = $('#token').val()
    const buildServerId = $('#build_server_id').val()
    const buildServer = $('#build_server').val()
    const submitValue = $('#submit').val()

    if (!token || !buildServerId || !buildServer || !submitValue) {
      throw new Error('Failed to extract required values from the initial response')
    }

    const form = new FormData()
    form.append('text[]', text) // Use the text provided from the API request
    form.append('submit', submitValue)
    form.append('token', token)
    form.append('build_server', buildServer)
    form.append('build_server_id', buildServerId)

    const response2 = await axios.post(url, form, {
      headers: { ...headers, ...form.getHeaders() },
    })

    const $$ = cheerio.load(response2.data)
    const formValueInput = $$('#form_value_input').val()
    let data

    try {
      data = JSON.parse(formValueInput)
    } catch (parseError) {
      throw new Error('Failed to parse JSON data from response')
    }

    if (!data || !data.id || !data.text || !data.token || !data.build_server || !data.build_server_id) {
      throw new Error('Incomplete data received from the response')
    }

    const form2 = new FormData()
    form2.append('id', data.id)
    form2.append('text[]', data.text[0])
    form2.append('token', data.token)
    form2.append('build_server', data.build_server)
    form2.append('build_server_id', data.build_server_id)

    const response3 = await axios.post(baseUrl + 'effect/create-image', form2, {
      headers: { ...headers, ...form2.getHeaders() },
    })

    if (!response3.data || !response3.data.image) {
      throw new Error('Failed to create image or missing image data in the final response')
    }

    let datas = response3.data

    // Filter out unwanted keys and rename 'image' to 'image_url'
    const filteredData = {
      image_url: data.build_server + datas.image, // Rename 'image' to 'image_url'
      image_code: datas.image_code, // Keep the 'image_code' field
      session_id: datas.session_id, // Keep the 'session_id' field
    }

    return { Astro: filteredData }
  } catch (error) {
    console.error('Error creating logo:', error.message)
    return { error: error.message }
  }
}
