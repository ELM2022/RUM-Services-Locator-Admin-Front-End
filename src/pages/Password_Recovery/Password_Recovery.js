import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Password_Recovery.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../Input_Format.css'
import { recoverAdministratorPasswordHandler } from '../../handlers/administratorAuthenticationHandler'

const Password_Recovery = () => {

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
            <div class='container-fluid'>
                <div class='row' id='Header'>
                    <div class='col'>
                        <h1>RUM Services Locator</h1>
                    </div>
                </div>
                <div id='font-type' className="Center-text">
                    <h1 id='font-type' className="Center-text">Restablecer Contraseña</h1>
                    <h3>Introduzca su correo electronico para recibir instrucciones para restablecer su cuenta.</h3>
                </div>
                <div class='row'>
                    <div class="form-outline">
                        <input type='text' class="form-control" placeholder="Correo Electrónico" id="input_information" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                </div>
                <div class='row'>
                    <a>
                    <button class="btn btn-primary btn-lg btn-success" id='button-font' onClick={(e) => handleSubmit(e)}>Enviar Correo Electronico</button>
                    </a>
                    <a href='/'>
                        <button class="btn btn-primary btn-lg btn-danger" id='button-font'>Regresar</button>
                    </a>
                </div>
            </div>
        )
    }

    return (
        render()
    )

}

export default Password_Recovery;