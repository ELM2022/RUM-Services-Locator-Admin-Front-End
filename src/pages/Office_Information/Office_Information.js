import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../Table_Format.css'
import 'bootstrap/dist/css/bootstrap.css'
import { officeGetHandler, officeDeleteHandler } from '../../handlers/officeHandler';
import {getOfficeCategoriesHandler} from '../../handlers/categoriesHandler'
import UpdateDeleteModal from '../../components/updateDeleteModal'
import Navbar from "../../components/Navbar";
import Home from "../../Home";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const Office_Information = () => {

    const { officeid } = useParams();
    const navigate = useNavigate();

    const animatedComponents = makeAnimated();
    
    const [office_information, setOfficeInformation] = useState({});
    const [officeCategories, setOfficeCategories] = useState({})

    const [updateDeleteModalOpen, setUpdateDeleteModalOpen] = useState(false);

    useEffect(() => {
        officeGetHandler(officeid).then((res) => {
            if (res.status === 200) {
                setOfficeInformation(res.data.data.office);
            }
        });
    }, [officeid]);

    useEffect(() => {getOfficeCategoriesHandler(officeid).then((res) => {
        if(res.status === 200){
            const preselection = [];
                res.data.data.categories.map((category) => {
                    const temp = {
                        label: category.category_name,
                        value: category.category_id
                    }

                    preselection.push(temp);
                });

                setOfficeCategories(preselection);
        }
    });
    }, [officeid]);

    function renderTableHeader() {
        return(
            <tr>
                <th>Nombre de Oficina</th>
                <th>Descripción de Oficina</th>
                <th>Horario de Oficina</th>
                <th>Latitud de Oficina</th>
                <th>Longitud de Oficina</th>
                <th>Latitude de Entrada de Oficina</th>
                <th>Longitud de Entrada de Oficina</th>
                <th>Instrucciones de Ruta de Oficina</th>
                <th>Descripción de Busqueda de Oficina</th>
                <th>Numero de Piso de Oficina</th>
                <th>Codigo de Salón de Oficina</th>
                <th>Correo Electrónico de Oficina</th>
                <th>Numero de Teléfono</th>
                <th>Numero de Extensión de Oficina</th>
                <th>Pagina de Internet de Oficina</th>
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

    function renderDropdown() {
        return(
            <div class='container'>
                <div class='row'>
                    <Select
                    value={officeCategories}
                    components={animatedComponents}
                    isMulti
                    isDisabled={true}>
                    </Select>
                </div>
            </div>
        )

    }

    function render() {
        console.log(officeCategories);
        return (
            <><div>
                <Home />
            </div>
            <div>
                <Navbar />
            </div>
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
                <h3 id='title'>Categorias</h3>
                {renderDropdown()}
                <a href={`/Edit_Office/${officeid}`}>
                    <button class='btn btn-success btn-block'>Editar</button>
                </a>
                    <button class='btn btn-danger btn-block' onClick={(e) => setUpdateDeleteModalOpen(true)}>Borrar</button>
                {updateDeleteModalOpen && <UpdateDeleteModal type="DELETE" setOpenModal={setUpdateDeleteModalOpen} navigation={navigate} route="/Active_Directory" information={office_information} use="OFFICE"/>}
            </div></>
        )
    }

    return (
        render()
    )

}

export default Office_Information;