import '../Table_Format.css'
import React, { Component } from 'react'
import { getAllOfficesUpdateHistoryHandler } from '../../handlers/officeHistoryHandler'

class Directory_History extends Component {
    constructor(props) {
        super(props)
        this.state = {
            directory_history: [
                // {editor: 'Magaly Mercado', name: 'Registraduria', latitude: 18.2093337, longitude: -67.1410899, room_code: 'C-203-B', email:'registro@uprm.edu', date: '03/31/20222', justification: 'Updated Coordinates'},
                // {editor: 'Magaly Mercado', name: 'Registraduria',latitude: 18.2093337, longitude: -67.1410899, room_code: 'C-203-B', email:'registro@uprm.edu', date: '03/31/20222', justification: 'Updated Room Code'}
            ]
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
            // console.log(res.data.data.office_updates);
            // in ordero to store this use this.setState({directory_history: res.data.data.office_updates})
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
        // let header = Object.keys(this.state.directory_history[0])
        // return header.map((key, index) => {
        //     return <th key={index}>{key.replace(/_/g, " ").toUpperCase()}</th>
        // })
        return(
            <tr>
                <th>Editor Administrator</th>
                <th>Updated Office Name</th>
                <th>Update Time</th>
                <th>Justification</th>
            </tr>
        )
    }

    render() {
        return(
        <div id="office_table_padding">
            <h1 id='title'>Historial de Oficinas</h1>
            <div>
                <table id='table_information' align='center'>
                    <tbody>
                        {this.renderTableHeader()}
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
}
 
export default Directory_History;