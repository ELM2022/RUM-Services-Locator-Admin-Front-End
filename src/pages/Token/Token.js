import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Token.css'
import '../Input_Format.css'
import 'bootstrap/dist/css/bootstrap.css'
import AuthContext from '../../contexts/AuthContext'
import { validateAdministratorLoginHandler, resendValidateAdministratorLoginHandler } from '../../handlers/administratorAuthenticationHandler'

const Token = () => {
    const context = useContext(AuthContext);
    console.log(context.getUserId());
    const navigate = useNavigate();
    const [token, setToken] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const login_token = {token};
            validateAdministratorLoginHandler(login_token).then((res) => {
                if (res.status === 200) {
                    context.authenticateUser(res.data);
                    navigate('/Home', { replace: true });
                } else {
                    console.log(res);
                    alert("An error occurred.");
                }
            })
            .catch(error => console.log(error));
        } catch (error) {
            console.log(error);
        }
    }

    const handleResend = (e) => {
        e.preventDefault();

        try {
            const admin_id = context.getUserId();
            const admin_email = context.getUserEmail();
            const admin = {admin_id, admin_email};
            resendValidateAdministratorLoginHandler(admin).then((res) => {
                if (res.status === 200) {
                    alert("Un nuevo código de acceso ha sido enviado a su correo electrónico.");
                    window.location.reload();
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    const render = () => {
        return(
            <div class='container-fluid'>
                <div class='row' id='Header'>
                    <div class='col'>
                        <h1>RUM Services Locator</h1>
                    </div>
                </div>
                <div id='font-type' className="Center-text">
                    <h1 id='font-type' className="Center-text">Código de Acceso</h1>
                    <h4>Introduzca el código de 6 dígitos enviado a su correo electrónico, para acceder al sistema.</h4>
                </div>
                <div class='row'>
                    <div class="form-outline">
                        <input class="form-control" type='text' placeholder="Escribir código" id='input_information' value={token} onChange={(e) => setToken(e.target.value)}/>
                    </div>
                </div>
                <div class='row'>
                    <a>
                        <button class="btn btn-primary btn-lg btn-success" onClick={(e) => handleSubmit(e)}>Iniciar Sesión</button>
                    </a>
                </div>
                <text>¿No recibió el código?</text>
                <button type='button' class='btn btn-link' onClick={(e) => handleResend(e)}>Reenviar</button>
            </div>
        )
    }

    return (
        render()
    )
}

export default Token;