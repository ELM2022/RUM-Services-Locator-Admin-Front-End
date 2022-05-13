import '../Table_Format.css'
import React, { Component } from 'react'
import { getAllOfficesUpdateHistoryHandler } from '../../handlers/officeHistoryHandler'
import {getAllInactiveOffices} from '../../handlers/officeHandler'
import Navbar from "../../components/Navbar";
import Home from "../../Home";

class Directory_History extends Component {
    constructor(props) {
        super(props)
        this.state = {
            directory_history: [],
            inactive_offices: []
        }
    }

    componentDidMount() {
        getAllOfficesUpdateHistoryHandler().then((res) => {
            if (res.status === 200) {
                const updates = res.data.data.office_updates;
                if (updates[0] !== undefined) {
                    this.setState({
                        directory_history: updates
                    });
                }
            }
        })
        getAllInactiveOffices().then((res) => {
            if(res.status === 200){
                const offices = res.data.data.offices
                if(offices[0] !== undefined){
                    this.setState({
                        inactive_offices: offices
                    })
                }
            }
        })
    }

    renderTableData() {
        return this.state.directory_history.map((directory_history, index) => {
            const {admin_name, admin_last_name, office_name, office_description, office_schedule, office_latitude, office_longitude, office_room_code, office_email, update_datetime, update_justification} = directory_history;
            return (
                <tr key={index}>
                    <td>{admin_name + ' ' + admin_last_name}</td>
                    <td>{office_name}</td>
                    <td>{update_datetime}</td>
                    <td>{update_justification}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        return(
            <tr>
                <th>Editor Administrator</th>
                <th>Updated Office Name</th>
                <th>Update Time</th>
                <th>Justification</th>
            </tr>
        )
    }

    renderOfficesHeader() {
        return <tr>
            <th>Nombre de Oficina</th>
            <th>Estatus de Oficina</th>
        </tr>
    }

    renderOfficeTableData() {
        return this.state.inactive_offices.map((inactive_office, index) => {
            const {office_name, office_description, office_schedule, office_latitude, office_longitude, office_room_code, office_email, office_active_status} = inactive_office;
            let status = ''
            if(office_active_status === 0){
                status = 'DESACTIVADA'
            }
            else{
                status = 'ACTIVA'
            }

            return (
                <tr key={index}>
                    <td>{office_name}</td>
                    <td>{status}</td>
                </tr>
            )
        })
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
                    <h1 id='title'>Historial de Oficinas Editadas</h1>
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
                    <h1 id='title'>Historial de Oficinas Desactivadas</h1>
                    <div>
                        <table id='table_information' align='center'>
                            <tbody>
                                {this.renderOfficesHeader()}
                                {this.renderOfficeTableData()}
                            </tbody>
                        </table>
                    </div>
                </div></>
        )
    }
}
 
export default Directory_History;