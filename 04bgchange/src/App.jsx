import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor]=useState("blue")
  const changeBackground = () => {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColor(randomColor);
  };
  return (
    
      <div
      style={{backgroundColor:color}}>
      <h1>Click to Change Background</h1>
      <button onClick={changeBackground}>Change Background</button>
    </div>
    );
  };
export default App
