import React, { Component, useEffect, useState } from 'react'
import { useNavigate, useHistory } from 'react-router-dom'
import '../Table_Format.css'
import 'bootstrap/dist/css/bootstrap.css'
import { officeCreateHandler } from '../../handlers/officeHandler';

const Create_Office = () => {

    let navigate = useNavigate();
    // const history = useHistory();
    const [officeName, setOfficeName] = useState("");
    const [officeDescription, setOfficeDescription] = useState("");
    const [officeSchedule, setOfficeSchedule] = useState("");
    const [officeLatitude, setOfficeLatitude] = useState();
    const [officeLongitude, setOfficeLongitude] = useState();
    const [officeFloorNumber, setOfficeFloorNumber] = useState();
    const [officeRoomCode, setOfficeRoomCode] = useState("");
    const [officeEmail, setOfficeEmail] = useState("");
    const [officePhoneNumber, setOfficePhoneNumber] = useState("");
    const [officeExtensionNumber, setOfficeExtensionNumber] = useState("");
    const [officeWebsite, setOfficeWebsite] = useState("");

    // {id:1, building_id:1, office_name: 'Actividades Sociales y Culturales', office_description: 'Test Description', office_schedule: 'L-V 7:45AM-4:30PM', office_latitude: 18.2101382977879, office_longitude: -67.1411936055247, office_floor_number: 3, office_room_code: 'CE-306', office_email: 'actividadessociales@uprm.edu', office_phone_number: '(787)-832-4040', office_extension_number: 'Ext. 3366,3370', office_website: 'https://www.uprm.edu/p/actividades-sociales', office_active_status: true}

    const handleSave = (e) => {
        e.preventDefault();

        try {
            const new_office = {
                office_name: officeName,
                office_description: officeDescription,
                office_schedule: officeSchedule,
                office_latitude: officeLatitude,
                office_longitude: officeLongitude,
                office_floor_number: officeFloorNumber,
                office_room_code: officeRoomCode,
                office_email: officeEmail,
                office_phone_number: officePhoneNumber,
                office_extension_number: officeExtensionNumber,
                office_website: officeWebsite
            }
    
            officeCreateHandler(new_office).then((res) => {
                if (res.status === 200) {
                    navigate(`/Active_Directory`, { replace: true });
                    // history.push('/Active_Directory');
                }
                else {
                    console.log(res);
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

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
                <td><input type='text' value={officeName} onChange={(e) => setOfficeName(e.target.value)}></input></td>
                <td><input type='text' value={officeDescription} onChange={(e) => setOfficeDescription(e.target.value)}></input></td>
                <td><input type='text' value={officeSchedule} onChange={(e) => setOfficeSchedule(e.target.value)}></input></td>
                <td><input type='text' value={officeLatitude} onChange={(e) => setOfficeLatitude(e.target.value)}></input></td>
                <td><input type='text' value={officeLongitude} onChange={(e) => setOfficeLongitude(e.target.value)}></input></td>
                <td><input type='text' value={officeFloorNumber} onChange={(e) => setOfficeFloorNumber(e.target.value)}></input></td>
                <td><input type='text' value={officeRoomCode} onChange={(e) => setOfficeRoomCode(e.target.value)}></input></td>
                <td><input type='text' value={officeEmail} onChange={(e) => setOfficeEmail(e.target.value)}></input></td>
                <td><input type='text' value={officePhoneNumber} onChange={(e) => setOfficePhoneNumber(e.target.value)}></input></td>
                <td><input type='text' value={officeExtensionNumber} onChange={(e) => setOfficeExtensionNumber(e.target.value)}></input></td>
                <td><input type='text' value={officeWebsite} onChange={(e) => setOfficeWebsite(e.target.value)}></input></td>
            </tr>
        )
    }
    
    function render() {
        return(
            <div>
                <h1 id='title'>Crear Oficina</h1>
                <div id="office_table_padding" class="table-responsive">
                    <table id='table_information'>
                        <tbody>
                            {renderTableHeader()}
                            {renderEditableTableData()}
                        </tbody>
                    </table>
                </div>
                    <button class='btn btn-success btn-block' onClick={(e) => handleSave(e)}>Save</button>
                <a href="/Active_Directory">
                    <button class='btn btn-danger btn-block'>Cancel</button>
                </a>
            </div>
        )
    }

    return (
        render()
    )
}

export default Create_Office;


