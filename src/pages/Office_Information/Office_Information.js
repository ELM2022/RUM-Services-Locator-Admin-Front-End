import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../Table_Format.css'
import 'bootstrap/dist/css/bootstrap.css'
import { officeGetHandler, officeDeleteHandler } from '../../handlers/officeHandler';
import UpdateDeleteModal from '../../components/updateDeleteModal'

const Office_Information = () => {

    const { officeid } = useParams();
    const navigate = useNavigate();
    
    const [office_information, setOfficeInformation] = useState({});

    const [updateDeleteModalOpen, setUpdateDeleteModalOpen] = useState(false);

    useEffect(() => {
        officeGetHandler(officeid).then((res) => {
            if (res.status === 200) {
                setOfficeInformation(res.data.data.office);
            }
        });
    }, [officeid]);

    // const handleDelete = (e) => {
    //     e.preventDefault();
    //     //alert("This service office will be deactivated.");
    //     officeDeleteHandler(officeid).then((res) => {
    //         if (res.status === 200) {
    //             //alert("Office deactivated successfully.");
    //             setUpdateDeleteModalOpen(true);
    //             //navigate('/Active_Directory', { replace: true });
    //             // window.location.reload(false);
    //         }
    //     });
    // }

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

    function renderTableData() {
        const {office_name, office_schedule, office_description, office_latitude, office_longitude, office_entrance_latitude, office_entrance_longitude, office_route_instructions, office_search_description, office_floor_number, office_room_code, office_email, office_phone_number, office_extension_number, office_website} = office_information
        return (
            <tr>
                <td>{office_name}</td>
                <td>{office_description}</td>
                <td>{office_schedule}</td>
                <td>{office_latitude}</td>
                <td>{office_longitude}</td>
                <td>{office_entrance_latitude}</td>
                <td>{office_entrance_longitude}</td>
                <td>{office_route_instructions}</td>
                <td>{office_search_description}</td>
                <td>{office_floor_number}</td>
                <td>{office_room_code}</td>
                <td>{office_email}</td>
                <td>{office_phone_number}</td>
                <td>{office_extension_number}</td>
                <td>{office_website}</td>
            </tr>
        )
    }

    function render() {
        return (
            <div id="office_table_padding">
                <h1 id='title'>Información de Oficina</h1>
                <div class="table-responsive">
                    <table id='table_information'>
                        <tbody>
                            {renderTableHeader()}
                            {renderTableData()}
                        </tbody>
                    </table>
                </div>
                <a href={`/Edit_Office/${officeid}`}>
                    <button class='btn btn-success btn-block'>Edit</button>
                </a>
                {/* <a href="/Active_Directory"> */}
                    <button class='btn btn-danger btn-block' onClick={(e) => setUpdateDeleteModalOpen(true)}>Delete</button>
                {/* </a> */}
                {updateDeleteModalOpen && <UpdateDeleteModal type="DELETE" setOpenModal={setUpdateDeleteModalOpen} navigation={navigate} route="/Active_Directory" information={office_information}/>}
            </div>
        )
    }

    return (
        render()
    )

}

export default Office_Information;