import React from 'react'
import './Registerbooks.css'

const RegisterBooks = () => {
  return (
	<section className='Books'>
	  <h1>Subir libros</h1>
	  <form className='Books_form' action="">
		<div>
			<label htmlFor="">Nombre del libro:</label>
			<input type="text" required/>
		</div>
		<div>
			<label htmlFor="">Archivo PDF:</label>
			<input className='Pdf' type="file" />
		</div>
		<button>Subir</button>
	  </form>
	</section>
  )
}

export default RegisterBooks
