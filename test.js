import fetch from "node-fetch";

export async function AstroApi(url) {
   try {
      const BASE_URL = "https://cobalt.tools";
      const BASE_API = "https://api.cobalt.tools/api";

      // Make the OPTIONS request for CORS preflight
      await fetch(BASE_API + "/json", {
         method: "OPTIONS",
         headers: {
            "access-control-request-method": "POST",
            "access-control-request-headers": "content-type",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
            origin: BASE_URL,
            referer: BASE_URL,
         },
      });

      // Make the POST request to get the JSON response
      const res = await fetch(BASE_API + "/json", {
         method: "POST",
         headers: {
            origin: BASE_URL,
            referer: BASE_URL,
            "user-agent": BASE_URL,
            "content-type": "application/json",
            accept: "application/json",
         },
         body: JSON.stringify({
            url: url,
            filenamePattern: "basic",
         }),
      }).then(v => v.json());

      // Fetch the content from the URL provided in the previous response
      const stream = await fetch(res.url);
      const streamData = await stream.text(); // Fetch the content as text or use another method like .json() or .blob() based on your needs

      // Return the full response data
      return {
         status: stream.status,
         url: stream.url,
         headers: stream.headers.raw(), // headers as raw data
         data: streamData, // full response content data
      };
   } catch (e) {
      throw e;
   }
}

AstroApi("https://www.youtube.com/watch?v=WIGGnZNLDIc");
