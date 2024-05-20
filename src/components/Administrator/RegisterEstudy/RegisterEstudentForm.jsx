import React, { useEffect, useState } from 'react'
import useAddCrud from '../../../hooks/useAddCrud'
import { useForm } from 'react-hook-form'
import useAddCruddTwo from '../../../hooks/useAddCruddTwo'

const RegisterEstudentForm = ({Roles}) => {
	const [IdRol, setIdRol] = useState()
	const [IdCurso, setIdCurso] = useState()
	const {getCursos, Curso} = useAddCrud()
	const {getAcudiente, Acudiente, addEstudiante} = useAddCruddTwo()
	const [selectedAcudienteId, setSelectedAcudienteId] = useState();
	useEffect(() => {
		getCursos(),
		getAcudiente()
	}, [])
const {register, handleSubmit, reset} = useForm()

const submit = (data) => {
    data.acudienteId = selectedAcudienteId
	data.rolId = IdRol
	data.cursoId = IdCurso
	addEstudiante(data);
}
console.log(IdCurso)
    // Función para manejar el cambio en el campo de número de identificación del acudiente
    const handleAcudienteIdentificationChange = (e) => {
        const identificationNumber = e.target.value;
        // Filtrar la lista de acudientes para encontrar el que tenga el número de identificación ingresado
        const selectedAcudiente = Acudiente.filter(a => {
			return a.Identificacion == identificationNumber
		})
		console.log(selectedAcudiente)
        if (selectedAcudiente) {
            // Si se encuentra un acudiente con el número de identificación ingresado, guardar su ID
            setSelectedAcudienteId(selectedAcudiente[0].id);
        } else {
            // Si no se encuentra un acudiente con el número de identificación ingresado, dejar el ID seleccionado como null
            setSelectedAcudienteId(null);
        }
    };

  return (
	<article className='Estudents'>
	  <h1>Crear Estudiante</h1>
		<form onSubmit={handleSubmit(submit)} className='Estudents_form' action="">
			<div>
			<div>
				<label htmlFor="">Rol:</label>
				<select name="" id="" onChange={(e) => {setIdRol(e.target.value)}}>
					<option value="">Selecciona el rol</option>
					{
						Roles?.map((rol) => (
							<option key={rol.id} value={rol.id}>{rol.Nombre}</option>
						))
					}
				</select>
			</div>
			<div>
				<label htmlFor="">Nombres:</label>
				<input {...register("Nombres")}  type="text" />
			</div>

			<div>
				<label htmlFor="">Correo:</label>
				<input {...register("Email")} type="email" />
			</div>
			<div>
				<label htmlFor="">Contraseña:</label>
				<input {...register("Contraseña")} type="password" />
			</div>
			</div>

			<div className='div2'>
			<div>
				<label htmlFor="">Apellidos:</label>
				<input {...register("Apellidos")} type="text" />
			</div>
			<div>
				<label htmlFor="">No.Identificacion:</label>
				<input {...register("Identificacion")} type="number" />
			</div>
			<div>
				<label htmlFor="">CC. Acudiene:</label>
				<input type="number" onChange={handleAcudienteIdentificationChange}/>
			</div>
			<div>
				<label htmlFor="">Curso:</label>
				<select name="" id="" onChange={(e) => setIdCurso(e.target.value)}>
					<option value="">Selecciona su curso</option>
					{
						Curso?.map((curso) => (
							<option key={curso.id} value={curso.id}>{curso.NombreCurso}</option>
						))
					}
				</select>
			</div>
			</div>
		
			
			<button>Registrar</button>
		</form>
	  </article>
  )
}

export default RegisterEstudentForm