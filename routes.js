import { facebook, youtube, youtmp3, instagram, twitter, tiktok, pinterest, fetchSpotifyData, wikimedia, Telesticker, GoogleSearch, Bing, wikipedia, fetchNasaNews, techNews, createAudioFileFromText, gitStalk, instaStalk, ipStalk, npmStalk } from './exports/index.js'

import {
  glossysilver,
  writetext,
  blackpinklogo,
  glitchtext,
  advancedglow,
  typographytext,
  pixelglitch,
  neonglitch,
  nigerianflag,
  americanflag,
  deletingtext,
  blackpinkstyle,
  glowingtext,
  underwater,
  logomaker,
  cartoonstyle,
  papercut,
  watercolor,
  effectclouds,
  gradienttext,
  summerbeach,
  luxurygold,
  multicolored,
  sandsummer,
  galaxy,
  nineteenseventeen,
  makingneon,
  texteffect,
  galaxystyle,
  lighteffect,
} from './exports/logo/ephoto360.js'

const handleResponse = (res, promise) => {
  promise.then((result) => res.status(200).json({ creator: 'Astro', status: 200, success: true, ...result })).catch((error) => res.status(500).json({ creator: 'Astro', status: 500, success: false, error: error.message }))
}

const createHandler =
  (service, paramName = 'url') =>
  (req, res) => {
    const param = req.query[paramName]
    if (!param) {
      return res.status(400).json({ creator: 'Astro', status: 400, success: false, message: `${paramName} parameter is missing` })
    }
    handleResponse(res, service(param))
  }

export const facebookDownload = createHandler(facebook)
export const youtubeDownload = createHandler(youtube)
export const youtubeMp3Download = createHandler(youtmp3)
export const instagramDownload = createHandler(instagram)
export const twitterDownload = createHandler(twitter)
export const tiktokDownload = createHandler(tiktok)
export const pinterestDownload = createHandler(pinterest, 'query')
export const spotifyDownload = createHandler(fetchSpotifyData)
export const wikimediaSearch = createHandler(wikimedia, 'title')
export const telegramSticker = createHandler(Telesticker)
export const googleSearch = createHandler(GoogleSearch, 'q')
export const bingSearch = createHandler(Bing, 'query')
export const wikipediaSearch = createHandler(wikipedia, 'title')
export const nasaNews = createHandler(fetchNasaNews, 'date')
export const techNewsSearch = (req, res) => handleResponse(res, techNews())
export const generateAudio = createHandler(createAudioFileFromText, 'text')
export const gitUserStalk = createHandler(gitStalk, 'username')
export const instaUserStalk = createHandler(instaStalk, 'username')
export const ipStalkInfo = createHandler(ipStalk, 'ip')
export const npmPackageStalk = createHandler(npmStalk, 'package')

const createEphoto360Handler = (service) => createHandler(service, 'text')

export const glossySilver = createEphoto360Handler(glossysilver)
export const writeText = createEphoto360Handler(writetext)
export const blackpinkLogo = createEphoto360Handler(blackpinklogo)
export const glitchText = createEphoto360Handler(glitchtext)
export const advancedGlow = createEphoto360Handler(advancedglow)
export const typographyText = createEphoto360Handler(typographytext)
export const pixelGlitch = createEphoto360Handler(pixelglitch)
export const neonGlitch = createEphoto360Handler(neonglitch)
export const nigerianFlag = createEphoto360Handler(nigerianflag)
export const americanFlag = createEphoto360Handler(americanflag)
export const deletingText = createEphoto360Handler(deletingtext)
export const blackpinkStyle = createEphoto360Handler(blackpinkstyle)
export const glowingText = createEphoto360Handler(glowingtext)
export const underwaterEffect = createEphoto360Handler(underwater)
export const logoMaker = createEphoto360Handler(logomaker)
export const cartoonStyle = createEphoto360Handler(cartoonstyle)
export const paperCut = createEphoto360Handler(papercut)
export const waterColor = createEphoto360Handler(watercolor)
export const effectClouds = createEphoto360Handler(effectclouds)
export const gradientText = createEphoto360Handler(gradienttext)
export const summerBeach = createEphoto360Handler(summerbeach)
export const luxuryGold = createEphoto360Handler(luxurygold)
export const multiColored = createEphoto360Handler(multicolored)
export const sandSummer = createEphoto360Handler(sandsummer)
export const galaxyEffect = createEphoto360Handler(galaxy)
export const nineteenSeventeen = createEphoto360Handler(nineteenseventeen)
export const makingNeon = createEphoto360Handler(makingneon)
export const textEffect = createEphoto360Handler(texteffect)
export const galaxyStyle = createEphoto360Handler(galaxystyle)
export const lightEffect = createEphoto360Handler(lighteffect)
