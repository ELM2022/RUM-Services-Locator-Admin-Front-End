import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../Table_Format.css'
import 'bootstrap/dist/css/bootstrap.css'
import { administratorGetHandler, administratorUpdateHandler } from '../../handlers/administratorHandler'
import UpdateDeleteModal from '../../components/updateDeleteModal'
import ErrorHandlingModal from '../../components/errorHandlingModal'

const Edit_Administrator = () => {

    const { adminid } = useParams();
    const navigate = useNavigate();

    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const [updateDeleteModalOpen, setUpdateDeleteModalOpen] = useState(false);
    const [userErrors, setUserErrors] = useState([]);

    const [administratorEmail, setAdministratorEmail] = useState("");
    const [administratorName, setAdministratorName] = useState("");
    const [administratorLastName, setAdministratorLastName] = useState("");
    const [justification, setJustification] = useState("");

    useEffect(() => {
        administratorGetHandler(adminid).then((res) => {
            if (res.status === 200) {
                const admin = res.data.data.admin;

                setAdministratorEmail(admin.admin_email);
                setAdministratorName(admin.admin_name);
                setAdministratorLastName(admin.admin_last_name);
            }
        });
    }, [adminid])

    const handleSave = (e) => {
        e.preventDefault();
        const new_admin = {
            admin_id: adminid,
            admin_email: administratorEmail,
            admin_name: administratorName,
            admin_last_name: administratorLastName
        }
        administratorUpdateHandler(new_admin).then((res) => {
            if (res.status === 200) {
                setUpdateDeleteModalOpen(true)
                //navigate(`/Admin_Information/${adminid}`, { replace: true });
            }
        });
    }

    function renderTableHeader() {
        return(
            <tr>
            <th>Administrator Email</th>
            <th>Administrator Name</th>
            <th>Administrator Last Name</th>
        </tr>
        )
    }

    function renderEditableTableData() {
                return (
                    <tr>
                        <td><input type='text' value={administratorEmail} onChange={(e) => setAdministratorEmail(e.target.value)}></input></td>
                        <td><input type='text' value={administratorName} onChange={(e) => setAdministratorName(e.target.value)}></input></td>
                        <td><input type='text' value={administratorLastName} onChange={(e) => setAdministratorLastName(e.target.value)}></input></td>
                    </tr>
                )
            }
    
    function render() {
        return (
            <div id="office_table_padding">
                 <h1 id='title'>Editar Información del Administrador</h1>
                     <table id='table_information' align="center">
                         <tbody>
                             {renderTableHeader()}
                             {renderEditableTableData()}
                         </tbody>
                     </table>

                    <div class='form-group'>
                        <h2 id='title'>Justificación</h2>
                        <label for='textArea' id='title'>Por favor escribir justificación de cambio</label>
                        <textarea class='form-control' id='textArea' onChange={(e) => setJustification(e.target.value)}></textarea>
                    </div>
                     <button class='btn btn-success btn-block' onClick={(e) => handleSave(e)}>Save</button>
                 <a href={`/Admin_Information/${adminid}`}>
                     <button class='btn btn-danger btn-block'>Cancel</button>
                 </a>
                 {updateDeleteModalOpen && <UpdateDeleteModal type="EDIT" setOpenModal={setUpdateDeleteModalOpen} routeid={adminid} navigation={navigate} route="/Admin_Information/"/>}
                 {errorModalOpen && <ErrorHandlingModal text={userErrors} setOpenModal={setErrorModalOpen}/>}
        </div>
        )
    }

    return (
        render()
    )
}

export default Edit_Administrator;


