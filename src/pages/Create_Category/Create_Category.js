import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../Table_Format.css'
import 'bootstrap/dist/css/bootstrap.css'
import {getCategoryByIDHandler} from '../../handlers/categoriesHandler'
import UpdateDeleteModal from '../../components/updateDeleteModal'
import ErrorHandlingModal from '../../components/errorHandlingModal'
import Navbar from "../../components/Navbar";
import Home from "../../Home";

const Create_Category = () => {
    const {categoryid} = useParams();

    const [categoryName, setCategoryName] = useState("");
    const [userErrors, setUserErrors] = useState([]);
    const [formInvalid, setFormInvalid] = useState(false);
    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const [updateDeleteModalOpen, setUpdateDeleteModalOpen] = useState(false);

    const navigate = useNavigate();
    // const context = useContext();

    const handleSave = (e) => {
        e.preventDefault();

        setUserErrors([]);

        compileErrors();

        if(formInvalid) {
            setFormInvalid(false);
            setErrorModalOpen(true);
        }
        else{

            setUpdateDeleteModalOpen(true);
        }
        setFormInvalid(false);
    }

    useEffect(() => {
        

    },[])

    const compileErrors = () => {
        fieldValidator('categoryName', categoryName)
    }

    function renderTableHeader(){
        return(
            <tr>
                <th>Nombre de Categoria</th>
            </tr>
        );
    }

    function fieldValidator(fieldName, value) {
        switch(fieldName) {
            case 'categoryName':
                if(typeof value === 'string') {
                    if(/[0-9]/.test(value)){
                        setFormInvalid(true);
                        setUserErrors(prevState => [...prevState, "El nombre de la categoria debe de contener solamente letras."])
                    }
                }
                else{
                    setFormInvalid(true);
                    setUserErrors(prevState => [...prevState, "El nombre de la categoria debe de contener solamente letras."])
                }
                break;
        }

    }

    function renderEditableTableData(){
        return(
            <tr>
                <td><input type="text" value={categoryName} onChange={(e) => {
                    setCategoryName(e.target.value);
                    fieldValidator('categoryName', e.target.value);
                    }}></input></td>
            </tr>
        )
    }

    function render(){
        return(
            <><div>
                <Home />
            </div>
            <div>
                <Navbar />
            </div>
            <div id="office_table_padding">
                    <h1 id='title'>Crear Categoria</h1>
                    <table id='table_information' align="center">
                        <tbody>
                            {renderTableHeader()}
                            {renderEditableTableData()}
                        </tbody>
                    </table>
                     <button class='btn btn-success btn-block' onClick={(e) => handleSave(e)}>Crear</button>
                 <a href={`/Categories_Directory`}>
                     <button class='btn btn-danger btn-block'>Cancelar</button>
                 </a>
                 {updateDeleteModalOpen && <UpdateDeleteModal type="CREATE" setOpenModal={setUpdateDeleteModalOpen} navigation={navigate} route="/Categories_Directory" information={categoryName} use="CATEGORY"/>}
                 {errorModalOpen && <ErrorHandlingModal text={userErrors} setOpenModal={setErrorModalOpen}/>}
            </div></>
        )
    }

    return(
        render()
    )
}

export default Create_Category;