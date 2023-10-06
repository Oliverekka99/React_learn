import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Learning</h1>
      <Cards username = "Rohan" btnText="Visit me"/>
      <br/>
      <Cards username= "Dinel Samuel" btnText="Visit me"/>
    </>
  )
}

export default App
