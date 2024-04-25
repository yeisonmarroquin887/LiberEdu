import React from 'react'
import './WelcomeAcudents.css'

const WelcomeAcudent = () => {
  return (
	<div>
	    <header class="barra">
        <div class="logo">
            <figure>
                <img src="../../../../images/Logo SiberEdu.jpg" alt="" />
            </figure>
            <i class='bx bxs-user-circle'></i>
        </div>
    </header>
    <div class="bienvenida-acudiente">
        <h1>Bienvenido <br /> Acudiente</h1>
        <p>Tus estudiantes aqui:</p>
    </div>
    <header class="containerr">
        <div class="contenidoo">
            <div class="estu1">
                <p>Estudiante uno</p>
                <button>Ver</button>
            </div>
            <br />
            <div class="estu2">
                <p>Estudiante dos</p>
                <button>Ver</button>
            </div>
            <br />
            <div class="estu3">
                <p>Estudiante tres</p>
                <button>Ver</button>
            </div>
        </div>
    </header>

    <div class="message-container">
        <div class="message sender">
            <div class="message-header">
                <span class="sender-name">Profesor Smith</span>
                <span class="message-time">10:30 AM</span>
            </div>
            <div class="message-body">
                Su hijo Juan ha mostrado un gran progreso en matemáticas últimamente. ¡Estoy muy contento con su trabajo!
            </div>
        </div>
        <div class="message sender">
            <div class="message-header">
                <span class="sender-name">Profesora Johnson</span>
                <span class="message-time">11:15 AM</span>
            </div>
            <div class="message-body">
                Recuerde que hay una reunión de padres y maestros programada para la próxima semana.
            </div>
        </div>
    </div>

	</div>
  )
}

export default WelcomeAcudent
