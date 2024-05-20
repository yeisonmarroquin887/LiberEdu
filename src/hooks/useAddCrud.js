import axios from 'axios';
import { useState } from 'react';
const Api = import.meta.env.VITE_REACT_APP_URL;


const useAddCrud = () => {
	const [Curso, setCurso] = useState()
	const [Perido, setPeriodo] = useState()
	const [Materia, setPMateria] = useState()
	const [Roles, setRoles] = useState()

  const addCurse = (datos) => {
	axios.post(`${Api}/curso`, datos)
	.then(res => {
		console.log(res.data)
		alert("Curso creado")
	})
	.catch(err => {
		console.log(err)
		alert("no se creeo llore")
	})
  }

 const getRoles = () => {
	axios.get(`${Api}/roles`)
	.then(res => {
		setRoles(res.data)
	})
 }

  const getCursos = () => {
	axios.get(`${Api}/curso`)
	.then(res => setCurso(res.data))
	.catch(err => console.log(err))
  }

  const getPeriodo = () => {
	axios.get(`${Api}/periodo`)
	.then(res => setPeriodo(res.data))
	.catch(err => console.log(err))
  }
  const getMateria = () => {
	axios.get(`${Api}/materia`)
	.then(res => setPMateria(res.data))
	.catch(err => console.log(err))
  }

  const addPeriodo = (datos) => {
	axios.post(`${Api}/periodo`, datos)
	.then(res => {
		console.log(res.data)
		alert("periodo creado")
	})
	.catch(err => {
		console.log(err)
		alert("no se creeo llore")
	})
  }
  const addMateria = (datos) => {
	axios.post(`${Api}/materia`, datos)
	.then(res => {
		console.log(res.data)
		alert("Materia Creada")
	})
	.catch(err => {
		console.log(err)
		alert("no se creeo llore")
	})
  }
  const addDocente = (datos) => {
	axios.post(`${Api}/docente`, datos)
	.then(res => {
		console.log(res.data)
		alert("Docente creado")
	})
	.catch(err => {
		console.log(err)
		alert("Lo siento no se pudo crear el docente ")
	})
  }



    return { addCurse, getCursos, Curso, addPeriodo, addDocente, getPeriodo, Perido, addMateria, getMateria, Materia, getRoles, Roles};
};

export default useAddCrud;