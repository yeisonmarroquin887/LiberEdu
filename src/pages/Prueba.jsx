import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const Prueba = () => {
 const {register, handleSubmit, reset} =	useForm()
 const [Roles, setRoles] = useState()
 const Api = "https://backendliberedu.onrender.com/api/v1/roles"
 const submit = (data) => {
   console.log(data)
   
   axios.post(Api, data)
   .then(res => {
	console.log(res.data)
	alert("el rol se creo")
   })
   .catch(err => {
	console.log(err)
	alert("error al crear el rol")
   })
 }

 useEffect(() => {
	axios.get(Api)
	.then(res => setRoles(res.data))
	.catch(err => console.log(err))
 }, [])


  return (
	<div>
		<form onSubmit={handleSubmit(submit)} action="">
			<label htmlFor="">Nombre del rol:</label>
			<input {...register("Nombre")} type="text" required placeholder='Name rol' />
			<button>enviar</button>
		</form>
       <ul>
		{
                  Roles?.map(rol => (
					<li key={rol.id}>{rol.Nombre}</li>
				  ))
		}
	   </ul>
	</div>
  )
}

export default Prueba