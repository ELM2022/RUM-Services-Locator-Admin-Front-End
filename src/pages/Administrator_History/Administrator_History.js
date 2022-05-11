import '../Table_Format.css'
import React, { Component } from 'react'
import { getAllAdministratorUpdateHistoryHandler } from '../../handlers/administratorHistoryHandler'
import { administratorGetHandler } from '../../handlers/administratorHandler'
import Navbar from "../../components/Navbar";
import Home from "../../Home";

class Administrator_History extends Component {
    constructor(props) {
        super(props)
        this.state = {
            administrator_history: []
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

    renderTableHeader() {
        return(
            <tr>
                <th>Editor Administrator</th>
                <th>Updated Admin Name</th>
                <th>Updated Admin Last Name</th>
                <th>Updated Admin Email</th>
                <th>Update Time</th>
                <th>Justification</th>
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
                        Historial de Administradores
                    </h1>
                    <div>
                        <table id='table_information' align='center'>
                            <tbody>
                                {this.renderTableHeader()}
                                {this.renderTableData()}
                            </tbody>
                        </table>
                    </div>
                </div></>
        )
    }
}

export default Administrator_History;