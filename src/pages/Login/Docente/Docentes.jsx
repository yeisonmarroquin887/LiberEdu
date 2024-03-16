import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import '../styles/styles.css'

const Docentes = () => {
	const [Errorr, setErrorr] = useState(false)
	const navigate = useNavigate()
	const volver = () => {
		navigate("/")
	}

    const  error = () => {
		setErrorr(true)
	}
	const  noerror = () => {
		setErrorr(false)
	}


  return (
	<div className='Login'>
		<button className='Volver' onClick={volver}>Volver</button>
	    <div className="Login_form">
			<figure className="Login_figure">
				<img src="../../../../images/Logo SiberEdu.jpg" alt="" />
				<h1>La Libertad</h1>
			</figure>
			<h1 className='Rol'>Docente</h1>
			<form className='Login_form-from' action="">
				<div>
					<label htmlFor="">Correo:</label>
					<input type="text" placeholder='docente@gmail.com'/>
				</div>
				<div>
					<label htmlFor="">Contraseña:</label>
					<input type="password"  placeholder='------'/>
				</div>
				<h2 className='Olvido'>Olvidaste la contraseña</h2>
				<div className='Login_btn'>
					<button onClick={error}>Ingresar</button>
				</div>
			</form>
			<div className={Errorr ?"error" :"noerror"}>
				<h1>Error</h1>
				<p>Has ingresado mal la contraseña <br /> o no eres docente</p>
				<button onClick={noerror}>Intentar de nuevo</button>
			</div>
		</div>
	</div>
  )
}

export default Docentes
