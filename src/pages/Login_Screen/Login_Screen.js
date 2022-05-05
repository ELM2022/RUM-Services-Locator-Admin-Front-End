import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login_Screen.css'
import '../Input_Format.css'
import 'bootstrap/dist/css/bootstrap.css'
import AuthContext from '../../contexts/AuthContext'
import { loginAdministratorHandler } from '../../handlers/administratorAuthenticationHandler'

// async function loginUser(credentials) {
//     return fetch('http://localhost:8080/Login_Screen', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(credentials)
//     })
//       .then(data => data.json())
//    }

export default function Login_Screen() {

    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const login = {username, password}
            // console.log(login);
            loginAdministratorHandler(login).then((res) => {
                if (res.status === 200) {
                    navigate('/Token', { replace: true }); 
                    // window.location.href = '/Token';
                } else {
                    console.log(res);
                }
            });

        } catch (error) {
            console.log(error);
        }
      }

    return (
        <div class='container-fluid'>
            <div class='row' id='Header'>
                <div class='col'>
                    <h1>RUM Services Locator</h1>
            </div>
            </div>
                <h1 id='font-type' className="Center-text">Iniciar Sesión</h1>
                <div class='row'>
                    <div class='col d-flex justify-content-center'>
                        <img src="/elmLogo.jpeg" alt="image" id='logo'/>
                    </div>
                    <div class='col' id='login_textbox_padding'>
                        <form onSubmit={async (e) => handleSubmit(e)}>
                            <div class="form-outline">
                                <input type="text" id="input_information" class="form-control" placeholder="Correo electrónico" value={username} onChange={e => setUsername(e.target.value)}/>
                            </div>
                            <div class='w-100'></div>
                            <div class="form-outline">
                                <input type="password" id="input_information" placeholder="Contraseña" class="form-control" value={password} onChange={e => setPassword(e.target.value)}/>
                            </div>
                            <div class='w-100' id="button_padding"></div>
                            <div class="col d-flex justify-content-center">
                                {/* <a href="/Token"> */}
                                    <button  class="btn btn-primary btn-success" id="button-font" type="button" onClick={(e) => handleSubmit(e)}>Iniciar Sesión</button>
                                {/* </a> */}
                            </div>
                        </form>
                        <div class='row'>
                            <div class='col d-flex justify-content-center'>
                                <a href="/Create_Account">
                                    <button type='button' class='btn btn-link'>
                                        Crear Cuenta
                                    </button>
                                </a>
                            </div>
                            <div class='col d-flex justify-content-center'>
                                <a href="/Password_Recovery">
                                    <button type='button' class='btn btn-link'>
                                        Reestablecer Contraseña
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}