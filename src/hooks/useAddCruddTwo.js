import axios from 'axios';
import { useState } from 'react';
const Api = import.meta.env.VITE_REACT_APP_URL;


const useAddCruddTwo = () => {
	const [Acudiente, setAcudiente] = useState()

	const getAcudiente = () => {
		axios.get(`${Api}/acudiente`)
		.then(res => setAcudiente(res.data))
		.catch(err => console.log(err))
	  }

const addAcudent = (datos) => {
   console.log(datos)
   axios.post(`${Api}/acudiente`, datos)
   .then(res => {
	console.log(res.data)
	alert("El Acudiente se ha creado")
   })
   .catch(err => {
	console.log(err)
	alert("El usuario no se pudo crear")
   })
}

const addEstudiante = (data) => {
	axios.post(`${Api}/estudiante`, data)
	.then(res => {
		console.log(res.data)
		alert("EL estudiante se ha creado")
	})
	.catch(err => {
		console.log(err)
		alert("error al crear el estudiante")
	})
}



    return { addAcudent, getAcudiente, Acudiente, addEstudiante };
};

export default useAddCruddTwo;