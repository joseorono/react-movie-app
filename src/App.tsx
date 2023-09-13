import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import CopyrightFooter from './components/CopyrightFooter'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='mt-5'>GIPHY API Search Test</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <CopyrightFooter />
      
    </>
  )
}

export default App
