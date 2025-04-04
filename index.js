// https://api.giphy.com/v1/gifs/search?api_key=A7vih9kjPI2HKR3lV9LcW2jYDPEoLbrX&q=happy&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips

require("dotenv").config();

async function getGIF() {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=happy&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  );
  const data = await response.json();
  console.log(data.data);
  return data.data;
}

getGIF();
