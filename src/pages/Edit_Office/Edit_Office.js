import React, { Component, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../Table_Format.css'
import 'bootstrap/dist/css/bootstrap.css'
import { officeGetHandler, officeUpdateHandler } from '../../handlers/officeHandler';
import { addOfficeUpdateHandler } from '../../handlers/officeHistoryHandler'
import UpdateDeleteModal from '../../components/updateDeleteModal'
import ErrorHandlingModal from '../../components/errorHandlingModal'

const Edit_Office = () => {

    const {officeid} = useParams();
    const navigate = useNavigate();

    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const [updateDeleteModalOpen, setUpdateDeleteModalOpen] = useState(false);
    const [userErrors, setUserErrors] = useState([]);

    const [officeName, setOfficeName] = useState("");
    const [officeDescription, setOfficeDescription] = useState("");
    const [officeSchedule, setOfficeSchedule] = useState("");
    const [officeLatitude, setOfficeLatitude] = useState();
    const [officeLongitude, setOfficeLongitude] = useState();
    const [officeEntranceLatitude, setOfficeEntranceLatitude] = useState();
    const [officeEntranceLongitude, setOfficeEntranceLongitude] = useState();
    const [officeRouteInstructions, setOfficeRouteInstructions] = useState("");
    const [officeSearchDescription, setOfficeSearchDescription] = useState("")
    const [officeFloorNumber, setOfficeFloorNumber] = useState();
    const [officeRoomCode, setOfficeRoomCode] = useState("");
    const [officeEmail, setOfficeEmail] = useState("");
    const [officePhoneNumber, setOfficePhoneNumber] = useState("");
    const [officeExtensionNumber, setOfficeExtensionNumber] = useState("");
    const [officeWebsite, setOfficeWebsite] = useState("");
    const [officeActiveStatus, setOfficeActiveStatus] = useState();
    const [justification, setJustification] = useState("");

    useEffect(() => {
        officeGetHandler(officeid).then((res) => {
            if (res.status === 200) {
                const office = res.data.data.office;

                setOfficeName(office.office_name);
                setOfficeDescription(office.office_description);
                setOfficeSchedule(office.office_schedule);
                setOfficeLatitude(office.office_latitude);
                setOfficeLongitude(office.office_longitude);
                setOfficeEntranceLatitude(office.office_entrance_latitude);
                setOfficeEntranceLongitude(office.office_entrance_longitude);
                setOfficeRouteInstructions(office.office_route_instructions);
                setOfficeSearchDescription(office.office_search_description);
                setOfficeFloorNumber(office.office_floor_number);
                setOfficeRoomCode(office.office_room_code);
                setOfficeEmail(office.office_email);
                setOfficePhoneNumber(office.office_phone_number);
                setOfficeExtensionNumber(office.office_extension_number);
                setOfficeWebsite(office.office_website);
                setOfficeActiveStatus(office.office_active_status);
            }
        });
    }, [officeid])

    const handleSave = (e) => {
        e.preventDefault();
        const new_office = {
            office_id: officeid,
            office_name: officeName,
            office_description: officeDescription,
            office_schedule: officeSchedule,
            office_latitude: officeLatitude,
            office_longitude: officeLongitude,
            office_entrance_latitude: officeEntranceLatitude,
            office_entrance_longitude: officeEntranceLongitude,
            office_route_instructions: officeRouteInstructions,
            office_search_description: officeSearchDescription,
            office_floor_number: officeFloorNumber,
            office_room_code: officeRoomCode,
            office_email: officeEmail,
            office_phone_number: officePhoneNumber,
            office_extension_number: officeExtensionNumber,
            office_website: officeWebsite,
            office_active_status: officeActiveStatus
        }

        officeUpdateHandler(new_office).then((res) => {
            if (res.status === 200) {
                const timeElapsed = Date.now();
                const today = new Date(timeElapsed).toISOString();
                const hour = new Date(timeElapsed).toString();
                const datetime = today.slice(0,10) + " " +hour.slice(16,24);
                const office_update = {
                    office_id: officeid,
                    admin_id: 1,
                    update_datetime: datetime,
                    update_justification: justification
                }
                setUpdateDeleteModalOpen(true);
                addOfficeUpdateHandler(office_update).then((response) => {
                    // console.log(response);
                    // if (response.status === 201) {
                        // navigate(`/Office_Information/${officeid}`, { replace: true });
                    // }
                });
                //navigate(`/Office_Information/${officeid}`, { replace: true });
            }
            else {
                setUserErrors(res.data.errors);
                setErrorModalOpen(true);
            }
        });
    }

    function renderTableHeader() {
        return(
            <tr>
            <th>Office Name</th>
            <th>Office Description</th>
            <th>Office Schedule</th>
            <th>Office Latitude</th>
            <th>Office Longitude</th>
            <th>Office Entrance Latitude</th>
            <th>Office Entrance Longitude</th>
            <th>Office Route Instructions</th>
            <th>Office Search Description</th>
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
                <td><input type='text' value={officeEntranceLatitude} onChange={(e) => setOfficeEntranceLatitude(e.target.value)}></input></td>
                <td><input type='text' value={officeEntranceLongitude} onChange={(e) => setOfficeEntranceLongitude(e.target.value)}></input></td>
                <td><input type='text' value={officeRouteInstructions} onChange={(e) => setOfficeRouteInstructions(e.target.value)}></input></td>
                <td><input type='text' value={officeSearchDescription} onChange={(e) => setOfficeSearchDescription(e.target.value)}></input></td>
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
        return (
            <div id="office_table_padding">
                 <h1 id='title'>Editar Información de Oficina</h1>
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
                        <label for='textArea' id='title'>Por favor escribir justificación de cambio</label>
                        <textarea class='form-control' id='textArea' onChange={(e) => setJustification(e.target.value)}></textarea>
                </div>
                     <button class='btn btn-success btn-block' onClick={(e) => handleSave(e)}>Save</button>
                 <a href={`/Office_Information/${officeid}`}>
                     <button class='btn btn-danger btn-block'>Cancel</button>
                 </a>
                 {updateDeleteModalOpen && <UpdateDeleteModal type="EDIT" setOpenModal={setUpdateDeleteModalOpen} routeid={officeid} navigation={navigate} route="/Office_Information/"/>}
                 {errorModalOpen && <ErrorHandlingModal text={userErrors} setOpenModal={setErrorModalOpen}/>}
        </div>
        )
    }

    return (
        render()
    )
}

export default Edit_Office;


