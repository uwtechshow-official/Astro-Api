import { ElevenLabsClient } from 'elevenlabs'
import { createWriteStream } from 'fs'
import { v4 as uuidv4 } from 'uuid'
import * as dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { mkdir } from 'fs/promises'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config()

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY

const client = new ElevenLabsClient({
  apiKey: ELEVENLABS_API_KEY,
})

export const createAudioFileFromText = async (text) => {
  return new Promise(async (resolve, reject) => {
    try {
      const audio = await client.generate({
        voice: 'Rachel',
        model_id: 'eleven_turbo_v2_5',
        text,
      })

      const audioDir = path.join(process.cwd(), 'public', 'audio')
      await mkdir(audioDir, { recursive: true })

      const fileName = `${uuidv4()}.mp3`
      const filePath = path.join(audioDir, fileName)
      const fileStream = createWriteStream(filePath)

      audio.pipe(fileStream)
      fileStream.on('finish', () => resolve(`/audio/${fileName}`)) // Resolve with the relative path
      fileStream.on('error', reject)
    } catch (error) {
      reject(error)
    }
  })
}
