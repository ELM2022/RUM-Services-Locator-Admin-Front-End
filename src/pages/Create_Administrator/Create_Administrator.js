import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './Create_Administrator.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../Table_Format.css'
import '../Input_Format.css'
import AuthContext from '../../contexts/AuthContext'
import { createPendingAdministrator } from '../../handlers/pendingAdministratorHandler'
import Navbar from "../../components/Navbar";
import Home from "../../Home";

const Create_Administrator = () => {

    const navigate = useNavigate();
    const context = useContext(AuthContext);
    const [pending_email, setPendingEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const pending_admin = {
                admin_id: context.getUserId(),
                pending_email: pending_email
            }
            createPendingAdministrator(pending_admin).then((res) => {
                if (res.status === 201) {
                    alert("La cuenta del nuevo administrador ha quedado pendiente.\nLa misma se oficializará cuando se complete el proceso de registro.");
                    navigate('/Active_Administrator', { replace: true });
                }
                if (res.status === 400) {
                    alert("La cuenta de administrador ya está pendiente o ha sido registrada anteriormente.");
                    window.location.reload();
                }
                else {
                    console.log(res);
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    const render = () => {
        return (
            <><div>
                <Home />
            </div>
            <div>
                <Navbar />
            </div>
            <div class='container'>
                    <div id='font-type'>
                        <h1>Añadir Nuevo Administrador</h1>
                        <h2>Introduzca el correo electronico del nuevo administrador que desea añadir al sistema.</h2>
                    </div>
                    <div class='row'>
                        <div class="form-outline">
                            <input type='text' class="form-control" placeholder="Correo Electrónico" id="input_information" value={pending_email} onChange={(e) => setPendingEmail(e.target.value)}></input>
                        </div>
                    </div>
                    <div class='row'>
                        <a>
                            <button class="btn btn-primary btn-lg btn-success" id='button-font' onClick={(e) => handleSubmit(e)}>Registrar Nuevo Administrador</button>
                        </a>
                    </div>
                    <div class='row'>
                        <a href="/Active_Administrator">
                            <button class="btn btn-primary btn-lg btn-danger" id='button-font'>Cancelar Registro</button>
                        </a>
                    </div>
                </div></>
        )
    }

    return (
        render()
    )

}

export default Create_Administrator;