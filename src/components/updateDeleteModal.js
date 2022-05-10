import React, {useState} from 'react';
import './Modal.css'
import {officeUpdateHandler, officeDeleteHandler, officeCreateHandler} from '../handlers/officeHandler';
import { addOfficeUpdateHandler } from '../handlers/officeHistoryHandler'
import {administratorUpdateHandler, administratorDeleteHandler} from '../handlers/administratorHandler'
import {addAdministratorUpdateHandler} from '../handlers/administratorHistoryHandler'


function UpdateDeleteModal({type, setOpenModal, navigation, routeid, route, information, adminJustification, use}) {

    const [modalUse, setModalUse] = useState(type);
    const [office, setOffice] = useState(information);
    const [administrator, setAdministrator] = useState(information);

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
        officeUpdateHandler(office).then((res) => {
            if (res.status === 200) {
                const timeElapsed = Date.now();
                const today = new Date(timeElapsed).toISOString();
                const hour = new Date(timeElapsed).toString();
                const datetime = today.slice(0,10) + " " +hour.slice(16,24);
                const office_update = {
                    office_id: office.office_id,
                    admin_id: 1,
                    update_datetime: datetime,
                    update_justification: adminJustification
                }
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
        officeCreateHandler(office).then((res) => {
            if (res.status === 200) {
                alert("Entry has been created successfully.")
                //navigate(`/Active_Directory`, { replace: true });
                // history.push('/Active_Directory');
            }
            else {
                alert(`Entry was not created. Due to the following error: ${res.error}`)

                
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
                <button onClick={() => setOpenModal(false)}>
                    No
                </button>
            </div>
        </div>
    )
}

export default UpdateDeleteModal;