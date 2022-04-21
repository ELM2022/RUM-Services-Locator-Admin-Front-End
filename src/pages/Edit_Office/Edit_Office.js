import React, { Component, useEffect, useState } from 'react'
import '../Table_Format.css'
import 'bootstrap/dist/css/bootstrap.css'

const Edit_Office = () => {

    const [officeName, setOfficeName] = useState("Actividades Sociales y Culturales");
    const [officeDescription, setOfficeDescription] = useState("Test Description");
    const [officeSchedule, setOfficeSchedule] = useState("L-V 7:45AM-4:30PM");
    const [officeLatitude, setOfficeLatitude] = useState(18.2101382977879);
    const [officeLongitude, setOfficeLongitude] = useState(-67.1411936055247);
    const [officeFloorNumber, setOfficeFloorNumber] = useState(3);
    const [officeRoomCode, setOfficeRoomCode] = useState("CE-306");
    const [officeEmail, setOfficeEmail] = useState("actividadessociales@uprm.edu");
    const [officePhoneNumber, setOfficePhoneNumber] = useState("(787)-832-4040");
    const [officeExtensionNumber, setOfficeExtensionNumber] = useState("Ext. 3366,3370");
    const [officeWebsite, setOfficeWebsite] = useState("https://www.uprm.edu/p/actividades-sociales");

    const handleOfficeNameChange = (e) => {
        setOfficeName(e.target.value)
        localStorage.setItem("officeName", e.target.value)
    }

    const handleOfficeDescriptionChange = (e) => {
        setOfficeDescription(e.target.value)
        localStorage.setItem("officeDescription", e.target.value)
    }

    const handleOfficeScheduleChange = (e) => {
        setOfficeSchedule(e.target.value)
        localStorage.setItem("officeSchedule", e.target.value)
    }

    const handleOfficeLatitudeChange = (e) => {
        setOfficeLatitude(e.target.value)
        localStorage.setItem("officeLatitude", e.target.value)
    }

    const handleOfficeLongitudeChange = (e) => {
        setOfficeLongitude(e.target.value)
        localStorage.setItem("officeLongitude", e.target.value)
    }

    const handleOfficeFloorNumberChange = (e) => {
        setOfficeFloorNumber(e.target.value)
        localStorage.setItem("officeFloorNumber", e.target.value)
    }

    const handleOfficeRoomCodeChange = (e) => {
        setOfficeRoomCode(e.target.value)
        localStorage.setItem("officeRoomCode", e.target.value)
    }

    const handleOfficeEmailChange = (e) => {
        setOfficeEmail(e.target.value)
        localStorage.setItem("officeEmail", e.target.value)
    }

    const handleOfficePhoneNumberChange = (e) => {
        setOfficePhoneNumber(e.target.value)
        localStorage.setItem("officePhoneNumber", e.target.value)
    }

    const handleOfficeExtensionNumberChange = (e) => {
        setOfficeExtensionNumber(e.target.value)
        localStorage.setItem("officeExtensionNumber", e.target.value)
    }

    const handleOfficeWebsiteChange = (e) => {
        setOfficeWebsite(e.target.value)
        localStorage.setItem("officeWebsite", e.target.value)
    }

    useEffect(() => {
        setOfficeName(localStorage.getItem("officeName"));
        setOfficeDescription(localStorage.getItem("officeDescription"));
        setOfficeSchedule(localStorage.getItem("officeSchedule"));
        setOfficeLatitude(localStorage.getItem("officeLatitude"));
        setOfficeLongitude(localStorage.getItem("officeLongitude"));
        setOfficeFloorNumber(localStorage.getItem("officeFloorNumber"));
        setOfficeRoomCode(localStorage.getItem("officeRoomCode"));
        setOfficeEmail(localStorage.getItem("officeEmail"));
        setOfficePhoneNumber(localStorage.getItem("officePhoneNumber"));
        setOfficeExtensionNumber(localStorage.getItem("officeExtensionNumber"));
        setOfficeWebsite(localStorage.getItem("officeWebsite"));
    })


    function renderTableHeader() {
        return(
            <tr>
            <th>Office Name</th>
            <th>Office Description</th>
            <th>Office Schedule</th>
            <th>Office Latitude</th>
            <th>Office Longitude</th>
            <th>Office Floor Number</th>
            <th>Office Room Code</th>
            <th>Office Email</th>
            <th>Office Phone Number</th>
            <th>Office Extension Number</th>
            <th>Office Website</th>
        </tr>
        )
    }

    function renderEditableTableData() {
                return (
                    <tr>
                        <td><input type='text' value={officeName} onChange={handleOfficeNameChange}></input></td>
                        <td><input type='text' value={officeDescription} onChange={handleOfficeDescriptionChange}></input></td>
                        <td><input type='text' value={officeSchedule} onChange={handleOfficeScheduleChange}></input></td>
                        <td><input type='text' value={officeLatitude} onChange={handleOfficeLatitudeChange}></input></td>
                        <td><input type='text' value={officeLongitude} onChange={handleOfficeLongitudeChange}></input></td>
                        <td><input type='text' value={officeFloorNumber} onChange={handleOfficeFloorNumberChange}></input></td>
                        <td><input type='text' value={officeRoomCode} onChange={handleOfficeRoomCodeChange}></input></td>
                        <td><input type='text' value={officeEmail} onChange={handleOfficeEmailChange}></input></td>
                        <td><input type='text' value={officePhoneNumber} onChange={handleOfficePhoneNumberChange}></input></td>
                        <td><input type='text' value={officeExtensionNumber} onChange={handleOfficeExtensionNumberChange}></input></td>
                        <td><input type='text' value={officeWebsite} onChange={handleOfficeWebsiteChange}></input></td>
                    </tr>
                )
            }
    
    function render() {
        return (
            <div id="office_table_padding">
                 <h1 id='title'>Edit Office Information</h1>
                 <div class="table-responsive">
                     <table id='table_information'>
                         <tbody>
                             {renderTableHeader()}
                             {renderEditableTableData()}
                         </tbody>
                     </table>
                 </div>
                 <div class='form-group'>
                        <h2 id='title'>Justificación</h2>
                        <label for='textArea' id='title'>Porfavor entrar justificacion de cambio</label>
                        <textarea class='form-control' id='textArea'></textarea>
                    </div>
                 <a href="/Active_Directory">
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

export default Edit_Office;


