import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCount] = useState(5)

  function addValue (){
    setCount(count+1)
  }

  function removeValue(){
    count <=0 ? count =0:setCount(count-1);
    
  }
  return (
    <>
      
      <h1>count ={count}</h1>
      <button
      onClick={addValue}
      >add </button>
      <button
      onClick={removeValue}
      >remove </button>
    </>
  )
}

export default App
