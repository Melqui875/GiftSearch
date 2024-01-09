import { useRef, useEffect, useState } from 'react'

const API_KEY = 'v3hOY1IZBcXXmUpuwem6a39p7i597VLx';
const URL_GIPHY = 'https://api.giphy.com/v1/gifs';
export function useGifts({ gifType }) {
  const query = document.getElementById('query');
  const [gifs, setGifs] = useState(null);
  useEffect(() => {
    if (gifType) {
      fetch(`${URL_GIPHY}/search?api_key=${API_KEY}&q=${gifType === 'search' ? query.value : gifType}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`)
        .then(res => res.json())
        .then(json => {
          const data = json.data;
          setGifs(data)
        })
    }
   
  }, [gifType, query])

  return { gifs }
}