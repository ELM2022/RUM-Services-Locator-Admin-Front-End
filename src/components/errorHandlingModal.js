import e from 'cors';
import React, {useState} from 'react';
import './updateDeleteModal.css'

function ErrorHandlingModal({text, setOpenModal}) {

    const [error, setError] = useState(text);

    const message = () => {
        if(error.length == 0){
            return <h3>No tiene errores. Presione guardar nuevamente para guardar la entrada</h3>
        }
        else{
            return (error.map(userError => {
                return(
                    <div class='row'>
                        <h3>{userError}</h3>
                    </div>
                )
            }))
        }
    }

    return (
        <div className="modalContainer">
            <div className="title">
                <h1>Error</h1>
            </div>
            <div className="body">
                {message()}
            </div>
            <div className="footer">
                <button onClick={() => setOpenModal(false)}>Entendido</button>
            </div>
        </div>
    )
}

export default ErrorHandlingModal;