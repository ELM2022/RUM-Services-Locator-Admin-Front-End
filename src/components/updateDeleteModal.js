import React, {useState} from 'react';
import './Modal.css'

function UpdateDeleteModal({type, setOpenModal, navigation, routeid, route}) {

    const [modalUse, setModalUse] = useState(type);

    const message = () => {
        if(modalUse === "DELETE"){
            return(<h3>¿Seguro que desea borrar esta información?</h3>)
        }
        else if(modalUse === "EDIT"){
            return (<h3>¿Seguro que desea guardar estos cambios?</h3>)
        }
        else{
            return null
        }
    }

    const yesButton = () => {
        if(modalUse === "EDIT"){
            return(<button onClick={() => navigation(`${route}${routeid}`, { replace: true })}>
                    Si
                </button>)     
        }
        else if(modalUse === "DELETE"){
            return(<button onClick={() => navigation(`${route}`, { replace: true })}>
                    Si
                </button>)
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