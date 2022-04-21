import React, { Component } from 'react'
import './Create_Administrator.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../Table_Format.css'
import '../Input_Format.css'

class Create_Administrator extends Component {

    constructor(props){
        super(props)
        this.state = {
            admin_information: [
                {id:1, email:'lolaMento@gmail.com', admin_name: 'Lola', admin_last_name: 'Mento', admin_password: '********', admin_active_status: true}
            ]
        }
    }

    renderTableData() {
        return this.state.admin_information.map((admin_information, index) => {
            const {id, email, admin_name, admin_last_name, admin_password, admin_active_status} = admin_information 
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{email}</td>
                    <td>{admin_name}</td>
                    <td>{admin_last_name}</td>
                    <td>{admin_password}</td>
                    <td>{admin_active_status}</td>
                </tr>
            )
        })
    }

    renderEditableTableData () {
        return this.state.admin_information.map((admin_information, index) => {
            const {id, email, admin_password, admin_name, admin_last_name, admin_active_status} = admin_information 
            return (
                <tr key={id}>
                    <td><input type='text'></input></td>
                    <td><input type='text'></input></td>
                    <td><input type='text'></input></td>
                    <td><input type='text'></input></td>
                    <td><input type='text'></input></td>
                    <td><input type='text'></input></td>
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
            <div class='container'>
                <div id='font-type'>
                    <h1>Create Administrator</h1>
                    <h2>Introduzca el correo electrónico del administrador a ser creado</h2>
                </div>
                <div class='row'>
                    <div class='form-outline'>
                        <input type='text' class='form-control' placeholder='correo electronico'></input>
                    </div>
                </div>
                <div class='row'>
                    <div class='col'>
                        <a href="/Active_Administrator">
                            <button class="btn btn-primary btn-lg btn-success" id='button-font'>Save</button>
                        </a>
                    </div>
                    <div class='col'>
                        <a href="/Active_Administrator">
                            <button class="btn btn-primary btn-lg btn-danger" id='button-font'>Cancel</button>
                        </a>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Create_Administrator