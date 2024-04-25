import React from 'react'
import './SeeAcudents.css'

const SeeAcudents = () => {
  return (
	<div>
	      <header className="barra">
        <div className="logo">
            <figure>
                <img src="../../../../images/Logo SiberEdu.jpg" alt="" />
            </figure>
            <p>Nombre del estudiante</p>
            <i className='bx bxs-user-circle'></i>
        </div>
    </header>
    <header className="barra-vertical">
        <div className="botones">
            <button className="Acudent-option">Asistencias</button>
            <button className="Acudent-option">Notas</button>
            <button className="Acudent-option">Volver</button>
        </div>
    </header>
	</div>
  )
}

export default SeeAcudents
