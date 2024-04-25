import React from 'react'
import './WelcomeAcudents.css'
import { useNavigate } from 'react-router-dom'

const WelcomeAcudent = () => {
	const navigate = useNavigate();
	const Getinto = () => {
		navigate("/see-acudent")
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
    <div className="bienvenida-acudiente">
        <h1>Bienvenido <br /> Acudiente</h1>
        <p>Tus estudiantes aqui:</p>
    </div>
    <header className="containerr">
        <div className="contenidoo">
            <div className="estu1">
                <p>Estudiante uno</p>
                <button onClick={Getinto}>Ver</button>
            </div>
            <br />
            <div className="estu2">
                <p>Estudiante dos</p>
                <button>Ver</button>
            </div>
            <br />
            <div classclassName="estu3">
                <p>Estudiante tres</p>
                <button>Ver</button>
            </div>
        </div>
    </header>

    <div classclassName="message-container">
        <div classclassName="message sender">
            <div classclassName="message-header">
                <span classclassName="sender-name">Profesor Smith</span>
                <span classclassName="message-time">10:30 AM</span>
            </div>
            <div classclassName="message-body">
                Su hijo Juan ha mostrado un gran progreso en matemáticas últimamente. ¡Estoy muy contento con su trabajo!
            </div>
        </div>
        <div classclassName="message sender">
            <div classclassName="message-header">
                <span classclassName="sender-name">Profesora Johnson</span>
                <span classclassName="message-time">11:15 AM</span>
            </div>
            <div classclassName="message-body">
                Recuerde que hay una reunión de padres y maestros programada para la próxima semana.
            </div>
        </div>
    </div>

	</div>
  )
}

export default WelcomeAcudent
