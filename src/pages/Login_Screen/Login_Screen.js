import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login_Screen.css'
import '../Input_Format.css'
import 'bootstrap/dist/css/bootstrap.css'

async function loginUser(credentials) {
    return fetch('http://localhost:8080/Login_Screen', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login_Screen({ setToken }) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          email,
          password
        });
        setToken(token);
      }

    return (
        <div class='container-fluid'>
            <div class='row' id='Header'>
                <div class='col'>
                    <h1>RUM Services Locator</h1>
                </div>
            </div>
                <h1 id='font-type' className="Center-text">Login</h1>
                <div class='row'>
                    <div class='col d-flex justify-content-center'>
                        <img src="/elmLogo.jpeg" alt="image" id='logo'/>
                    </div>
                    <div class='col' id='login_textbox_padding'>
                        <form onSubmit={handleSubmit}>
                            <div class="form-outline">
                                <input type="text" id="input_information" class="form-control" placeholder="correo electrónico" onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <div class='w-100'></div>
                            <div class="form-outline">
                                <input type="password" id="input_information" placeholder="password" class="form-control" onChange={e => setPassword(e.target.value)}/>
                            </div>
                            <div class='w-100' id="button_padding"></div>
                            <div class="col d-flex justify-content-center">
                                <a href="/Token">
                                    <button  class="btn btn-primary btn-success" id="button-font" type="button">Iniciar Sesión</button>
                                </a>
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
                                        Reestablecer contraseña
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

Login_Screen.propTypes = {
    setToken: PropTypes.func.isRequired
}