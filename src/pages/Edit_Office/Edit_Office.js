import React, {useEffect, useState } from 'react'
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
    const [formInvalid, setFormInvalid] = useState(false);
    const [editedOffice, setEditedOffice] = useState({});

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

        setUserErrors([]);

        compileErrors();

        if(formInvalid) {
            setFormInvalid(false);
            setErrorModalOpen(true);
        }
        else{
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
            setEditedOffice(new_office);
    
            setUpdateDeleteModalOpen(true);
        }
        setFormInvalid(false);

        // officeUpdateHandler(new_office).then((res) => {
        //     if (res.status === 200) {
        //         const timeElapsed = Date.now();
        //         const today = new Date(timeElapsed).toISOString();
        //         const hour = new Date(timeElapsed).toString();
        //         const datetime = today.slice(0,10) + " " +hour.slice(16,24);
        //         const office_update = {
        //             office_id: officeid,
        //             admin_id: 1,
        //             update_datetime: datetime,
        //             update_justification: justification
        //         }
        //         setUpdateDeleteModalOpen(true);
        //         addOfficeUpdateHandler(office_update).then((response) => {
        //             // console.log(response);
        //             // if (response.status === 201) {
        //                 // navigate(`/Office_Information/${officeid}`, { replace: true });
        //             // }
        //         });
        //         //navigate(`/Office_Information/${officeid}`, { replace: true });
        //     }
        //     else {
        //         setUserErrors(res.data.errors);
        //         setErrorModalOpen(true);
        //     }
        // });
    }

    const compileErrors = () => {
        fieldValidator('officeName', officeName)
        fieldValidator('officeDescription', officeDescription)
        fieldValidator('officeSchedule', officeSchedule)
        fieldValidator('officeLatitude', officeLatitude)
        fieldValidator('officeLongitude', officeLongitude)
        fieldValidator('officeEntranceLatitude', officeEntranceLatitude)
        fieldValidator('officeEntranceLongitude', officeEntranceLongitude)
        fieldValidator('officeRouteInstructions', officeRouteInstructions)
        fieldValidator('officeSearchDescription', officeSearchDescription)
        fieldValidator('officeFloorNumber', officeFloorNumber)
        fieldValidator('officeRoomCode', officeRoomCode)
        fieldValidator('officeEmail', officeEmail)
        fieldValidator('officePhoneNumber', officePhoneNumber)
        fieldValidator('officeExtensionNumber', officeExtensionNumber)
        fieldValidator('officeWebsite', officeWebsite)
    }

    function fieldValidator(fieldName, value) {
        switch(fieldName) {
            case 'officeName':
                if(typeof value === 'string') {
                    if(/[0-9]/.test(value)){
                        setFormInvalid(true);
                        setUserErrors(prevState => [...prevState, "Office Name must be a string with only letters."])
                    }
                }
                else{
                    setFormInvalid(true);
                    setUserErrors(prevState => [...prevState, "Office Name must be a string with only letters."])
                }
                break;
            case 'officeDescription':
                if(!typeof value === 'string') {
                    setUserErrors(prevState => [...prevState, "Office Description must be a string."])
                    setFormInvalid(true);
                }
                break;
            case 'OfficeSearchDescription':
                if(!typeof value === 'string') {
                    setUserErrors(prevState => [...prevState, "Office Search Description must be a string."])
                    setFormInvalid(true);
                }
                break;
            case 'officePhoneNumber':
                if(!typeof value === 'string' && value !== '') {
                    if(!/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(value)){
                    setUserErrors(prevState => [...prevState, "Office Phone Number must not contain letters and follow the sequence of XXX-XXX-XXXX."])
                    setFormInvalid(true);
                    }
                }
                break;
            case 'officeLatitude':
                if(!isNaN(value)){
                    if(Number.isInteger(Number(value))){
                        setUserErrors(prevState => [...prevState, "Office Latitude must be a float number."])
                        setFormInvalid(true);
                    }
                }
                else{
                    setUserErrors(prevState => [...prevState, "Office Latitude must be a float number."])
                    setFormInvalid(true);
                }
                break;
            case 'officeLongitude':
                if(!Number.isNaN(value)){
                    if(Number.isInteger(Number(value))){
                        setUserErrors(prevState => [...prevState, "Office Longitude must be a float number."])
                        setFormInvalid(true);
                    }
                }
                else{
                    setUserErrors(prevState => [...prevState, "Office Longitude must be a float number."])
                    setFormInvalid(true);
                }
                break;
            case 'officeEntranceLatitude':
                if(!Number.isNaN(value)){
                    if(Number.isInteger(Number(value))){
                        setUserErrors(prevState => [...prevState, "Office Entrance Latitude must be a float number."])
                        setFormInvalid(true);
                    }
                }
                else{
                    setUserErrors(prevState => [...prevState, "Office Entrance Latitude must be a float number."])
                    setFormInvalid(true);
                }
                break;
            case 'officeEntranceLongitude':
                if(!Number.isNaN(value)){
                    if(Number.isInteger(Number(value))){
                        setUserErrors(prevState => [...prevState, "Office Entrance Longitude must be a float number."])
                        setFormInvalid(true);
                    }
                }
                else{
                    setUserErrors(prevState => [...prevState, "Office Entrance Longitude must be a float number."])
                    setFormInvalid(true);
                }
                break;
            case 'officeFloorNumber':
                if(!isNaN(value)){
                    if(!Number.isInteger(Number(value))){
                        setUserErrors(prevState => [...prevState, "Office floor number must be an integer."])
                        setFormInvalid(true);
                    }
                }
                else{
                    setUserErrors(prevState => [...prevState, "Office floor number must be an integer number."])
                    setFormInvalid(true);
                }
                break;
            case 'OfficeRouteInstructions':
                if(!typeof value === 'string') {
                    setUserErrors(prevState => [...prevState, "Office Route Instructions must be a string."])
                    setFormInvalid(true);
                }
                break;
            case 'OfficeRoomCode':
                if(!typeof value === 'string') {
                    setUserErrors(prevState => [...prevState, "Office Room Code must be a string."])
                    setFormInvalid(true);
                }
                break;
            case 'officeExtensionNumber':
                if(!typeof value === 'string') {
                    setUserErrors(prevState => [...prevState, "Office Extension Number must be a string."])
                    setFormInvalid(true);
                }
                break;
            case 'officeEmail':
                if(!typeof value === 'string') {
                    setUserErrors(prevState => [...prevState, "Office Email must be a string."])
                    setFormInvalid(true);
                }
                break;
            case 'officeSchedule':
                if(!typeof value === 'string') {
                    setUserErrors(prevState => [...prevState, "Office Schedule must be a string."])
                    setFormInvalid(true);
                }
                break;
            case 'officeWebsite':
                if(!typeof value === 'string') {
                    setUserErrors(prevState => [...prevState, "Office Room Code must be a string."])
                    setFormInvalid(true);
                }
                break;
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
                <td><input type='text' value={officeName} onChange={(e) =>  {
                    setOfficeName(e.target.value)
                    fieldValidator('officeName', e.target.value)
                    }}></input></td>
                <td><input type='text' value={officeDescription} onChange={(e) => {
                    setOfficeDescription(e.target.value)
                    fieldValidator('officeDescription', e.target.value)
                    }}></input></td>
                <td><input type='text' value={officeSchedule} onChange={(e) => {
                    setOfficeSchedule(e.target.value)
                    fieldValidator('officeSchedule', e.target.value)
                    }}></input></td>
                <td><input type='text' value={officeLatitude} onChange={(e) => {
                    setOfficeLatitude(e.target.value)
                    fieldValidator('officeLatitude', e.target.value)
                    }}></input></td>
                <td><input type='text' value={officeLongitude} onChange={(e) => {
                    setOfficeLongitude(e.target.value)
                    fieldValidator('officeLongitude', e.target.value)
                    }}></input></td>
                <td><input type='text' value={officeEntranceLatitude} onChange={(e) => {
                    setOfficeEntranceLatitude(e.target.value)
                    fieldValidator('officeEntranceLatitude', e.target.value)
                }}></input></td>
                <td><input type='text' value={officeEntranceLongitude} onChange={(e) => {
                    setOfficeEntranceLongitude(e.target.value)
                    fieldValidator('officeEntranceLongitude', e.target.value)
                    }}></input></td>
                <td><input type='text' value={officeRouteInstructions} onChange={(e) => {
                    setOfficeRouteInstructions(e.target.value)
                    fieldValidator('officeRouteInstructions', e.target.value)
                    }}></input></td>
                <td><input type='text' value={officeSearchDescription} onChange={(e) => {
                    setOfficeSearchDescription(e.target.value)
                    fieldValidator('officeSearchDescription', e.target.value)
                    }}></input></td>
                <td><input type='text' value={officeFloorNumber} onChange={(e) => {
                    setOfficeFloorNumber(e.target.value)
                    fieldValidator('officeFloorNumber', e.target.value)
                    }}></input></td>
                <td><input type='text' value={officeRoomCode} onChange={(e) => {
                    setOfficeRoomCode(e.target.value)
                    fieldValidator('officeRoomCode', e.target.value)
                    }}></input></td>
                <td><input type='text' value={officeEmail} onChange={(e) => {
                    setOfficeEmail(e.target.value)
                    fieldValidator('officeEmail', e.target.value)
                    }}></input></td>
                <td><input type='text' value={officePhoneNumber} onChange={(e) => {
                    setOfficePhoneNumber(e.target.value)
                    fieldValidator('officePhoneNumber', e.target.value)
                    }}></input></td>
                <td><input type='text' value={officeExtensionNumber} onChange={(e) => {
                    setOfficeExtensionNumber(e.target.value)
                    fieldValidator('officeExtensionNumber', e.target.value)
                    }}></input></td>
                <td><input type='text' value={officeWebsite} onChange={(e) => {
                    setOfficeWebsite(e.target.value)
                    fieldValidator('officeWebsite', e.target.value)
                    }}></input></td>
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
                     <button class='btn btn-success btn-block' onClick={(e) => handleSave(e)}>Guardar</button>
                 <a href={`/Office_Information/${officeid}`}>
                     <button class='btn btn-danger btn-block'>Cancelar</button>
                 </a>
                 {updateDeleteModalOpen && <UpdateDeleteModal type="EDIT" setOpenModal={setUpdateDeleteModalOpen} routeid={officeid} navigation={navigate} route="/Office_Information/" information={editedOffice} adminJustification={justification}/>}
                 {errorModalOpen && <ErrorHandlingModal text={userErrors} setOpenModal={setErrorModalOpen}/>}
        </div>
        )
    }

    return (
        render()
    )
}

export default Edit_Office;


