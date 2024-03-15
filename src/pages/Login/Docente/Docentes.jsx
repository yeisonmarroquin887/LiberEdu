import React from 'react'
import { useNavigate} from 'react-router-dom'
import '../styles/styles.css'

const Docentes = () => {
	const navigate = useNavigate()
	const volver = () => {
		navigate("/")
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
					<button>Ingresar</button>
				</div>
			</form>
		</div>
	</div>
  )
}

export default Docentes
