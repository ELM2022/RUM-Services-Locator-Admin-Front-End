import React, {useState} from 'react';
import './Modal.css'

function ErrorHandlingModal({text, setOpenModal}) {

    const [error, setError] = useState(text);

    const message = () => {
        return (error.map(userError => {
            return(
                <h3>{Object.values(userError)}</h3>
            )
        }))
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