import React from 'react'
import './CrearCurso.css'

const CrearCurso = () => {
  return (
	<div className='AddCurso'>
	  <form className='CrearCurso' action="">
		<h1>Crear Curso</h1>
		<div>
			<label htmlFor="">Nombre del curso:</label>
			<input type="text" required/>
		</div>
		<button>Registrar</button>
	  </form>

	  <form className='CrearCurso' action="">
		<h1>Crear Materia</h1>
		<div>
			<label htmlFor="">Nombre de la materia</label>
			<input type="text" required/>
			<select name="Curso" id="">
				<option value="">Selecciona un curso</option>
			</select>
		</div>
		<button>Registrar</button>
	  </form>
	</div>
  )
}

export default CrearCurso
