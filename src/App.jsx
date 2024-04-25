import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Docentes from './pages/Login/Docente/Docentes'
import Estudiantes from './pages/Login/Estudiante/Estudiantes'
import Acudientes from './pages/Login/Acudientes/Acudientes'
import LoginAdmin from './pages/Administration/LoginAdmin/LoginAdmint/LoginAdmin'
import Welcome from './pages/Administration/WelcomeAdmint/Welcome'
import WelcomeTeacher from './pages/Teachers/WelcomeDocente/WelcomeTeacher'
import TeacherWork from './pages/Teachers/TeacherWork/TeacherWork'
import WelcomeStudents from './pages/Estudents/WelcomeEstudents/WelcomeStudents'
import WorkStudent from './pages/Estudents/WorkStudents/WorkStudent'
import WelcomeAcudent from './pages/Acudents/WelcomeAcuents/WelcomeAcudent'

function App() {

  return (
    <article>
    <Routes>
       <Route path='/'  element={<Home/>}/>
       <Route path='/login-docente'  element={<Docentes/>}/>
       <Route path='/welcome-docente'  element={<WelcomeTeacher/>}/>
       <Route path='/work-docente'  element={<TeacherWork/>}/>
       <Route path='/login-estudiante'  element={<Estudiantes/>}/>
       <Route path='/welcome-students'  element={<WelcomeStudents/>}/>
       <Route path='/work-students'  element={<WorkStudent/>}/>
       <Route path='/login-acudiente'  element={<Acudientes/>}/>
       <Route path='/welcome-acudent'  element={<WelcomeAcudent/>}/>
       <Route path='/admin'  element={<LoginAdmin/>}/>
       <Route path='/admin-welcome'  element={<Welcome/>}/>
    </Routes>
    </article>
  )
}

export default App
