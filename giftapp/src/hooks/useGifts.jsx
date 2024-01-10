import { useState } from "react";

const API_KEY = 'v3hOY1IZBcXXmUpuwem6a39p7i597VLx';
const URL_GIPHY = 'https://api.giphy.com/v1/gifs';

export function useGifts() {
  const [loading, setLoaging] = useState(false)

  const getSearchGifs = async (search) => {
    setLoaging(true)
    const response = await fetch(`${URL_GIPHY}/search?api_key=${API_KEY}&q=${search}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`)
    const res = await response.json()

    setLoaging(false)

    return res.data
  }

  const getTrendingGifs = async () => {
    setLoaging(true)

    const response = await fetch(`${URL_GIPHY}/trending?api_key=${API_KEY}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`)
    const res = await response.json()

    setLoaging(false)
    return res.data
  }

  const getRandomGifs = async () => {
    setLoaging(true)

    const response = await fetch(`${URL_GIPHY}/random?api_key=${API_KEY}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`)
    const res = await response.json()
    console.log([res.data]);
    setLoaging(false)
    return [res.data]
  }

  return { getSearchGifs, getTrendingGifs, getRandomGifs, loading }
}