import React from 'react'
import './LoginAdmin.css'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import useLogingAdmint from '../../../../hooks/useLogingAdmint';

const LoginAdmin = () => {



    const {register, handleSubmit, reset} = useForm()

	const {LoginAdmint} = useLogingAdmint()

	const submit = (data) => {
        LoginAdmint(data)
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
		<form className='Admint_from' onSubmit={handleSubmit(submit)}>
			<section className='Admint_Logo'>
				<img src="../../../../public/images/Logo SiberEdu.jpg" alt="" />
				<br />
				<h1>La Libertad</h1>
			</section>
			<div>
				<label htmlFor="email">Correo:</label>
				<input {...register("Email")} type="text" required/>
			</div>
			<div>
				<label htmlFor="password">Contraseña:</label>
				<input {...register("Contraseña")} type="password" required/>
			</div>
			<h1 className='From_Olvido'>Olvidaste la contraseña</h1>
			<button >Ingresar</button>
		</form>
		<h1 className='Admint_Olvido'>Olvidaste la contraseña</h1>
	  </article>
	</section>
  )
}

export default LoginAdmin
