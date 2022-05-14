import React, {useState} from 'react';
import './updateDeleteModal.css'
import {officeUpdateHandler, officeDeleteHandler, officeCreateHandler, deleteAllOfficeCategoriesByCategoryID} from '../handlers/officeHandler';
import { addOfficeUpdateHandler } from '../handlers/officeHistoryHandler'
import {administratorUpdateHandler, administratorDeleteHandler} from '../handlers/administratorHandler'
import {addAdministratorUpdateHandler} from '../handlers/administratorHistoryHandler'
import {addCategoryHandler, addCategoryMembershipHandler, deleteCategoryHandler, editCategoryHandler, deleteOfficeCategoriesHandler } 
from '../handlers/categoriesHandler'
import { createPendingAdministrator } from '../handlers/pendingAdministratorHandler'


function UpdateDeleteModal({type, setOpenModal, navigation, routeid, route, information, adminJustification, use, selectedCategories, newCategories, activeAdminId}) {

    const [modalUse, setModalUse] = useState(type);
    const [office, setOffice] = useState(information);
    const [selectedOfficeCategories, setSelectedOfficeCategories] = useState(selectedCategories);
    const [newOfficeCategories, setNewOfficeCategories] = useState(newCategories);
    const [administrator, setAdministrator] = useState(information);
    const [pendingAdministrator, setPendingAdministrator] = useState(information);
    const [administratorId, setAdministratorId] = useState(activeAdminId);
    const [category, setCategory] = useState(information)

    const message = () => {
        if(modalUse === "DELETE"){
            return(<h3>¿Seguro que desea borrar esta información?</h3>)
        }
        else if(modalUse === "EDIT"){
            return (<h3>¿Seguro que desea guardar estos cambios?</h3>)
        }
        else if(modalUse === "CREATE"){
            return(<h3>¿Seguro que desea generar una entrada con esta información?</h3>)
        }
        else{
            return null
        }
    }

    const getDateTime = () => {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed).toISOString();
        const hour = new Date(timeElapsed).toString();
        const datetime = today.slice(0,10) + " " + hour.slice(16,24);

        return datetime;
    }

    const handleUpdate = () => {

        if (newOfficeCategories.length > 0) {
            newOfficeCategories.map((category_name) => {
                const category = {category_name};
                addCategoryHandler(category).then((res) => {
                    if (res.status === 201) {
                        selectedOfficeCategories.map((category) => {
                            console.log(category_name);
                            console.log(category.label);
                            if (category_name === category.label) {
                                category.value = res.data.result.insertId;
                            }
                        });
                    }
                    else {
                        console.log(res);
                    }
                });
            });
        }

        officeUpdateHandler(office).then((res) => {
            if (res.status === 200) {
                const office_update = {
                    office_id: office.office_id,
                    admin_id: administratorId,
                    update_datetime: getDateTime(),
                    update_justification: adminJustification
                }

                const selected_ids = [];
                    selectedOfficeCategories.map((category) => {
                        if (typeof category.value !== 'string') {
                            selected_ids.push(category.value);
                        }
                    });

                    const membership = {
                        office_id: office.office_id,
                        categories: selected_ids
                    }

                    deleteOfficeCategoriesHandler(office.office_id).then((res) => {
                        if (res.status === 200) {
                            addCategoryMembershipHandler(membership).then((response) => {

                            });
                        }
                    });

                addOfficeUpdateHandler(office_update).then((response) => {
                    if(response.status === 200){
                        alert("La entrada de oficina ha sido actualizada satisfactoriamente.")
                    }
                });
            }
            else {
                alert(`La entrada de oficina no ha podido ser actualizada.`)
            }
        });
    }

    const handleDelete = () => {
        officeDeleteHandler(office.office_id).then((res) => {
                    if (res.status === 200) {
                        alert("La entrada de oficina ha sido desactivada satisfactoriamente.");
                    }
                });
    }

    const handleCreate = () => {
        if (newCategories.length > 0) {
            newCategories.map((category_name) => {
                const category = {category_name};
                addCategoryHandler(category).then((res) => {
                    if (res.status === 201) {
                        selectedCategories.push(res.data.result.insertId);
                    }
                    else {
                        console.log(res);
                    }
                });
            });
        }
        officeCreateHandler(office).then((res) => {
            if (res.status === 201) {
                const new_office_id = res.data.result.insertId;
                const membership = {
                    office_id: new_office_id,
                    categories: selectedOfficeCategories
                }

                addCategoryMembershipHandler(membership).then((response) => {
                    if (response.status === 201) {
                        alert("La oficina ha sido creada satisfactoriamente.");
                    }
                    else {
                        console.log(res);
                    }
                });
            }
            else if(res.status === 422) {
                alert("No se puede generar un servicio que contenga uno o mas de las siguientes entradas en blanco:\n\n Nombre de Oficina\n Descripción de Oficina\n Latitud de Oficina\n Longitud de Oficina\n Latitud de Entrada de Oficina\n Longitud de Entrada de Oficina\n Horario de Oficina\n Codigo de Salón de Oficina\n\n Favor de intentar de nuevo.")
            }
            else{
                console.log(res)
            }
        });
    }

    const handleAdminUpdate = () => {
        administratorUpdateHandler(administrator).then((res) => {
            if (res.status === 200) {
                const admin_update = {
                    editor_admin_id: administratorId,
                    updated_admin_id: administrator.admin_id,
                    update_datetime: getDateTime(),
                    update_justification: adminJustification
                }
                addAdministratorUpdateHandler(admin_update).then((res) => {
                    if(res.status === 201) {
                        alert("La entrada de administrador ha sido actualizada satisfactoriamente.")
            
                    }
                    else{
                        alert(`La entrada de administrador no ha sido actualizada. Favor de intentarlo nuevamente.`)
                    }
                })
            }
        });
    }

    const handleAdminCreate = () => {

        try {
            createPendingAdministrator(pendingAdministrator).then((res) => {
                if (res.status === 201) {
                    alert("La cuenta del nuevo administrador ha quedado pendiente.\nLa misma se oficializará cuando se complete el proceso de registro.");
                }
                if (res.status === 400) {
                    alert("La cuenta de administrador ya está pendiente o ha sido registrada anteriormente.");
                    window.location.reload();
                }
                else {
                    console.log(res);
                }
            });
        } catch (error) {
            console.log(error);
        }

    }

    const handleAdminDelete = () => {
        administratorDeleteHandler(administrator.admin_id).then((res) => {
            if (res.status === 200) {
                alert("El administrador ha sido desactivado satisfactoriamente.");
            }
        });
    }

    const handleCategoryCreate = () => {
        const cat = {
            category_name: category
        }
        addCategoryHandler(cat).then((res) => {
            if (res.status === 201) {
                alert("Categoria creada satisfactoriamente!")
            }
            else{
                alert("Ha ocurrido un error durante la generación de la categoria")
            }
        })
    }

    const handleCategoryDelete = () => {
        console.log(category)
        deleteAllOfficeCategoriesByCategoryID(category.categoryID).then((res) => {
            if(res.status === 200){
                deleteCategoryHandler(category.categoryID).then((res => {
                    if(res.status === 200){
                        alert("La categoria ha sido borrada exitosamente")
                    }
                }))
            }
            else{
                alert("Ha ocurrido un error al momento de borrar la categoria.\n La misma no ha sido borrada.")
            }
        })

    }

    const handleCategoryUpdate = () => {
        editCategoryHandler(category).then((res) => {
            if(res.status === 200){
                alert("Categoria editada satisfactoriamente.")
            }
            else{
                alert("Ha ocurrido un error al editar la categoria")
            }
        })
    }

    const yesButton = () => {
        if(use === "OFFICE"){
            if(modalUse === "EDIT"){
                return(<button onClick={() => {
                    handleUpdate()
                    navigation(`${route}${routeid}`, { replace: true })}}>
                        Si
                    </button>)     
            }
            else if(modalUse === "DELETE"){
                return(<button onClick={() => {
                    handleDelete();
                    navigation(`${route}`, { replace: true })}}>
                        Si
                    </button>)
            }
            else if(modalUse === "CREATE") {
                return(<button onClick={() => {
                    handleCreate();
                    navigation(`${route}`, {replace: true})
                }}>
                    Si
                </button>)
            }
        }
        else if(use === "ADMIN"){
            if(modalUse === "EDIT"){
                return(<button onClick={() => {
                    handleAdminUpdate()
                    navigation(`${route}${routeid}`, { replace: true })}}>
                        Si
                    </button>)     
            }
            else if(modalUse === "DELETE"){
                return(<button onClick={() => {
                    handleAdminDelete();
                    navigation(`${route}`, { replace: true })}}>
                        Si
                    </button>)
            }
            else if(modalUse === "CREATE") {
                return(<button onClick={() => {
                    handleAdminCreate();
                    navigation(`${route}`, {replace: true})}}>
                    Si
                </button>)
            }
        }
        else if(use === "CATEGORY"){
            if(modalUse === "EDIT"){
                return(<button onClick={() => {
                    handleCategoryUpdate()
                    navigation(`/Categories_Directory`, { replace: true })
                    }}>
                        Si
                    </button>)     
            }
            else if(modalUse === "DELETE"){
                return(<button onClick={() => {
                    handleCategoryDelete();
                    setOpenModal(false);
                    }}>
                        Si
                    </button>)
            }
            else if(modalUse === "CREATE") {
                return(<button onClick={() => {
                    handleCategoryCreate();
                    navigation(`${route}`, {replace: true})
                }}>
                    Si
                </button>)
            }
        }
        else{
            return null;
        }
    }


    return(
        <div className="modalContainer">
            <div className="title">
                <h1>Alerta</h1>
            </div>
            <div className="body">
                {message()}
            </div>
            <div className="footer">
                {yesButton()}
                <button id='noButton' onClick={() => setOpenModal(false)}>
                    No
                </button>
            </div>
        </div>
    )
}

export default UpdateDeleteModal;