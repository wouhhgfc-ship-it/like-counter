import { useState } from 'react'
import Likes from './components/Likes.jsx';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Likes/>
    </>
  )
}

export default App
