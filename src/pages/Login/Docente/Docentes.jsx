import React from 'react'
import { useNavigate} from 'react-router-dom'

const Docentes = () => {
	const navigate = useNavigate()
	const volver = () => {
		navigate("/")
	}

  return (
	<div>
		<button onClick={volver}>Volver</button>
	 <h1> Soy el login de Docentes</h1>
	</div>
  )
}

export default Docentes
