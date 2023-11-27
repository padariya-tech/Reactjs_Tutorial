import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1 className='bg-green-300 text-black p-4 rounded-xl mb-10 '>Tailwind Test</h1>
     
      
      <Card username="nij" btntext="jay hind dosto"/>
      <Card username="hitesh" btntext="welcom to chai and code"/>
      
     
  
    </>
    
  )
}

export default App
