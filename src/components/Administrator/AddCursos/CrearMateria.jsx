import React, { useEffect, useState } from 'react'
import useAddCrud from '../../../hooks/useAddCrud'
import { useForm } from 'react-hook-form'

const CrearMateria = ({Cursos}) => {
  const {getPeriodo, Perido, addMateria} = useAddCrud()
  const [Idperiodo, setIdperiodo] = useState()
  const [IdCurso, setIdCurso] = useState()
  const {register, handleSubmit, reset} = useForm()
  
  useEffect(() => {
	getPeriodo()
  }, [])

  const submit = (data) => {
	data.cursoId = IdCurso;
	data.periodoId = Idperiodo;
	addMateria(data)
  }


  return (
	<form onSubmit={handleSubmit(submit)} className='CrearCurso' action="">
	<h1>Crear Materia</h1>
	<div>
		<label htmlFor="">Nombre de la materia</label>
		<input {...register("NombreMate")} type="text" required/>
		<select name="Curso" id="" onChange={(e) => setIdCurso(e.target.value)}>
			<option value="">Selecciona un Curso</option>
			{
				Cursos?.map((curso) => (
					<option key={curso.id} value={curso.id}>{curso.NombreCurso}</option>
				))
			}
		</select>
		<select name="Curso" id="" onChange={(e) => setIdperiodo(e.target.value)}>
			<option value="">Selecciona el Periodo</option>
			{
				Perido?.map((periodo) => (
					<option key={periodo.id} value={periodo.id}>{periodo.NombrePeriodo} Curso: {periodo.curso.NombreCurso}</option>
				))
			}
		</select>
	</div>
	<button>Registrar</button>
  </form>
  )
}

export default CrearMateria