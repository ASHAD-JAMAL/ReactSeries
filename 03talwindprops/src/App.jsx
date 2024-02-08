import { useState } from 'react'
import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p4 rounded-xl mb-4'>Tailwind test</h1>
      <Card userName="Ashad"  btnText="click me"/>
      <Card userName= "jamal"/>
    </>
  )
}

export default App
