import React from 'react'
import { useNavigate} from 'react-router-dom'

const Acudientes = () => {
	const navigate = useNavigate()
	const volver = () => {
		navigate("/")
	}
  return (
	<div>
		<button onClick={volver}>Volver</button>
	  <h1>Soy el Login de Acudientes</h1>
	</div>
  )
}

export default Acudientes
