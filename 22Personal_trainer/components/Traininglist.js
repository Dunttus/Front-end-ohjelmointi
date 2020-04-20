import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Snackbar from '@material-ui/core/Snackbar';
import Addcustomer from './Addcustomer';
import Editcustomer from './Editcustomer';

export default function Traininglist() {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        getTrainings();
    }, [])

    const getTrainings = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => setTrainings(data.content))
        .catch(err => console.error(err))
    }

    const columns = [
        {
            Header: "Activity",
            accessor: "activity"
        },
        {
            Header: "Date",
            accessor: "date"
        },
        {
            Header: "Min",
            accessor: "duration"
        },
        {
            Header: "Customer",
            accessor: "links[0].href.firstname"
        }
        
    ]

    return(
        <div>
            <ReactTable defaultPageSize={10}  filterable={true} data={trainings} columns={columns} />
        </div>
    )
}