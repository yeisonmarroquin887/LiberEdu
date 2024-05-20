import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import useAddCrud from '../../../hooks/useAddCrud'

const CrearPeriodo = ({Cursos}) => {
 const [Idcurso, setIdcurso] = useState()
 const {register, handleSubmit, reset} =	useForm()
 const { addPeriodo} = useAddCrud()

	const submitPerido = (data) => {
        data.cursoId = Idcurso;
	    addPeriodo(data)
	}

  return (
	 <form onSubmit={handleSubmit(submitPerido)} className='CrearCurso' action="">
		<h1>Crear Periodo</h1>
		<div>
			<label htmlFor="">Nombre del periodo</label>
			<input {...register("NombrePeriodo")} type="text" required/>
			<select name="Curso" id="" onChange={(e) =>  setIdcurso(e.target.value)}>
				<option value="">Selecciona un curso</option>
				{
					Cursos?.map((curso => (
						<option key={curso.id} value={curso.id}>
							{curso.NombreCurso}
						</option>
					)))
				}
			</select>
		</div>
		<button>Registrar</button>
			</form>
  )
}

export default CrearPeriodo