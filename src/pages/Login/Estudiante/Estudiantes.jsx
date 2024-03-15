import React from 'react'
import { useNavigate} from 'react-router-dom'
import './style/Estudiantes.css'


const Estudiantes = () => {
	const navigate = useNavigate()
	const volver = () => {
		navigate("/")
	}

  return (
	<div>
		<button onClick={volver}>Volver</button>
	 <h2> soy el login de estudiantes</h2>
	</div>
  )
}

export default Estudiantes
