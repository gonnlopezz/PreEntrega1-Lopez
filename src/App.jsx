import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
    <Navbar/>
    <ItemListContainer greeting="Este es un mensaje enviado"/>
    </>
  )
}

export default App
