import axios from 'axios'

const BOT_TOKEN = '891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4'
export async function Telesticker(url) {
  if (!url.match(/https:\/\/t\.me\/addstickers\//i)) {
    throw new Error('Invalid Telegram sticker URL')
  }

  const packName = url.replace('https://t.me/addstickers/', '')
  const stickerSetUrl = `https://api.telegram.org/bot${BOT_TOKEN}/getStickerSet?name=${encodeURIComponent(packName)}`

  try {
    const response = await axios.get(stickerSetUrl, { headers: { 'User-Agent': 'GoogleBot' } })
    const stickers = response.data.result.stickers

    const results = await Promise.all(
      stickers.map(async (sticker) => {
        const fileId = sticker.thumb.file_id
        const fileUrl = `https://api.telegram.org/bot${BOT_TOKEN}/getFile?file_id=${fileId}`
        const fileResponse = await axios.get(fileUrl)

        return {
          status: 200,
          author: 'Astro',
          url: `https://api.telegram.org/file/bot${BOT_TOKEN}/${fileResponse.data.result.file_path}`,
        }
      })
    )

    return results
  } catch (error) {
    throw new Error(`Failed to fetch stickers: ${error.message}`)
  }
}
