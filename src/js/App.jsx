import { useState } from 'react'
import reactLogo from '../img/react.svg'
import viteLogo from '/vite.svg'
import '../css/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
