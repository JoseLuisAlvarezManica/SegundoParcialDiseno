import { useState } from 'react'
import {db} from './services/firebaseConfig'
import { Menu } from './components/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu />
    </>
  )
}

export default App
