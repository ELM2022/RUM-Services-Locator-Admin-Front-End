import '../Table_Format.css'
import React, { Component } from 'react'

class Administrator_History extends Component {
    constructor(props) {
        super(props)
        this.state = {
            administrator_history: [
                {editor: 'Magaly Mercado', updated_record: 'Madeline', last_name: 'Rodriguez', email: 'madelinej.rodriguez@upr.edu', date: '02/15/2022', justification: 'Fixed name.'},
                {editor: 'Magaly Mercado', updated_record: 'Nelson', last_name: 'Pagan', email: 'nelson.pagan2@upr.edu', date: '03/15/2022', justification: 'Deleted Account, no longer works here.'}
            ]
        }
    }

    renderTableData() {
        return this.state.administrator_history.map((administrator_history, index) => {
            const {editor, updated_record, last_name, email, date, justification} = administrator_history
            return (
                <tr key={index}>
                    <td>{editor}</td>
                    <td>{updated_record}</td>
                    <td>{last_name}</td>
                    <td>{email}</td>
                    <td>{date}</td>
                    <td>{justification}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.administrator_history[0])
        return header.map((key,index) => {
            if (key === 'updated_record'){
                return <th key={index}>UPDATED RECORD</th>
            }
            else if (key === 'last_name'){
                return <th key={index}>LAST NAME</th>
            }
            else {
                return <th key={index}>{key.replace(/_/g, " ").toUpperCase()}</th>
            }
        })
    }

    render() {
        return(
            <div>
                <h1 id='title'>
                    Administrator
                </h1>
                <div id="office_table_padding">
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