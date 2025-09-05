import { useState } from 'react'
import './App.css'
import Supalash from './Components/Features/Overlay/Supalash';
import { Outlet } from 'react-router-dom';

function App() {
  const [showSplash, setShowSplash] = useState(false);

  return (
    <>
      {showSplash ? (
        <Supalash onClose={() => setShowSplash(false)}/>
      ) : (
        <div className='flex flex-col min-h-screen'>
          <main className='flex flex-grow'>
            <Outlet />
          </main>
        </div>
      )}
    </>
  )
}

export default App
