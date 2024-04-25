import React from 'react'
import './WelcomeTeacher.css'
import { useNavigate } from 'react-router-dom'

const WelcomeTeacher = () => {
    const navigate = useNavigate()
    const Getinto = () => {
        navigate("/work-docente")
    }

  return (
	<div>
	      <header className="barra">
        <div className="logo">
			<figure>
				<img src="../../../images/Logo SiberEdu.jpg" alt="" />
			</figure>
            <i className='bx bxs-user-circle'></i>
        </div>
    </header>
	<div className="bienvenida-docente">
        <h1>Bienvenido <br /> Docente</h1>
        <p>Tus cursos a dar clase</p>
    </div>
	<div className="container">
        <div className="contenido">
            <div className="once">
                <p>Once</p>
            </div>
           <br />
		   <br />
            <button onClick={Getinto} className="boton1">Ingresar</button>
        </div>
    </div>
	<div className="container2">
        <div className="contenido2">
            <div className="decimo">
                <p>Decimo</p>
            </div>
            <br />
			<br />
            <button className="boton2">Ingresar</button>
        </div>
    </div>
	</div>
  )
}

export default WelcomeTeacher
