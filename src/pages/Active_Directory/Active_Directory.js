import React, { Component } from 'react';
import './Active_Directory.css'
import '../Menu_Format.css'
import { allOfficesHandler } from '../../handlers/officeHandler'
import Navbar from "../../components/Navbar";
import Home from "../../Home";

class Active_Directory extends Component{

    constructor(props){
        super(props)
        this.state = {
            offices: []
        }
    }


    componentDidMount() {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed).toISOString();
        const hour = new Date(timeElapsed).toString();
        const datetime = today.slice(0,10) + " " +hour.slice(16,24);
        allOfficesHandler().then(res => {
            if (res.status === 200) {
                this.setState({offices: res.data.data.offices});
            }
        })
    }

    renderTableData(){
        return this.state.offices.map((offices, index) => {
            const {office_name, office_id} = offices
            return(
                <tr key={index}>
                    <td>{office_name}</td>
                    <td><a href={`/Office_Information/${office_id}`}><button class="btn btn-primary btn-success" id='menu_button'>Ver Mas</button></a></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <><div>
                <Home />
            </div>
            <div>
                <Navbar />
            </div>
            <div className='Active_Directory' id="office_table_padding">
                    <h1 id='title'>Directorio de Servicios Activos</h1>
                    <table id='menu_information' align='center' class='table'>
                        <tbody>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                    <a href="/Create_Office">
                        <button class='btn btn-primary btn-success' id='menu_button'>
                            Añadir Servicio
                        </button>
                    </a>
                </div></>
        );
    }
}

export default Active_Directory;


