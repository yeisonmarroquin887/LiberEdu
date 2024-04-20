import React, { useState } from 'react'
import './Welcome.css'
import Header from '../../../components/Administrator/HeaderAdmint/Header'
import CrearCurso from '../../../components/Administrator/AddCursos/CrearCurso'
import RegisterDoecnte from '../../../components/Administrator/RegisterDocente/RegisterDoecnte'
import RegisterEstudy from '../../../components/Administrator/RegisterEstudy/RegisterEstudy'
import RegisterBooks from '../../../components/Administrator/RegisterBooks/RegisterBooks'

const Welcome = () => {

	const [num, setnum] = useState(null)
	const option = (n) => {
		switch(n){
			case 1:
             setnum(1);
			 break;

			 case 2:
				setnum(2)
				break;

				case 3:
					setnum(3)
					break

					case 4:
						setnum(4)
						break

						default:
						break;
		}
	}


  return (
	<div className='Welcome'>
		<Header/>
	  <section className='Welcome_menu'>
		<button onClick={() => option(1)} tabIndex="0">Crear Curso</button>
		<button onClick={() => option(2)} tabIndex="0">Registrar Docente</button>
		<button onClick={() => option(3)}>Registrar Estudiante</button>
		<button onClick={() => option(4)}>Libros</button>
	  </section>

	  <section className='Welcome_info'>

	{
	    num === 1 ? (
		<CrearCurso/>
        ) : num === 2 ? (
	    <RegisterDoecnte/>
        ) : num === 3 ? (
        <RegisterEstudy/>
	    ) : num === 4 ? (
        <RegisterBooks/>
        ) : (
        <h1>Bienvenido</h1>
      )
	}
		
	  </section>
	</div>
  )
}

export default Welcome
