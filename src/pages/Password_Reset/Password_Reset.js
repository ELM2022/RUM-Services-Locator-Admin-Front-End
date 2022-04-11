import React, { Component } from 'react'
import './Password_Reset'
import '../Input_Format.css'
import 'bootstrap/dist/css/bootstrap.css'

class Password_Reset extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class='container'>
                <div id="font-type">
                    <h1>Restablecer Contraseña</h1>
                </div>
                <div class='row'>
                    <text id="button-font">Insertar Contraseña Nueva</text>
                </div>
                <div class='row'>
                    <div class="form-outline">
                        <input type='text' class="form-control"></input>
                    </div>
                </div>
                <div class='row'>
                    <text id="button-font">Confirmar Contraseña Nueva</text>
                </div>
                <div class='row'>
                    <div class="form-outline">
                        <input type='text' class="form-control"></input>   
                    </div>
                </div>
                <div class='row'>
                    <a href="/Login_Screen">
                    <button class='btn btn-primary btn-large btn-success' id="button-font">Restablecer Contraseña </button>
                    </a>
                </div>
            </div>
        )
    }
}

export default Password_Reset