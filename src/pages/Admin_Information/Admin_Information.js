import React, { Component } from 'react'
import '../Table_Format.css'
import 'bootstrap/dist/css/bootstrap.css'

class Admin_Information extends Component {

    constructor(props){
        super(props)
        this.state = {
            admin_information: [
                {email:localStorage.getItem("administratorEmail"), admin_name: localStorage.getItem("administratorName"), admin_last_name: localStorage.getItem("administratorLastName")}
            ]
        }
    }

    renderTableData() {
        return this.state.admin_information.map((admin_information, index) => {
            const {email, admin_name, admin_last_name, admin_password, admin_active_status} = admin_information 
            return (
                <tr key={index}>
                    <td>{email}</td>
                    <td>{admin_name}</td>
                    <td>{admin_last_name}</td>
                </tr>
            )
        })
    }

    renderEditableTableData () {
        return this.state.admin_information.map((admin_information, index) => {
            const {email, admin_password, admin_name, admin_last_name, admin_active_status} = admin_information 
            return (
                <tr key={index}>
                    <td><input type='text' value={email}></input></td>
                    <td><input type='text' value={admin_name}></input></td>
                    <td><input type='text' value={admin_last_name}></input></td>
                </tr>
            )
        })
    }

    renderTableHeader() {
       let header = Object.keys(this.state.admin_information[0])
       return header.map((key, index) => {
           return <th key={index}>{key.replace(/_/g, " ").toUpperCase()}</th>
       })
    }

    handleDelete(e) {
        alert("This item will be deleted");
    }

    render() {
        return (
            <div id="office_table_padding">
                <h1 id='title'>Información del Administrador</h1>
                <table id='table_information' align='center'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
                <a href="/Edit_Administrator">
                    <button class='btn btn-success btn-block'>Edit</button>
                </a>
                <a href="/Active_Administrator">
                    <button class='btn btn-danger btn-block' onClick={this.handleDelete}>Delete</button>
                </a>
            </div>
        )
    }
}

export default Admin_Information