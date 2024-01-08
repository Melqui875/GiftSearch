import './App.css'
import { Gifts } from './components/Gifts';
import { useGifts } from './hooks/useGifts';

function App() {
  const {handleAction, giftsResponse} = useGifts();
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>🎉 GIFTS 🎉</h1>
      <header>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex'>
            <input name='query' placeholder='Funny, Sad, Cats, Hourse...' />
            <button>Search</button>
          </div>
          <div>
            <button onClick={handleAction('trending')}>Trending</button>
            <button onClick={handleAction('random')}>Random</button>
          </div>
        </div>
        <div className='flex justify-center'>
        </div>
      </header>

      <main className='flex justify-center items-center'>
        <Gifts gifts={giftsResponse} />
      </main>
    </div>
  )
}

export default App
