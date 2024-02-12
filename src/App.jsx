import { useState } from 'react'
import {Header, Footer} from './components'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Outlet/>
    <Footer />
    </>
  )
}

export default App
