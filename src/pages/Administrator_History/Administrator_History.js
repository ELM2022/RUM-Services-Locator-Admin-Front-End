import '../Table_Format.css'
import React, { Component } from 'react'
import { getAllAdministratorUpdateHistoryHandler } from '../../handlers/administratorHistoryHandler'
import { getAllInactiveAdministrators } from '../../handlers/administratorHandler'
import Navbar from "../../components/Navbar";
import Home from "../../Home";

class Administrator_History extends Component {
    constructor(props) {
        super(props)
        this.state = {
            administrator_history: [],
            inactive_administrators: []
        }
    }

    componentDidMount() {
        getAllAdministratorUpdateHistoryHandler().then((res) => {
            if (res.status === 200) {
                const updates = res.data.data.admin_updates;
                if (updates[0] !== undefined) {
                    this.setState({
                        administrator_history: updates
                    });
                }
            }
        })
        getAllInactiveAdministrators().then((res) => {
            if(res.status === 200){
                const admins = res.data.data.admins
                if(admins[0] !== undefined) {
                    this.setState({
                        inactive_administrators: admins
                    })
                }
            }
        })

    }

    renderTableData() {
        return this.state.administrator_history.map((administrator_history, index) => {
            const {editor_admin_name, updated_admin_email, updated_admin_name, updated_admin_last_name, update_datetime, update_justification} = administrator_history;
            return (
                <tr key={index}>
                    <td>{editor_admin_name}</td>
                    <td>{updated_admin_name}</td>
                    <td>{updated_admin_last_name}</td>
                    <td>{updated_admin_email}</td>
                    <td>{update_datetime}</td>
                    <td>{update_justification}</td>
                </tr>
            )
        });      
    }

    renderAdminTableData() {
        return this.state.inactive_administrators.map((inactive_administrator, index) => {
            const {admin_name, admin_email, admin_last_name, admin_active_status} = inactive_administrator;
            let status = ''
            if(admin_active_status === 1){
                status = 'ACTIVO'
            }
            else{
                status = 'DESACTIVADO'
            }
            return (
                <tr key={index}>
                    <td>{admin_email}</td>
                    <td>{admin_name}</td>
                    <td>{admin_last_name}</td>
                    <td>{status}</td>
                </tr>
            )
        });
    }

    renderAdminTableHeader(){
        return(
            <tr>
                <th>Correo Electronico de Administrator</th>
                <th>Nombre de Administrador</th>
                <th>Apellido de Administrador</th>
                <th>Estatus de Administrador</th>
            </tr>
        )

    }

    renderTableHeader() {
        return(
            <tr>
                <th>Administrador Editor</th>
                <th>Nombre de Administrador Actualizado</th>
                <th>Apellido de Administrador Actualizado</th>
                <th>Correo Electronico de Administrador Actualizado</th>
                <th>Tiempo de Actualización</th>
                <th>Justificación</th>
            </tr>
        )
    }

    render() {
        return(
            <><div>
                <Home />
            </div>
            <div>
                <Navbar />
            </div>
            <div id="office_table_padding">
                    <h1 id='title'>
                        Historial de Administradores Editados
                    </h1>
                    <div>
                        <table id='table_information' align='center'>
                            <tbody>
                                {this.renderTableHeader()}
                                {this.renderTableData()}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="office_table_padding">
                    <h1 id='title'>
                        Historial de Administradores Desactivados
                    </h1>
                    <div>
                        <table id='table_information' align='center'>
                            <tbody>
                                {this.renderAdminTableHeader()}
                                {this.renderAdminTableData()}
                            </tbody>
                        </table>
                    </div>
                </div></>
        )
    }
}

export default Administrator_History;