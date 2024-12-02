import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import Games from './components/Games'
import Game from './components/Game'

function App() {
  return (
    <>
    <nav className='headernav'>
        <ul className='headerlist'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Games">Games</Link></li>
        </ul>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
      <Route path='/games'>
        <Route index element = {<Games />} />
        <Route path=':gameid' element={<Game/>} />
      </Route>
      
    </Routes>
    </>
  )
}

export default App
