import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Password_Reset'
import '../Input_Format.css'
import 'bootstrap/dist/css/bootstrap.css'
import { resetAdministratorPasswordHandler } from '../../handlers/administratorAuthenticationHandler'

const Password_Reset = () => {

    const {token} = useParams();
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(password === "" || confirmPassword === ""){
            alert("Por favor introduzca una contraseña.")
        }
        else if(password !== confirmPassword){
            alert("Las contraseñas ingresadas no coinciden, favor de verificar e intentar nuevamente.")
        }
        else{

        try {
            const admin = {
                reset_passw_token: token,
                admin_password: password,
                confirm_password: confirmPassword
            }
            console.log(admin);
            resetAdministratorPasswordHandler(admin).then((res) => {
                if (res.status === 200) {
                    alert("Su contraseña ha sido actualizada. Por favor vuelva a iniciar su sesión.");
                    navigate('/Login_Screen', { replace: true });
                }
            });
        } catch (error) {
            console.log(error);
        }
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
                <div id="font-type">
                    <h1>Restablecer Contraseña</h1>
                </div>
                <div class='row'>
                    <text id="button-font">Insertar Contraseña Nueva</text>
                </div>
                <div class='row'>
                    <div class="form-outline">
                        <input type='password' class="form-control" placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                </div>
                <div class='row'>
                    <text id="button-font">Confirmar Contraseña Nueva</text>
                </div>
                <div class='row'>
                    <div class="form-outline">
                        <input type='password' class="form-control" placeholder='Confirmar contraseña' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>   
                    </div>
                </div>
                <div class='row'>
                    <a>
                        <button class='btn btn-primary btn-large btn-success' id="button-font" onClick={(e) => handleSubmit(e)}>Restablecer Contraseña </button>
                    </a>
                </div>
            </div>
        )
    }

    return (
        render()
    )

}

export default Password_Reset;