import React, { useState } from 'react'
import './style/Home.css'
import { useNavigate} from 'react-router-dom'

const Home = () => {
const [Rol, setRol] = useState(null)
 const navigate = useNavigate()

 const seleccionarRol = (rol) => {
	setRol(rol)
 }

 const enviar = () => {
	switch (Rol) {
		case 1:
			navigate("/login-docente")
			break;

		case 2:
			 navigate("/login-estudiante")
			break;

		case 3:
			navigate("/login-acudiente")
			break;
	
		default:
			break;
	}
 }


  return (
	<article className='Home'>
	 <header className='Home_header'>
		<h1>Bienvenidos a la institucion educativa la La Libertad</h1>
	 </header>
 
      <section className='Home_info'>
		<br />
		<br />
		<br />
		<br />

		<figure>
			<img className='movil' src="../../../images/Bienvenida .jpg" alt="" />
			<div className='pc'></div>
		</figure>
		<section className='Home_nav'>
			<section className='Roles'>
			<h1>Elige tu rol para poder ingresar</h1>
			<nav>
				<li onClick={() => seleccionarRol(1)} tabindex="0">Docentes</li>
				<li  onClick={() => seleccionarRol(2)} tabindex="0">Estudiantes</li>
				<li onClick={() => seleccionarRol(3)} tabindex="0">Acudientes</li>
			</nav>
			<div className='Home_btn'>
				<button onClick={enviar}>Ingresar</button>
			</div>
			</section>
			 <div className='Home_logo-info'>
				<figure>
					<img src="../../../images/Logo SiberEdu.jpg" alt="" />
				</figure>
				<div>
					<p>
					La institución educativa La Libertad prepara estudiantes dinámicos y autónomos para enfrentar desafíos globales y promover el progreso regional.
					</p>
				</div>
			 </div>
		</section>
	  </section>
	</article>
  )
}

export default Home
