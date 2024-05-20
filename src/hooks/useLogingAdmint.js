import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Api = import.meta.env.VITE_REACT_APP_URL;


const useLogingAdmint = () => {
    const [Token, setToken] = useState()
	const navigate = useNavigate()

	const LoginAdmint = (datos) => {
		console.log(Api)
			axios.post(`${Api}/rector/login`, datos)
			.then(res => {
				console.log(res.data)
                navigate("/admin-welcome")
	        })
			.catch(err => {
				console.log(err)
			    alert("error de datos")
			})
	}




    return { LoginAdmint };
};

export default useLogingAdmint;