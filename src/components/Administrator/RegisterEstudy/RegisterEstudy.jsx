import React, { useEffect, useState } from 'react'
import './RegisterEstudy.css'
import RegisterEstudentForm from './RegisterEstudentForm'
import useAddCruddTwo from '../../../hooks/useAddCruddTwo'
import { useForm } from 'react-hook-form'
import useAddCrud from '../../../hooks/useAddCrud'

const RegisterEstudy = () => {
	const [IdRol, setIdRol] = useState()
    const {addAcudent} = useAddCruddTwo()
	const { getRoles, Roles} = useAddCrud()
    const {register, handleSubmit, reset} = useForm()
 
	useEffect(() => {
		getRoles()
	}, [])
	const submit = (data) => {
		data.rolId = IdRol
       addAcudent(data)
	}



  return (
	<section className='AddStudentsAndAcudents'>
	
	  <article className='Acudents'>
		<h1>Crear Acudiente</h1>
		<form onSubmit={handleSubmit(submit)} className='Acudents_form' action="">
			<div>
			<div >
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
				<input {...register("Nombres")} type="text" />
			</div>
			<div>
				<label htmlFor="">Apellidos:</label>
				<input {...register("Apellidos")} type="text" />
			</div>
			<div>
				<label htmlFor="">Correo:</label>
				<input {...register("Email")} type="email" />
			</div>
			</div>
			<div className='div1'>
               <div>
				<label htmlFor="">Contraseña:</label>
				<input {...register("Contraseña")} type="password" />
			</div>
			<div>
				<label htmlFor="">Telefono:</label>
				<input {...register("Telefono")} type="number" />
			</div>
			<div>
				<label htmlFor="">Cedula:</label>
				<input {...register("Identificacion")} type="number" />
			</div>
			</div>
			
			
			<button>Registrar</button>
		</form>
	  </article>
           <RegisterEstudentForm Roles={Roles} />
	</section>
  )
}

export default RegisterEstudy
