import React, { Component } from 'react'
import './Password_Recovery.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../Input_Format.css'

class Password_Recovery extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div class='container'>
                <div id='font-type'>
                    <h1>Restablecer Contraseña</h1>
                    <h2>Introduzca su correo electronico para recibir instrucciones para restablecer su cuenta</h2>
                </div>
                <div class='row'>
                    <div class="form-outline">
                        <input type='text' class="form-control" placeholder="correo electrónico" id="input_information"></input>
                    </div>
                </div>
                <div class='row'>
                    <a href="/Password_Reset">
                    <button class="btn btn-primary btn-lg btn-success" id='button-font'>Enviarme Correo Electronico</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default Password_Recovery;