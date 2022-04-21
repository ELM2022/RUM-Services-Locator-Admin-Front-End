import React, { Component } from 'react';
import './Active_Directory.css'
import '../Menu_Format.css'

class Active_Directory extends Component{

        constructor(props){
            super(props)
            this.state = {
                offices: [
                        {name: 'Asistencia Economica'},
                        {name: 'Oficina de Registraduria'},
                        {name: 'Recaudaciones'}
                    ]
            }
        }

        renderTableData(){
            return this.state.offices.map((offices, index) => {
                const {id, name} = offices
                return(
                    <tr key={index}>
                        <td>{name}</td>
                        <td><a href="/Office_Information"><button class="btn btn-primary btn-success" id='menu_button'>Ver Mas</button></a></td>
                    </tr>
                )
            })
        }

        render() {
            return(
            <div className='Active_Directory' id="office_table_padding">
                <h1 id='title'>Directorio de Oficinas</h1>
                <table id='menu_information' align='center' class='table'>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
                <a href="/Create_Office">
                <button class='btn btn-primary btn-success' id='menu_button'>
                Añadir Oficina
                </button>
                </a>
            </div>
        );
    }
}

export default Active_Directory;


