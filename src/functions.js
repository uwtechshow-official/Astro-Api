import ffmpeg, { setFfmpegPath } from "fluent-ffmpeg";
import { path } from "@ffmpeg-installer/ffmpeg";

// Set ffmpeg path
setFfmpegPath(path);

/**
 * Convert an audio file to WhatsApp-compatible PTT format (Opus in Ogg).
 *
 * @param {string} inputPath - Path to the input audio file.
 * @param {string} outputPath - Path to save the converted output file.
 * @returns {Promise<void>} - A Promise that resolves when the conversion is complete.
 */
function convertToWhatsAppPTT(inputPath, outputPath) {
   return new Promise((resolve, reject) => {
      ffmpeg(inputPath)
         .toFormat("opus")
         .audioCodec("libopus")
         .audioChannels(1) // Mono channel for PTT
         .audioFrequency(48000) // WhatsApp uses 48kHz for PTT
         .on("end", () => {
            console.log(`Conversion completed: ${outputPath}`);
            resolve();
         })
         .on("error", err => {
            console.error(`Error during conversion: ${err.message}`);
            reject(err);
         })
         .save(outputPath);
   });
}

/**
 * Convert an audio file to WhatsApp-compatible format (AAC in M4A).
 *
 * @param {string} inputPath - Path to the input audio file.
 * @param {string} outputPath - Path to save the converted output file.
 * @returns {Promise<void>} - A Promise that resolves when the conversion is complete.
 */
function convertToWhatsAppAudio(inputPath, outputPath) {
   return new Promise((resolve, reject) => {
      ffmpeg(inputPath)
         .toFormat("aac")
         .audioCodec("aac")
         .audioChannels(2) // Stereo channels for higher quality
         .audioFrequency(44100) // Standard sample rate for audio files
         .on("end", () => {
            console.log(`Audio conversion completed: ${outputPath}`);
            resolve();
         })
         .on("error", err => {
            console.error(`Error during audio conversion: ${err.message}`);
            reject(err);
         })
         .save(outputPath);
   });
}

/**
 * Convert a video file to WhatsApp-compatible format (H.264 in MP4).
 *
 * @param {string} inputPath - Path to the input video file.
 * @param {string} outputPath - Path to save the converted output file.
 * @returns {Promise<void>} - A Promise that resolves when the conversion is complete.
 */
function convertToWhatsAppVideo(inputPath, outputPath) {
   return new Promise((resolve, reject) => {
      ffmpeg(inputPath)
         .videoCodec("libx264") // H.264 video codec
         .audioCodec("aac") // AAC audio codec
         .outputOptions([
            "-preset slow", // Video encoding speed/quality tradeoff
            "-crf 28", // Constant Rate Factor for quality (lower is better)
            "-movflags +faststart", // Optimize for streaming
         ])
         .format("mp4") // MP4 container format
         .on("end", () => {
            console.log(`Video conversion completed: ${outputPath}`);
            resolve();
         })
         .on("error", err => {
            console.error(`Error during video conversion: ${err.message}`);
            reject(err);
         })
         .save(outputPath);
   });
}

export default {
   convertToWhatsAppPTT,
   convertToWhatsAppAudio,
   convertToWhatsAppVideo,
};
