import React, { Component, useState } from 'react'
import '../Table_Format.css'
import 'bootstrap/dist/css/bootstrap.css'

class Edit_Administrator extends Component {

    constructor(props){
        super(props)
        this.state = {
            admin_information: [
                { email:'lolaMento@gmail.com', admin_name: 'Lola', admin_last_name: 'Mento', admin_password: '********', admin_active_status: true}
            ]
        }
    }

    handleInputEdit(e) {
        console.log(e.target.value)
    }

    renderEditableTableData () {
        return this.state.admin_information.map((admin_information, index) => {
            const {email, admin_password, admin_name, admin_last_name, admin_active_status} = admin_information 
            return (
                <tr key={index}>
                    <td><input type='text' defaultValue={email} onChange={this.handleInputEdit}></input></td>
                    <td><input type='text' defaultValue={admin_name}></input></td>
                    <td><input type='text' defaultValue={admin_last_name}></input></td>
                    <td><input type='text' defaultValue={admin_password}></input></td>
                    <td><input type='text' defaultValue={admin_active_status}></input></td>
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

    render() {
        return (
            <div>
                <h1 id='title'>Admin Information</h1>
                <table id='table_information' align='center'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderEditableTableData()}
                    </tbody>
                </table>
                <a href="/Active_Administrator">
                    <button class='btn btn-success btn-block'>Save</button>
                </a>
                <a href='/Admin_Information'>
                    <button class='btn btn-danger btn-block'>Cancel</button>
                </a>
            </div>
        )
    }
}

export default Edit_Administrator