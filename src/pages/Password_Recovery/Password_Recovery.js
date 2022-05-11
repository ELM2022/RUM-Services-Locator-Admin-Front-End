import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
// import AuthContext from '../../contexts/AuthContext'
import './Password_Recovery.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../Input_Format.css'
import { recoverAdministratorPasswordHandler } from '../../handlers/administratorAuthenticationHandler'

const Password_Recovery = () => {

    // const { auth } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            recoverAdministratorPasswordHandler(email).then((res) => {
                if (res.status === 200) {
                    alert("Se le ha enviado un correo electrónico con instrucciones para restablecer su contraseña.");
                    navigate('/Login_Screen', { replace: true });
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    const render = () => {
        return (
            <div class='container'>
                <div id='font-type'>
                    <h1>Restablecer Contraseña</h1>
                    <h2>Introduzca su correo electronico para recibir instrucciones para restablecer su cuenta.</h2>
                </div>
                <div class='row'>
                    <div class="form-outline">
                        <input type='text' class="form-control" placeholder="Correo Electrónico" id="input_information" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                </div>
                <div class='row'>
                    <button class="btn btn-primary btn-lg btn-success" id='button-font' onClick={(e) => handleSubmit(e)}>Enviar Correo Electronico</button>
                </div>
            </div>
        )
    }

    return (
        render()
    )

}

export default Password_Recovery;