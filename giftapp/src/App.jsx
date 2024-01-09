import { useState } from 'react'
import './App.css'
import { useGifts } from './hooks/useGifts'
import { Gifts } from './components/Gifts'

function App() {
  const [gifType, setGifType] = useState(null)
  const { gifs } = useGifts({ gifType })

  const handleClick = (typeToSearch) => {
    setGifType(typeToSearch)
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>🎉 GIFTS 🎉</h1>
      <header>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex'>
            <input id='query' placeholder='Funny, Sad, Cats, Hourse...' />
            <button onClick={() => handleClick('search')}>Search</button>
          </div>
          <div>
            <button onClick={() => handleClick('trending')}>Trending</button>
            <button onClick={() => handleClick('random')}>Random</button>
          </div>
        </div>
        <div className='flex justify-center'>
        </div>
      </header>

      <main className='w-full flex justify-center items-center flex-wrap gap-6 bg-slate-900 p-4 rounded-xl'>
        {!gifs ? 'No result found!' : <Gifts gifts={gifs} />}
      </main>
    </div>
  )
}

export default App