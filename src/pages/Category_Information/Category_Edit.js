import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../Table_Format.css'
import 'bootstrap/dist/css/bootstrap.css'
import {getCategoryByIDHandler} from '../../handlers/categoriesHandler'
import UpdateDeleteModal from '../../components/updateDeleteModal'
import ErrorHandlingModal from '../../components/errorHandlingModal'
import Navbar from "../../components/Navbar";
import Home from "../../Home";

const Category_Edit = () => {
    const {categoryid} = useParams();

    const [categoryName, setCategoryName] = useState("");
    const [justification, setJustification] = useState("");

    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const [updateDeleteModalOpen, setUpdateDeleteModalOpen] = useState(false);
    const [userErrors, setUserErrors] = useState([]);
    const [formInvalid, setFormInvalid] = useState(false);
    const [editedCategory, setEditedCategory] = useState({});

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
            const edited_category = {
                category_id: categoryid,
                category_name: categoryName,
            }
            setEditedCategory(edited_category);

            setUpdateDeleteModalOpen(true);
        }
        setFormInvalid(false);

        console.log("Here")
    }

    useEffect(() => {
        getCategoryByIDHandler(categoryid).then((res) => {
            if(res.status === 200){
                const category = res.data.data.category
                setCategoryName(category.category_name)
            }
        })

    },[categoryid])

    function renderTableHeader(){
        return(
            <tr>
                <th>Nombre de Categoria</th>
            </tr>
        );
    }

    function renderEditableTableData(){
        return(
            <tr>
                <td><input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)}></input></td>
            </tr>
        )
    }

    const compileErrors = () => {
        fieldValidator('categoryName', categoryName)
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



    function render(){
        return(
            <><div>
                <Home />
            </div>
            <div>
                <Navbar />
            </div>
            <div id="office_table_padding">
                    <h1 id='title'>Editar Información de la Categoria</h1>
                    <table id='table_information' align="center">
                        <tbody>
                            {renderTableHeader()}
                            {renderEditableTableData()}
                        </tbody>
                    </table>
                    <h3></h3>
                     <button class='btn btn-success btn-block' onClick={(e) => handleSave(e)}>Guardar</button>
                 <a href={`/Categories_Directory`}>
                     <button class='btn btn-danger btn-block'>Cancelar</button>
                 </a>
                 {updateDeleteModalOpen && <UpdateDeleteModal type="EDIT" setOpenModal={setUpdateDeleteModalOpen} route="Categories_Directory" navigation={navigate} information={editedCategory} use="CATEGORY"/>}
                 {errorModalOpen && <ErrorHandlingModal text={userErrors} setOpenModal={setErrorModalOpen}/>}
            </div></>
        )
    }

    return(
        render()
    )
}

export default Category_Edit;