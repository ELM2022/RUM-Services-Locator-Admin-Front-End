import React, { Component } from 'react';
import './Token.css'
import '../Input_Format.css'
import 'bootstrap/dist/css/bootstrap.css'

class Token extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div class='container'>
                <h1>Token</h1>
                <h2>Introduzca Código de 6 Dígitos</h2>
                <h4>El mismo será enviado a su correo electrónico registrado en esta cuenta.</h4>
                <div class='row'>
                    <div class="form-outline">
                        <input class="form-control" type='text' placeholder="Insertar token" id='input_information'/>
                    </div>
                </div>
                <div class='row'>
                <a href="/Home">
                    <button class="btn btn-primary btn-lg btn-success">Iniciar Sesión</button>
                </a>
                </div>
                <text>¿No recibió el código?</text>
                <button type='button' class='btn btn-link'>Reenviar</button>
            </div>
        )
    }
}

export default Token