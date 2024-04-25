import React from 'react'
import './WelcomeStudenst.css'
import { useNavigate } from 'react-router-dom'

const WelcomeStudents = () => {

	const navigate = useNavigate()
	const Getinto = () => {
		navigate("/work-students")
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
    <div className="bienvenida-estudiante">
        <h1>Bienvenido a tu <br /> curso</h1>
    </div>
    <div className="container">
        <div className="contenido">
            <div className="once">
                <p>Once</p>
            </div>
            <div className="parrafo">
               <p>En el horizonte se vislumbra el brillante sol del conocimiento</p>
            </div>
            <br />
            <div className="boton">
              <button onClick={Getinto} className="ingresar">Ingresar</button>
            </div>
        </div>
    </div>
	</div>
  )
}

export default WelcomeStudents
