import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter,setCounter] = useState(0)

  // let counter = 5; this variable are not propogate in ui

  const addValue = ()=>{
    counter = counter+1;
    if(counter>-1 && counter<21){
      setCounter(counter)
    }
  }
  const removeValue = ()=>{
    counter=counter-1;
    if(counter>-1){
      setCounter(counter)
    }
  }
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button
      onClick={addValue}
      >Add Value {counter} </button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value {counter} </button>
    </>
  )
}
export default App
