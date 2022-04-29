import './Active_Administrator.css'
import React, { Component } from 'react';
import { allAdministratorsHandler } from '../../handlers/administratorHandler'


class Active_Administrator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            administrators: [
                // {name: 'Magaly'},
                // {name: 'Luis Miguel'},
                // {name: 'Lola Mento'}
            ]
        }
    }

    componentDidMount() {
        allAdministratorsHandler().then((res) => {
            if (res.status === 200) {
                this.setState({administrators: res.data.data.admins});
            }
        })

    }

    renderTableData() {
        return this.state.administrators.map((administrators, index) => {
            const {admin_id, admin_name, admin_last_name} = administrators
            return(
                <tr key={index}>
                    <td>{`${admin_name} ${admin_last_name}`}</td>
                    <td>
                        <a href={`/Admin_Information/${admin_id}`}>
                            <button class='btn btn-primary btn-success' id='menu_button'>Ver Mas</button>
                        </a>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return(
            <div id="office_table_padding">
            <h1 id='title'>Active Administrator</h1>
            <table id='menu_information' align='center' class='table'>
                <tbody>
                    {this.renderTableData()}
                </tbody>
            </table>
            <a href="/Create_Administrator">
                <button align='center' class='btn btn-primary btn-success' id='menu_button'>
                    Añadir Administrador
                </button>
            </a>
        </div>
        );
    }
}


export default Active_Administrator;