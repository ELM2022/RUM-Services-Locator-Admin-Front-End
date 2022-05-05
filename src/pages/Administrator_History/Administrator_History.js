import '../Table_Format.css'
import React, { Component } from 'react'
import { getAllAdministratorUpdateHistoryHandler } from '../../handlers/administratorHistoryHandler'
import { administratorGetHandler } from '../../handlers/administratorHandler'

class Administrator_History extends Component {
    constructor(props) {
        super(props)
        this.state = {
            administrator_history: [
                // {editor: 'Magaly Mercado', updated_record: 'Madeline', last_name: 'Rodriguez', email: 'madelinej.rodriguez@upr.edu', date: '02/15/2022', justification: 'Fixed name.'},
                // {editor: 'Magaly Mercado', updated_record: 'Nelson', last_name: 'Pagan', email: 'nelson.pagan2@upr.edu', date: '03/15/2022', justification: 'Deleted Account, no longer works here.'}
            ]
        }
    }

    componentDidMount() {
        getAllAdministratorUpdateHistoryHandler().then((res) => {
            if (res.status === 200) {
                const updates = res.data.data.admin_updates;
                if (updates[0] !== undefined) {
                    this.setState({
                        administrator_history: updates
                    });
                }
            }
            // console.log(res.data.data.admin_updates);
            //in order to store in state use this.setState({administrator_history: res.data.data.admin_updates})
        })

    }

    renderTableData() {
        return this.state.administrator_history.map((administrator_history, index) => {
            administratorGetHandler(administrator_history.editor_admin_id).then((result) => {
                const {admin_name, admin_last_name} = result[0];
                const {updated_admin_email, updated_admin_name, updated_admin_last_name, update_datetime, update_justification} = administrator_history;
                return (
                    <tr key={index}>
                        <td>{admin_name + ' ' + admin_last_name}</td>
                        <td>{updated_admin_name}</td>
                        <td>{updated_admin_last_name}</td>
                        <td>{updated_admin_email}</td>
                        <td>{update_datetime}</td>
                        <td>{update_justification}</td>
                    </tr>
                )
            });
        })
    }

    renderTableHeader() {
        // let header = Object.keys(this.state.administrator_history[0])
        // return header.map((key,index) => {
        //     if (key === 'updated_record'){
        //         return <th key={index}>UPDATED RECORD</th>
        //     }
        //     else if (key === 'last_name'){
        //         return <th key={index}>LAST NAME</th>
        //     }
        //     else {
        //         return <th key={index}>{key.replace(/_/g, " ").toUpperCase()}</th>
        //     }
        // })
        return(
            <tr>
                <th>Editor Administrator</th>
                <th>Updated Admin Name</th>
                <th>Updated Admin Last Name</th>
                <th>Updated Admin Email</th>
                <th>Update Time</th>
                <th>Justification</th>
            </tr>
        )
    }

    render() {
        return(
            <div id="office_table_padding">
                <h1 id='title'>
                    Historial de Administradores
                </h1>
                <div>
                    <table id='table_information' align='center'>
                        <tbody>
                            <tr>{this.renderTableHeader()}</tr>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Administrator_History;