import { useState } from 'react'
import './App.css'
import ChipsInput from './Component/ChipsInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-container'>
      <h1>Chips Input</h1>
      <ChipsInput/>
    </div>
  )
}

export default App
