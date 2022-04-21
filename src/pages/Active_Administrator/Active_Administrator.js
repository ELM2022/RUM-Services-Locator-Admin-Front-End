import './Active_Administrator.css'
import React, { Component } from 'react';

class Active_Administrator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            administrators: [
                {name: 'Magaly'},
                {name: 'Luis Miguel'},
                {name: 'Lola Mento'}
            ],
            administratorEntry: [
                {administratorEmail: 'lolaMento@gmail.com',
                firstName: 'Lola',
                lastName: 'Mento',
                password: '*****'
            }
            ]
        }
    }

    renderTableData() {
        return this.state.administrators.map((administrators, index) => {
            const { id, name} = administrators
            return(
                <tr key={index}>
                    <td>{name}</td>
                    <td>
                        <a href="/Admin_Information">
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
            <h1 id='title'>Directorio de Administradores</h1>
            <table id='menu_information' align='center' class='table'>
                <tbody>
                    {this.renderTableData()}
                </tbody>
            </table>
            <a href="Create_Administrator">
                <button align='center' class='btn btn-primary btn-success' id='menu_button'>
                    Añadir Administrador
                </button>
            </a>
        </div>
        );
    }
}


export default  Active_Administrator;