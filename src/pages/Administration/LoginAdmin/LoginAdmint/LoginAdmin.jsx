import React from 'react'
import './LoginAdmin.css'
import { useNavigate } from 'react-router-dom'

const LoginAdmin = () => {

	const navigate = useNavigate();
	const Welcome = () => {
		navigate("/admin-welcome")
	}

  return (
	<section className='Admint'>
	  <header className='Admint_Header'>
		<figure>
			<img src="../../../../images/Logo SiberEdu.jpg" alt="" />
		</figure>
	  </header>

	  <article className='Admint_body'>
		<figure>
			<img className='AdmintMovil' src="../../../../images/Admint.jpg" alt="" />
			<img className='AdmintPc' src="../../../../images/Admint-Pc.jpg" alt="" />
		</figure>
		<form className='Admint_from' action="">
			<section className='Admint_Logo'>
				<img src="../../../../public/images/Logo SiberEdu.jpg" alt="" />
				<br />
				<h1>La Libertad</h1>
			</section>
			<div>
				<label htmlFor="email">Correo:</label>
				<input type="text" required/>
			</div>
			<div>
				<label htmlFor="password">Contraseña:</label>
				<input type="password" required/>
			</div>
			<h1 className='From_Olvido'>Olvidaste la contraseña</h1>
			<button onClick={Welcome}>Ingresar</button>
		</form>
		<h1 className='Admint_Olvido'>Olvidaste la contraseña</h1>
	  </article>
	</section>
  )
}

export default LoginAdmin
