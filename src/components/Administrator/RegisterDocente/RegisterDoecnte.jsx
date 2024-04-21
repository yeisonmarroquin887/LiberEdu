import React from 'react'
import './RegisterDocente.css'

const RegisterDoecnte = () => {
  return (
	<div className='AddDocentes'>
       <h1>Crear Docentes</h1>
	   <form className='AddDocentes_form' action="">
		<div>
        <div>
			<label htmlFor="">Nombres:</label>
			<input type="text" required/>
		</div>
		<div>
			<label htmlFor="">Apellidos:</label>
			<input type="text" required/>
		</div>
		<div>
			<label htmlFor="">Correo:</label>
			<input type="email" required/>
		</div>			
		</div>

		<div className='Select'>
		<div>
			<label htmlFor="">Contraseña:</label>
			<input type="password" required/>
		</div>
		<div>
			<label htmlFor="">Cursos:</label>
		    <select name="" id="" >
				<option value="">Selecciona sus Cursos</option>
			</select>
		</div>
		<div>
			<label htmlFor="">Materias:</label>
		    <select name="" id="" >
				<option value="">Selecciona sus materias</option>
			</select>
		</div>
		</div>
		<button>Registrar</button>
	   </form>
	</div>
  )
}

export default RegisterDoecnte
