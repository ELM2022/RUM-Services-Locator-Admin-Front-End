import React, { Component } from 'react'
import '../Table_Format.css'
import 'bootstrap/dist/css/bootstrap.css'

class Office_Information extends Component {

    constructor(props){
        super(props)
        this.state = {
            office_information: [
                {office_name: localStorage.getItem('officeName'), office_description: localStorage.getItem('officeDescription'), office_schedule: localStorage.getItem('officeSchedule'), office_latitude: localStorage.getItem('officeLatitude'), office_longitude: localStorage.getItem('officeLongitude'), office_floor_number: localStorage.getItem("officeFloorNumber"), office_room_code: localStorage.getItem('officeRoomCode'), office_email: localStorage.getItem('officeEmail'), office_phone_number: localStorage.getItem('officePhoneNumber'), office_extension_number: localStorage.getItem('officeExtensionNumber'), office_website: localStorage.getItem('officeWebsite')}
            ]
        }
    }

    renderTableData() {
        return this.state.office_information.map((office_information, index) => {
            const {office_name, office_schedule, office_description, office_latitude, office_longitude, office_floor_number, office_room_code, office_email, office_phone_number, office_extension_number, office_website} = office_information 
            return (
                <tr key={index}>
                    <td>{office_name}</td>
                    <td>{office_description}</td>
                    <td>{office_schedule}</td>
                    <td>{office_latitude}</td>
                    <td>{office_longitude}</td>
                    <td>{office_floor_number}</td>
                    <td>{office_room_code}</td>
                    <td>{office_email}</td>
                    <td>{office_phone_number}</td>
                    <td>{office_extension_number}</td>
                    <td>{office_website}</td>
                </tr>
            )
        })
    }

    renderEditableTableData () {
        return this.state.office_information.map((office_information, index) => {
            const {office_name, office_schedule, office_description, office_latitude, office_longitude, office_floor_number, office_room_code, office_email, office_phone_number, office_extension_number, office_website, office_active_status} = office_information 
            return (
                <tr key={index}>
                    <td><input type='text' value={office_name}></input></td>
                    <td><input type='text' value={office_description}></input></td>
                    <td><input type='text' value={office_schedule}></input></td>
                    <td><input type='text' value={office_latitude}></input></td>
                    <td><input type='text' value={office_longitude}></input></td>
                    <td><input type='text' value={office_floor_number}></input></td>
                    <td><input type='text' value={office_room_code}></input></td>
                    <td><input type='text' value={office_email}></input></td>
                    <td><input type='text' value={office_phone_number}></input></td>
                    <td><input type='text' value={office_extension_number}></input></td>
                    <td><input type='text' value={office_website}></input></td>
                    <td><input type='text' value={office_active_status}></input></td>
                </tr>
            )
        })
    }

    renderTableHeader() {
       let header = Object.keys(this.state.office_information[0])
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
                <h1 id='title'>Office Information</h1>
                <div class="table-responsive">
                    <table id='table_information'>
                        <tbody>
                            <tr>{this.renderTableHeader()}</tr>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </div>
                <a href="/Edit_Office">
                    <button class='btn btn-success btn-block'>Edit</button>
                </a>
                <a href="/Active_Directory">
                    <button class='btn btn-danger btn-block' onClick={this.handleDelete}>Delete</button>
                </a>
            </div>
        )
    }
}

export default Office_Information