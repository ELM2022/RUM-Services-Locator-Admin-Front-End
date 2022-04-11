import React, { Component } from 'react'
import '../Table_Format.css'
import 'bootstrap/dist/css/bootstrap.css'

class Create_Office extends Component {
    constructor(props){
        super(props)
        this.state = {
            office_information: [
                {id:1, building_id:1, office_name: 'Actividades Sociales y Culturales', office_description: 'Test Description', office_schedule: 'L-V 7:45AM-4:30PM', office_latitude: 18.2101382977879, office_longitude: -67.1411936055247, office_floor_number: 3, office_room_code: 'CE-306', office_email: 'actividadessociales@uprm.edu', office_phone_number: '(787)-832-4040', office_extension_number: 'Ext. 3366,3370', office_website: 'https://www.uprm.edu/p/actividades-sociales', office_active_status: true}
            ]
        }
    }

    renderEditableTableData () {
        return this.state.office_information.map((office_information, index) => {
            const {id, building_id, office_name, office_schedule, office_description, office_latitude, office_longitude, office_floor_number, office_room_code, office_email, office_phone_number, office_extension_number, office_website, office_active_status} = office_information 
            return (
                <tr key={id}>
                    <td><input type='text'></input></td>
                    <td><input type='text'></input></td>
                    <td><input type='text'></input></td>
                    <td><input type='text'></input></td>
                    <td><input type='text'></input></td>
                    <td><input type='text'></input></td>
                    <td><input type='text'></input></td>
                    <td><input type='text'></input></td>
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
        let header = Object.keys(this.state.office_information[0])
        return header.map((key, index) => {
            return <th key={index}>{key.replace(/_/g, " ").toUpperCase()}</th>
        })
     }

     render() {
         return(
            <div>
                <h1 id='title'>Create Office</h1>
                <div id="office_table_padding" class="table-responsive">
                    <table id='table_information'>
                        <tbody>
                            <tr>{this.renderTableHeader()}</tr>
                            {this.renderEditableTableData()}
                        </tbody>
                    </table>
                </div>
                <a href="Active_Directory">
                    <button class='btn btn-success btn-block'>Save</button>
                </a>
                <a href="Active_Directory">
                    <button class='btn btn-danger btn-block'>Cancel</button>
                </a>
            </div>
         )
     }
}

export default Create_Office