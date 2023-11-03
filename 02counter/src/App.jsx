import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


        

function App() {
  let [counter,setcounter]=useState(0)
  // let counter = 0;
  function addval() {
    console.log("counter " ,counter);
    // counter=counter+1;
    setcounter(counter+1)
    if(counter>20)
    {
      setcounter(counter)
    }
    

  }
  function rmvval() {
    console.log("counter " ,counter);
    // counter=counter+1;
    setcounter(counter-1)
    if(counter<0)
    {
      setcounter(counter)
    }
    

  }

  return (
    <>
      <h1>handle counter value</h1>
      <h2 id="inc">counter value: {counter}</h2>
      <button onClick={addval}>Add Value</button>
      <br />
      <button onClick={rmvval}>remove value</button>
      <footer>{counter}</footer>
      
    </>
  )
}

export default App
  