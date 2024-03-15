import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Docentes from './pages/Login/Docente/Docentes'
import Estudiantes from './pages/Login/Estudiante/Estudiantes'
import Acudientes from './pages/Login/Acudientes/Acudientes'

function App() {

  return (
    <article>
    <Routes>
       <Route path='/'  element={<Home/>}/>
       <Route path='/login-docente'  element={<Docentes/>}/>
       <Route path='/login-estudiante'  element={<Estudiantes/>}/>
       <Route path='/login-acudiente'  element={<Acudientes/>}/>
    </Routes>
    </article>
  )
}

export default App
