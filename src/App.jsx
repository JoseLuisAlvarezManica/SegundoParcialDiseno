import { useState } from 'react'
import {db} from './services/firebaseConfig'
import { Menu } from './components/Menu'
import { Orders } from './components/Orders'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu />
      <Orders />
    </>
  )
}

export default App
