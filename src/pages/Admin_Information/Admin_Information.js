import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../Table_Format.css'
import 'bootstrap/dist/css/bootstrap.css'
import { administratorGetHandler, administratorDeleteHandler } from '../../handlers/administratorHandler'
import UpdateDeleteModal from '../../components/updateDeleteModal'
import Navbar from "../../components/Navbar";
import Home from "../../Home";

const Admin_Information = () => {

    const { adminid } = useParams();
    const navigate = useNavigate();

    const [admin_information, setAdminInformation] = useState({});

    const [updateDeleteModalOpen, setUpdateDeleteModalOpen] = useState(false);

    useEffect(() => {
        administratorGetHandler(adminid).then((res) => {
            if (res.status === 200) {
                setAdminInformation(res.data.data.admin);
            }
        });
    }, [adminid]);

    // const handleDelete = (e) => {
    //     e.preventDefault();
    //     alert("This administrator will be deactivated.");
    //     administratorDeleteHandler(adminid).then((res) => {
    //         if (res.status === 200) {
    //             //alert("Administrator deactivated successfully.");
    //             //alertnavigate('/Active_Administrator', { replace: true });
    //             setUpdateDeleteModalOpen(true);
    //         }
    //     });
    // }

    const renderTableHeader = () => {
        return(
            <tr>
                <th>Correo Electrónico de Administrador</th>
                <th>Nombre de Administrador</th>
                <th>Apellido de Administrador</th>
            </tr>
        )
    }

    const renderTableData = () => {
        const {admin_email, admin_name, admin_last_name} = admin_information;
        return (
            <tr>
                <td>{admin_email}</td>
                <td>{admin_name}</td>
                <td>{admin_last_name}</td>
            </tr>
        )
    }

    const render = () => {
        return (
            <><div>
                <Home />
            </div>
            <div>
                <Navbar />
            </div>
            <div id="office_table_padding">
                <h1 id='title'>Información del Administrador</h1>
                <table id='table_information' align='center'>
                    <tbody>
                        {renderTableHeader()}
                        {renderTableData()}
                    </tbody>
                </table>
                <a href={`/Edit_Administrator/${adminid}`}>
                    <button class='btn btn-success btn-block'>Editar</button>
                </a>
                    <button class='btn btn-danger btn-block' onClick={(e) => setUpdateDeleteModalOpen(true)}>Borrar</button>
                    {updateDeleteModalOpen && <UpdateDeleteModal type="DELETE" setOpenModal={setUpdateDeleteModalOpen} navigation={navigate} route="/Active_Administrator" information={admin_information} use="ADMIN"/>}
            </div></>
        )
    }

    return (
        render()
    )

}

export default Admin_Information;