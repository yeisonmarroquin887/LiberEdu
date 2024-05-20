import React, { useState } from 'react'
import './CrearCurso.css'
import useAddCrud from '../../../hooks/useAddCrud'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import CrearPeriodo from './CrearPeriodo'
import CrearMateria from './CrearMateria'

const CrearCurso = () => {
	const {addCurse, getCursos, Curso, addPeriodo} = useAddCrud()
	const {handleSubmit, register, reset} = useForm()

	const submit = (data) => {
         addCurse(data)
	}

	useEffect(() => {
        getCursos()
	},[])
console.log(Curso)
  return (
	<div className='AddCurso'>
		<br /><br /><br /><br />
		<br /><br /><br /><br />
		<br /><br /><br /><br />
		<br /><br /><br /><br />
	  <form onSubmit={handleSubmit(submit)} className='CrearCurso' action="">
		<h1>Crear Curso</h1>
		<div>
			<label htmlFor="">Nombre del curso:</label>
			<input {...register("NombreCurso")} type="text" required/>
		</div>
		<div>
			<label htmlFor="">Descripcion:</label>
			<input {...register("Descripcion")} type="text" required/>
		</div>
		<button>Registrar</button>
	  </form>
       <CrearPeriodo  Cursos={Curso}/>
       <CrearMateria Cursos={Curso}/>
	</div>
  )
}

export default CrearCurso
