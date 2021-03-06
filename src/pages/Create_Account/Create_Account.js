import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Create_Account.css'
import '../Input_Format.css'
import 'bootstrap/dist/css/bootstrap.css'
// import { administratorCreateHandler } from '../../handlers/administratorHandler'
import { registerAdministratorHandler } from '../../handlers/administratorAuthenticationHandler'
import { getPendingAdminByEmail, 
        deletePendingAdministrator } 
from '../../handlers/pendingAdministratorHandler'

const Create_Account = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            getPendingAdminByEmail(email).then((res) => {
                if (res.status === 200) {
                    const pending_admin = res.data.data.pending_admin;
                    if (pending_admin !== undefined) {
                        if (pending_admin.pending_status) {
                            
                            const admin = {
                                admin_email: email,
                                admin_name: name,
                                admin_last_name: lastName,
                                admin_password: password,
                                confirm_password: confirmPassword
                            }
    
                            deletePendingAdministrator(pending_admin.pending_admin_id).then((res) => {
                                if (res.status === 200) {
                                    
                                }
                            });
    
                            registerAdministratorHandler(admin).then((res) => {
                                if (res.status === 201) {
                                    alert("Su cuenta ha sido registrada exitosamente.\nFavor de iniciar sesi??n con sus credenciales.");
                                    navigate('/Login_Screen', { replace: true });
                                } 
                                if (res.status === 400) {
                                    alert("Su cuenta ya fue previamente registrada.\nFavor de iniciar sesi??n con sus credenciales, o seguir las instrucciones para restablecer su cuenta.");
                                    navigate('/Login_Screen', { replace: true });
                                }
                                else {
                                    console.log(res);
                                }
                            });

                        } else {
                            alert("Su cuenta ya fue previamente registrada.\nFavor de iniciar sesi??n con sus credenciales, o seguir las instrucciones para restablecer su cuenta.");
                            navigate('/Login_Screen', { replace: true });
                        }

                    } else {
                        alert("No tiene acceso al sistema.\nFavor de comunicarse con un administrador para que registre su cuenta.");
                        navigate('/Login_Screen', { replace: true });
                    }
                } else {
                    console.log(res);
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    const render = () => {
        return (
            <div class='container'>
                <h1 id="font-type">Crear Cuenta</h1>
                <div class='row'>
                    <div class='col'>
                        <img src="/elmLogo.jpeg" alt="image" id="logo"/>
                    </div>
                    <div class='col' id='create_account_textbox_padding'>
                        <div class='form-outline'>
                            <input type="text" placeholder="Correo Elect??nico" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div class='w-100'></div>
                        <div class="form-outline">
                            <input type="text" placeholder="Nombre" class="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div class='w-100'></div>
                        <div class="form-outline">
                            <input type="text" placeholder="Apellido" class="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                        <div class='w-100'></div>
                        <div class="form-outline">
                            <input type="password" placeholder="Introducir Contrase??a" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div class='w-100'></div>
                        <div class="form-outline">
                            <input type="password" placeholder="Confirmar Contrase??a" class="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                        </div>
                        <div class='w-100'></div>
                        <div class='row'>
                            <button type='button' class="btn btn-primary btn-lg btn-success" id="button-font" onClick={(e) => handleSubmit(e)}>Crear Cuenta</button>
                            <a href="/Login_Screen">
                                <button type='button' class="btn btn-primary btn-lg btn-danger" id="button-font">Regresar</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        render()
    )

}

export default Create_Account;