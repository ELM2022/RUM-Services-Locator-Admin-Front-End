import React, {useState} from 'react';
import './Modal.css'
import {officeUpdateHandler, officeDeleteHandler, officeCreateHandler} from '../handlers/officeHandler';
import { addOfficeUpdateHandler } from '../handlers/officeHistoryHandler'
import {administratorUpdateHandler, administratorDeleteHandler} from '../handlers/administratorHandler'
import {addAdministratorUpdateHandler} from '../handlers/administratorHistoryHandler'
import {addCategoryHandler, addCategoryMembershipHandler, deleteOfficeCategoriesHandler } 
from '../handlers/categoriesHandler'
import { createPendingAdministrator } from '../handlers/pendingAdministratorHandler'


function UpdateDeleteModal({type, setOpenModal, navigation, routeid, route, information, adminJustification, use, selectedCategories, newCategories}) {

    const [modalUse, setModalUse] = useState(type);
    const [office, setOffice] = useState(information);
    const [selectedOfficeCategories, setSelectedOfficeCategories] = useState(selectedCategories);
    const [newOfficeCategories, setNewOfficeCategories] = useState(newCategories);
    const [administrator, setAdministrator] = useState(information);
    const [pendingAdministrator, setPendingAdministrator] = useState(information);

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
                    admin_id: 1,
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
                    //console.log(response)
                });
            }
            else {
                alert(`Update did not occur due to ${res.data.errors}. Fix this and try again.`)
            }
        });
    }

    const handleDelete = () => {
        officeDeleteHandler(office.office_id).then((res) => {
                    if (res.status === 200) {
                        //alert("Office deactivated successfully.");
                        alert("Entry has been deleted successfully.");
                        //navigate('/Active_Directory', { replace: true });
                        // window.location.reload(false);
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
                        //navigate(`/Active_Directory`, { replace: true });
                    }
                    else {
                        console.log(res);
                    }
                });
            }
            else {
                console.log(res);
            }
        });
    }

    const handleAdminUpdate = () => {
        administratorUpdateHandler(administrator).then((res) => {
            if (res.status === 200) {
                const admin_update = {
                    editor_admin_id: 1,
                    updated_admin_id: administrator.admin_id,
                    update_datetime: getDateTime(),
                    update_justification: adminJustification
                }
                addAdministratorUpdateHandler(admin_update).then((res) => {
                    if(res.status === 201) {
            
                    }
                    else{
                        alert(`Update did not occurr due to ${res.data.errors}. Fix this and try again.`)
                    }
                })
                //setUpdateDeleteModalOpen(true)
                //navigate(`/Admin_Information/${adminid}`, { replace: true });
            }
        });
    }

    const handleAdminCreate = () => {

        try {
            createPendingAdministrator(pendingAdministrator).then((res) => {
                if (res.status === 201) {
                    alert("La cuenta del nuevo administrador ha quedado pendiente.\nLa misma se oficializará cuando se complete el proceso de registro.");
                    //navigate('/Active_Administrator', { replace: true });
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
        //alert("This administrator will be deactivated.");
        administratorDeleteHandler(administrator.admin_id).then((res) => {
            if (res.status === 200) {
                //alert("Administrator deactivated successfully.");
                //alertnavigate('/Active_Administrator', { replace: true });
                //setUpdateDeleteModalOpen(true);
            }
        });
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