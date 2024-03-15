import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'

function App() {

  return (
    <article>
    <Routes>
       <Route path='/'  element={<Home/>}/>
    </Routes>
    </article>
  )
}

export default App
