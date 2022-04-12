import React, { Component, useEffect, useState } from 'react'
import '../Table_Format.css'
import 'bootstrap/dist/css/bootstrap.css'

const Edit_Administrator = () => {

    const [administratorEmail, setAdministratorEmail] = useState("lolaMento@gmail.com");
    const [administratorName, setAdministratorName] = useState("Lola");
    const [administratorLastName, setAdministratorLastName] = useState("Mento");
    const [administratorPassword, setAdministratorPassword] = useState("*********");

    const handleAdministratorEmailChange = (e) => {
        setAdministratorEmail(e.target.value)
        localStorage.setItem("administratorEmail", e.target.value)
    }

    const handleAdministratorNameChange = (e) => {
        setAdministratorName(e.target.value)
        localStorage.setItem("administratorName", e.target.value)
    }

    const handleAdministratorLastNameChange = (e) => {
        setAdministratorLastName(e.target.value)
        localStorage.setItem("administratorLastName", e.target.value)
    }

    const handleAdministratorPasswordChange = (e) => {
        setAdministratorPassword(e.target.value)
        localStorage.setItem("administratorPassword", e.target.value)
    }

    useEffect(() => {
        setAdministratorEmail(localStorage.getItem("administratorEmail"));
        setAdministratorName(localStorage.getItem("administratorName"));
        setAdministratorLastName(localStorage.getItem("administratorLastName"));
        setAdministratorPassword(localStorage.getItem("administratorPassword"));
    })


    function renderTableHeader() {
        return(
            <tr>
            <th>Administrator Email</th>
            <th>Administrator Name</th>
            <th>Administrator Last Name</th>
            <th>Administrator Password</th>
        </tr>
        )
    }

    function renderEditableTableData() {
                return (
                    <tr>
                        <td><input type='text' value={administratorEmail} onChange={handleAdministratorEmailChange}></input></td>
                        <td><input type='text' value={administratorName} onChange={handleAdministratorNameChange}></input></td>
                        <td><input type='text' value={administratorLastName} onChange={handleAdministratorLastNameChange}></input></td>
                        <td><input type='text' value={administratorPassword} onChange={handleAdministratorPasswordChange}></input></td>
                    </tr>
                )
            }
    
    function render() {
        return (
            <div id="office_table_padding">
                 <h1 id='title'>Edit Administrator Information</h1>
                     <table id='table_information' align="center">
                         <tbody>
                             {renderTableHeader()}
                             {renderEditableTableData()}
                         </tbody>
                     </table>
                 <a href="/Active_Administrator">
                     <button class='btn btn-success btn-block'>Save</button>
                 </a>
                 <a href="/Office_Information">
                     <button class='btn btn-danger btn-block'>Cancel</button>
                 </a>
        </div>
        )
    }

    return (
        render()
    )
}

export default Edit_Administrator;


