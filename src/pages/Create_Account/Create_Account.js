import React, { Component } from 'react';
import './Create_Account.css'
import '../Input_Format.css'
import 'bootstrap/dist/css/bootstrap.css'

class Create_Account extends Component {

    constructor(props){
        super(props)
    }


    render(props) {

        return (
            <div class='container'>
                <h1 id="font-type">Crear Cuenta</h1>
                <div class='row'>
                    <div class='col'>
                        <img src="/elmLogo.jpeg" alt="image" id="logo"/>
                    </div>
                    <div class='col' id='create_account_textbox_padding'>
                        <div class='form-outline'>
                            <input type="text" placeholder="correo electónico" class="form-control"/>
                        </div>
                        <div class='w-100'></div>
                        <div class="form-outline">
                            <input type="text" placeholder="nombre" class="form-control"/>
                        </div>
                        <div class='w-100'></div>
                        <div class="form-outline">
                            <input type="text" placeholder="apellido" class="form-control"/>
                        </div>
                        <div class='w-100'></div>
                        <div class="form-outline">
                            <input type="password" placeholder="contraseña" class="form-control"/>
                        </div>
                        <div class='w-100'></div>
                        <div class="form-outline">
                            <input type="password" placeholder="confirmar contraseña" class="form-control"/>
                        </div>
                        <div class='w-100'></div>
                        <div class='row'>
                        </div>
                        <a href='/Login_Screen'>
                        <button type='button' class="btn btn-primary btn-lg btn-success" id="button-font">Crear Cuenta</button>
                        </a>
                    </div>
                </div>
        </div>
        )
    }
}

export default Create_Account