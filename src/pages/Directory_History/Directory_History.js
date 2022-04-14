import '../Table_Format.css'
import React, { Component } from 'react'
import { getAllOfficesUpdateHistoryHandler } from '../../handlers/officeHistoryHandler'

class Directory_History extends Component {
    constructor(props) {
        super(props)
        this.state = {
            directory_history: [
                {editor: 'Magaly Mercado', name: 'Registraduria', latitude: 18.2093337, longitude: -67.1410899, room_code: 'C-203-B', email:'registro@uprm.edu', date: '03/31/20222', justification: 'Updated Coordinates'},
                {editor: 'Magaly Mercado', name: 'Registraduria',latitude: 18.2093337, longitude: -67.1410899, room_code: 'C-203-B', email:'registro@uprm.edu', date: '03/31/20222', justification: 'Updated Room Code'}
            ]
        }
    }

    componentDidMount() {
        getAllOfficesUpdateHistoryHandler().then((res) => {
            console.log(res.data.data.office_updates);
            // in ordero to store this use this.setState({directory_history: res.data.data.office_updates})
        })
    }

    renderTableData() {
        return this.state.directory_history.map((directory_history, index) => {
            const {editor, name, longitude, latitude, room_code, email, date, justification} = directory_history
            return (
                <tr key={index}>
                    <td>{editor}</td>
                    <td>{name}</td>
                    <td>{latitude}</td>
                    <td>{longitude}</td>
                    <td>{room_code}</td>
                    <td>{email}</td>
                    <td>{date}</td>
                    <td>{justification}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.directory_history[0])
        return header.map((key, index) => {
            return <th key={index}>{key.replace(/_/g, " ").toUpperCase()}</th>
        })
    }

    render() {
        return(
        <div id="office_table_padding">
            <h1 id='title'>Directory History</h1>
            <div>
                <table id='table_information' align='center'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
}
 
export default Directory_History;