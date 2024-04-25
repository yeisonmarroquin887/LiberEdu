import React from 'react'
import './TeacherWork.css'
import { useNavigate } from 'react-router-dom'

const TeacherWork = () => {

    const navigate = useNavigate()
	const volver = () => {
		navigate("/welcome-docente")
	}

  return (
	<div>
	  <header className="barra">
        <div className="logo">
            <figure>
                <img src="../../../../images/Logo SiberEdu.jpg" alt="" />
            </figure>
            <p className="ini-text">Once</p>
            <i className='bx bxs-user-circle'></i>
        </div>
    </header>
    <header className="barra-vertical">
        <div className="botones">
            <button className="Teacher-option">Asistencias</button>
            <button className="Teacher-option">Trabajos</button>
            <button className="Teacher-option">Material de estudio</button>
            <button className="Teacher-option">Estudiantes</button>
            <button className="Teacher-option">Cargar libros</button>
            <button onClick={volver} className="Teacher-option">Volver</button>
        </div>
    </header>
	</div>
  )
}

export default TeacherWork
