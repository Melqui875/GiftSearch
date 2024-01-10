import { useState } from 'react';
import './App.css';
import { useGifts } from './hooks/useGifts';
import { Gifts } from './components/Gifts';
import { FaSearch , FaRandom   } from 'react-icons/fa';
import { IoIosTrendingUp } from 'react-icons/io';


function App() {
  const [search, setSearch] = useState('')
  const [gifs, setGifts] = useState(null)
  const { getSearchGifs, loading, getTrendingGifs, getRandomGifs } = useGifts()

  const handleSumbit = (event) => {
    event.preventDefault()
    if(search)
    getSearchGifs(search).then((data) => {
      setGifts(data)
    })
  }

  const handleTrending = () => {
    getTrendingGifs().then((data) => {
      setGifts(data)
    })
  }

  const handleRamdon = () => {
    getRandomGifs('random').then((data) => {
      setGifts(data)
    })
  }

  return (
    <div className='flex flex-col justify-center items-center font-mono'>
      <div className='flex flex-row justify-center items-center bg-slate-900 w-full'>
      <h1 className='text-sky-400'>GIFTS</h1>
      <p>By@MelquicedecZelaya</p>
      </div>
      <header className='flex flex-col items-center py-10'>
        <form onSubmit={handleSumbit} className='flex flex-col justify-center items-center'>
          <div className='flex items-center'>
            <input className='flex w-full' placeholder='Funny, Sad, Cats...' value={search} onChange={(event) => setSearch(event.target.value)} />
            <button className='absolute ml-44 rounded-full hover:bg-transparent p-2' type='submit'><FaSearch /></button>
          </div>
        </form>
          <div>
            <button className='bg-gradient-to-r from-cyan-500 to-blue-500 ' onClick={handleTrending}><IoIosTrendingUp /></button>
            <button className='bg-gradient-to-r from-cyan-500 to-blue-500 ' onClick={handleRamdon}><FaRandom /></button>
          </div>
      </header>

    {loading ? 'CARGANDO...' : null}
    
      <main className='w-full flex justify-center items-center flex-wrap gap-6 bg-slate-900 p-4 rounded-xl'>
        {!gifs ? 'No result found!' : <Gifts gifts={gifs} />}
      </main>
    </div>
  )
}

export default App