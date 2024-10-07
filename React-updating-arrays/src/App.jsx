import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import Footer from './footer'
import FavoriteGames from './FavoriteGames'

function App() {

  return (
    <>
    <Header />
    <FavoriteGames />
    <Footer />
    </>
  )
}

export default App
