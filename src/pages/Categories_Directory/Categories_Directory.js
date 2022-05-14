import React, { useContext ,Component, useState, useEffect} from 'react';
import '../Menu_Format.css'
import { getAllCategoriesHandler, getAllActiveCategories} from '../../handlers/categoriesHandler'
import UpdateDeleteModal from '../../components/updateDeleteModal'
import Navbar from "../../components/Navbar";
import Home from "../../Home";


const Categories_Directory = ({useNavigate}) => {

    const[categories, setCategories] = useState([]);
    const[updateDeleteModalOpen, setUpdateDeleteModalOpen] = useState(false);


    useEffect(() => {
        getAllActiveCategories().then((res) => {
            if(res.status === 200){
                const result = [];
                res.data.data.categories.map((category) => {
                    result.push({
                        categoryName: category.category_name,
                        categoryID: category.category_id
                    });
                });
                setCategories(result);
            }
        })
    },[])

    function renderTableData() {
        return(
            categories.map(category => {
                const {categoryName, categoryID} = category;
                return(
                    <tr key={categoryID}>
                        <td>{categoryName}</td>
                        <td><a href={`Category_Information/${categoryID}`}><button class="btn btn-primary btn-success" id='menu_button'>Editar</button></a></td>
                        <td><button class="btn btn-primary btn-danger" id='menu_button' onClick={(e) => setUpdateDeleteModalOpen(true)}>Borrar</button></td>
                        {updateDeleteModalOpen && <UpdateDeleteModal type="DELETE" setOpenModal={setUpdateDeleteModalOpen} navigate={useNavigate} route='/Categories_Directory' information={category} use="CATEGORY"/>}
                    </tr>
                )
            })
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
            <div className='Active_Directory' id="office_table_padding">
                    <h1 id='title'>Directorio de Categorías Activas</h1>
                    <table id='menu_information' align='center' class='table'>
                        <tbody>
                            {renderTableData()}
                        </tbody>
                    </table>
                    <a href="/Create_Category">
                        <button class='btn btn-primary btn-success' id='menu_button'>
                            Añadir Categoria
                        </button>
                    </a>
                </div></>
        )
    }

    return(
        render()
    )
}
export default Categories_Directory;