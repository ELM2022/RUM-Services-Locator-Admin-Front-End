import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../Table_Format.css'
import 'bootstrap/dist/css/bootstrap.css'
import { administratorGetHandler, administratorUpdateHandler } from '../../handlers/administratorHandler'
import { addAdministratorUpdateHandler } from '../../handlers/administratorHistoryHandler'
import UpdateDeleteModal from '../../components/updateDeleteModal'
import ErrorHandlingModal from '../../components/errorHandlingModal'

const getDatetime = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed).toISOString();
    const hour = new Date(timeElapsed).toString();
    const datetime = today.slice(0,10) + " " + hour.slice(16,24);

    return datetime;
}

const Edit_Administrator = () => {

    const { adminid } = useParams();
    const navigate = useNavigate();

    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const [updateDeleteModalOpen, setUpdateDeleteModalOpen] = useState(false);
    const [userErrors, setUserErrors] = useState([]);
    const [formInvalid, setFormInvalid] = useState(false);
    const [editedAdministrator, setEditedAdministrator] = useState({});

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

        setUserErrors([]);

        compileErrors();

        if(formInvalid) {
            setFormInvalid(false);
            setErrorModalOpen(true);
        }
        else{
            const new_admin = {
                admin_id: adminid,
                admin_email: administratorEmail,
                admin_name: administratorName,
                admin_last_name: administratorLastName
            }
            setEditedAdministrator(new_admin);

            setUpdateDeleteModalOpen(true);
        }
        setFormInvalid(false);

        
    }

    const compileErrors = () => {
        fieldValidator('administratorEmail', administratorEmail)
        fieldValidator('administratorName', administratorName)
        fieldValidator('administratorLastName', administratorLastName)
    }

    function fieldValidator(fieldName, value) {
        switch(fieldName) {
            case 'administratorEmail':
                if(!typeof value === 'string') {
                        setFormInvalid(true);
                        setUserErrors(prevState => [...prevState, "El correo electronico del administrador debe de contener letras."])
                }
                break;
            case 'administratorName':
                if(!typeof value === 'string') {
                    setUserErrors(prevState => [...prevState, "El nombre del administrador debe de contener letras y no numeros."])
                    setFormInvalid(true);
                }
                else if(typeof value === 'string'){
                    if(/[0-9]/.test(value)){
                        setUserErrors(prevState => [...prevState, "El nombre del administrador debe de contener letras y no numeros."])
                        setFormInvalid(true);
                    }
                }
                break;
            case 'administratorLastName':
                if(!typeof value === 'string') {
                    setUserErrors(prevState => [...prevState, "El apellido del administrador debe de contener letras y no numeros."])
                    setFormInvalid(true);
                }
                else if(typeof value === 'string'){
                    if(/[0-9]/.test(value)){
                        setUserErrors(prevState => [...prevState, "El apellido del administrador debe de contener letras y no numeros."])
                        setFormInvalid(true);
                    }
                }
                break;
    }
}

    function renderTableHeader() {
        return(
            <tr>
            <th>Correo Electr??nico de Administrador</th>
            <th>Nombre de Administrador</th>
            <th>Apellido de Administrador</th>
        </tr>
        )
    }

    function renderEditableTableData() {
                return (
                    <tr>
                        <td><input type='text' value={administratorEmail} onChange={(e) => {
                            setAdministratorEmail(e.target.value)
                            fieldValidator('administratorEmail', e.target.value)
                        }}></input></td>
                        <td><input type='text' value={administratorName} onChange={(e) => {
                            setAdministratorName(e.target.value)
                            fieldValidator('administratorName', e.target.value)
                            }}></input></td>
                        <td><input type='text' value={administratorLastName} onChange={(e) => {
                            setAdministratorLastName(e.target.value)
                            fieldValidator('administratorLastName', e.target.value)
                            }}></input></td>
                    </tr>
                )
            }
    
    function render() {
        return (
            <div id="office_table_padding">
                 <h1 id='title'>Editar Informaci??n del Administrador</h1>
                     <table id='table_information' align="center">
                         <tbody>
                             {renderTableHeader()}
                             {renderEditableTableData()}
                         </tbody>
                     </table>

                    <div class='form-group'>
                        <h2 id='title'>Justificaci??n</h2>
                        <label for='textArea' id='title'>Por favor escribir justificaci??n de cambio</label>
                        <textarea class='form-control' id='textArea' onChange={(e) => setJustification(e.target.value)}></textarea>
                    </div>
                     <button class='btn btn-success btn-block' onClick={(e) => handleSave(e)}>Guardar</button>
                 <a href={`/Admin_Information/${adminid}`}>
                     <button class='btn btn-danger btn-block'>Cancelar</button>
                 </a>
                 {updateDeleteModalOpen && <UpdateDeleteModal type="EDIT" setOpenModal={setUpdateDeleteModalOpen} routeid={adminid} navigation={navigate} route="/Admin_Information/" information={editedAdministrator} adminJustification={justification} use="ADMIN"/>}
                 {errorModalOpen && <ErrorHandlingModal text={userErrors} setOpenModal={setErrorModalOpen}/>}
        </div>
        )
    }

    return (
        render()
    )
}

export default Edit_Administrator;


