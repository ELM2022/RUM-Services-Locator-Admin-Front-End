import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Token.css'
import '../Input_Format.css'
import 'bootstrap/dist/css/bootstrap.css'
import AuthContext from '../../contexts/AuthContext'
import { validateAdministratorLoginHandler, resendValidateAdministratorLoginHandler } from '../../handlers/administratorAuthenticationHandler'

const Token = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const [token, setToken] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const login_token = {token};
            // console.log(login_token);
            validateAdministratorLoginHandler(login_token).then((res) => {
                console.log(res);
                if (res.status === 200) {
                    // setAuth(res.data);
                    navigate('/Home', { replace: true });
                    // window.location.href = '/Home';
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
            resendValidateAdministratorLoginHandler().then((res) => {
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
            <div class='container'>
                <h1>Código de Acceso</h1>
                <h2>Introduzca Código de 6 Dígitos</h2>
                <h4>El mismo será enviado a su correo electrónico registrado en esta cuenta.</h4>
                <div class='row'>
                    <div class="form-outline">
                        <input class="form-control" type='text' placeholder="Escribir código" id='input_information' value={token} onChange={(e) => setToken(e.target.value)}/>
                    </div>
                </div>
                <div class='row'>
                {/* <a href="/Home"> */}
                    <button class="btn btn-primary btn-lg btn-success" onClick={(e) => handleSubmit(e)}>Iniciar Sesión</button>
                {/* </a> */}
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