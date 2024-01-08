import { useMemo, useState } from 'react'
import trendingGifts from '../json/trendingGifts.json'
import randomGifts from '../json/trendingGifts.json'

export function useGifts() {
    const [actionAndQuery, setActionAndQuery] = useState({ action: null, query: null });
    const [giftsResponse, setGiftsResponse] = useState(null);
  
    const handleAction = (newAction, query) => {
      return () => {
        setActionAndQuery({ action: newAction, query: query })
      }
    }
    useMemo(() => {
      if (actionAndQuery.action === null) return  // The action is null in first render.
      actionAndQuery.query ? console.log('si tiene') : console.log('no tiene'); // Validación de la query
      let dataResponse = [];
      if (actionAndQuery.action === 'trending') {// Aqui vamos a hacer la validacion del action
        dataResponse = trendingGifts.data;
      } else {
        dataResponse.push(randomGifts.data)
      }
      const giftsMapped = dataResponse?.map(gift => ({
        id: gift.id,
        title: gift.title,
        user: gift.username,
        gift: gift.images.original.url.split('?')[0]
      }))
  
  
      setGiftsResponse(giftsMapped)
    }, [actionAndQuery])
    return {handleAction, giftsResponse}
  }
  