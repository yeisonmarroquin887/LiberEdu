import React from 'react'
import './WorkStudent.css'
import { useNavigate } from 'react-router-dom'

const WorkStudent = () => {
	 const navigate = useNavigate()
	 const Volver = () => {
		navigate("/welcome-students")
	 }
  return (
	<div>
	      <header className="barra">
        <div className="logo">
            <figure>
               <img src="../../../../images/Logo SiberEdu.jpg" alt="" />
            </figure>
            <i className='bx bxs-user-circle'></i>
        </div>
    </header>
    <header className="barra-vertical">
        <div className="botones">
            <button className="Students-option">Notas</button>
            <button className="Students-option">Asistencia</button>
            <button className="Students-option">Trabajos</button>
            <button className="Students-option">Material de formación</button>
            <button className="Students-option">Libros</button>
            <button onClick={Volver} className="Students-option">Volver</button>
        </div>
    </header>
	</div>
  )
}

export default WorkStudent
