require("dotenv").config();

const keyword = process.argv[2] ?? "happy";
const API_KEY = process.env.API_KEY;

async function getGIF() {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  );
  const data = await response.json();
  console.log(data.data);
  return data.data;
}

getGIF();
