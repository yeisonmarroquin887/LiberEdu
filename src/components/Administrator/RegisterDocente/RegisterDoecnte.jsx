import React, { useEffect, useState } from 'react';
import './RegisterDocente.css';
import useAddCrud from '../../../hooks/useAddCrud';
import { useForm } from 'react-hook-form';
import Select from 'react-select';

const RegisterDoecnte = () => {
    const { addDocente, getCursos, getMateria, Curso, Materia, getRoles, Roles } = useAddCrud();
    const { register, handleSubmit, reset } = useForm();
    const [selectedCursos, setSelectedCursos] = useState([]);
    const [selectedMaterias, setSelectedMaterias] = useState([]);
	const [IdRol, setIdRol] = useState()

    useEffect(() => {
        getCursos();
        getMateria();
		getRoles();
    }, []);

    const handleCursoChange = (selectedOptions) => {
        setSelectedCursos(selectedOptions || []);
    };

    const handleMateriaChange = (selectedOptions) => {
        setSelectedMaterias(selectedOptions || []);
    };

    const submit = (data) => {
		data.rolId = IdRol
       data.cursos = selectedCursos.map((curso) => curso.value)
	   data.materia = selectedMaterias.map((materia) => materia.value)
        addDocente(data);
    };

    return (
        <div className='AddDocentes'>
            <h1>Crear Docentes</h1>
            <form onSubmit={handleSubmit(submit)} className='AddDocentes_form'>

                <div>
					<div>
					<label htmlFor="">Elige su rol</label>
				<select className='Select' name="" id="" onChange={(e) => setIdRol(e.target.value)}>
				<option value="">Selecciona su Rol</option>
				{
					Roles?.map((rol) => (
						<option key={rol.id} value={rol.id}>{rol.Nombre}</option>
					))
				}
			   </select>                                           
					</div>
					
                    <div>
                        <label htmlFor='Nombres'>Nombres:</label>
                        <input {...register('Nombres')} type='text' required />
                    </div>
                    <div>
                        <label htmlFor='Apellidos'>Apellidos:</label>
                        <input {...register('Apellidos')} type='text' required />
                    </div>
                    <div>
                        <label htmlFor='Email'>Correo:</label>
                        <input {...register('Email')} type='email' required />
                    </div>
                </div>

                <div className='Select'>
                    <div>
                        <label htmlFor='Contraseña'>Contraseña:</label>
                        <input {...register('Contraseña')} type='password' required />
                    </div>
					<div>
                        <label htmlFor='Telefono'>Telefono:</label>
                        <input {...register('Telefono')} type='number' required />
                    </div>
                    <div>
                        <label htmlFor='Cursos'>Cursos:</label>
                        <Select
                            onChange={handleCursoChange}
                            options={Curso?.map((curso) => ({
                                value: curso.id,
                                label: curso.NombreCurso,
                            }))}
                            isMulti
                        />
                    </div>
                    <div>
                        <label htmlFor='Materias'>Materias:</label>
                        <Select
                            onChange={handleMateriaChange}
                            options={Materia?.map((materia) => ({
                                value: materia.id,
                                label: `${materia.NombreMate}, Curso: ${materia.curso.NombreCurso}, Periodo: ${materia.periodo.NombrePeriodo}`,
                            }))}
                            isMulti
                        />
                    </div>
                </div>
                <button type='submit'>Registrar</button>
            </form>
        </div>
    );
};

export default RegisterDoecnte;
