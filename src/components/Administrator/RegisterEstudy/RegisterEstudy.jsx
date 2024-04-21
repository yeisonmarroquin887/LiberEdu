import React from 'react'
import './RegisterEstudy.css'

const RegisterEstudy = () => {
  return (
	<section className='AddStudentsAndAcudents'>
	  <article className='Acudents'>
		<h1>Crear Acudiente</h1>
		<form className='Acudents_form' action="">
			<div>
				<label htmlFor="">Nombres:</label>
				<input type="text" />
			</div>
			<div>
				<label htmlFor="">Apellidos:</label>
				<input type="text" />
			</div>
			<div>
				<label htmlFor="">Correo:</label>
				<input type="email" />
			</div>
			<div>
				<label htmlFor="">Contraseña:</label>
				<input type="password" />
			</div>
			<div>
				<label htmlFor="">Cedula:</label>
				<input type="number" />
			</div>
			<button>Registrar</button>
		</form>
	  </article>

	  <article className='Estudents'>
	  <h1>Crear Estudiante</h1>
		<form className='Acudents_form' action="">
			<div>
				<label htmlFor="">Nombres:</label>
				<input type="text" />
			</div>
			<div>
				<label htmlFor="">Apellidos:</label>
				<input type="text" />
			</div>
			<div>
				<label htmlFor="">Correo:</label>
				<input type="email" />
			</div>
			<div>
				<label htmlFor="">Contraseña:</label>
				<input type="password" />
			</div>
			<div>
				<label htmlFor="">No.Identificacion:</label>
				<input type="number" />
			</div>
			<div>
				<label htmlFor="">CC. Acudiene:</label>
				<input type="number" />
			</div>
			<div>
				<label htmlFor="">Curso:</label>
				<select name="" id="">
					<option value="">Selecciona su curso</option>
				</select>
			</div>
			<button>Registrar</button>
		</form>
	  </article>
	</section>
  )
}

export default RegisterEstudy
