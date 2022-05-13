import React from "react";
import './Navbar.css';
import {Nav} from 'react-bootstrap';
import elmLogo from '../resources/elmLogo.jpeg'

export default function Navbar() {

    return(

        <div className="hamburger-container">
            <body>
                <div className="menu">
                    <a href="/Home">
                        <img src={require('../resources/elmLogo.jpeg')} alt='logo' className="Logo"/>
                    </a>
                <div className="button-list">
                    <Nav.Link className="Navbar-button" href="/Active_Directory">
                        <text>
                            Ver Directorio de Servicios Activos
                        </text>
                    </Nav.Link>
                    <div className="Navbar-padding"/>
                    <Nav.Link className="Navbar-button" href="/Active_Administrator">
                        <text>
                            Ver Administradores Activos
                        </text>
                    </Nav.Link>
                    <div className="Navbar-padding"/>
                    <Nav.Link className="Navbar-button" href="/Directory_History">
                        <text>
                            Ver Historial de Oficinas
                        </text>
                    </Nav.Link>
                    <div className="Navbar-padding"/>
                    <Nav.Link className="Navbar-button" href="/Administrator_History">
                        <text>
                            Ver Historial de Administradores
                        </text>
                    </Nav.Link>
                    <div className="Navbar-padding"/>
                        <Nav.Link className="Navbar-button" href="/Categories_Directory">
                            <text>
                                Ver Directorio de Categorias
                            </text>
                        </Nav.Link>
                </div>
                </div>
            </body>
        </div>

    );

}