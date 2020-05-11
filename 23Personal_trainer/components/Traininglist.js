import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import Moment from 'react-moment';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Snackbar from '@material-ui/core/Snackbar';
import Addtraining from './Addtraining';


export default function Traininglist() {
    const [trainings, setTrainings] = useState([]);
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('');

    useEffect(() => {
        getTrainings();
    }, [])

    const getTrainings = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => setTrainings(data.content))
        .catch(err => console.error(err))
    }

    const deleteTraining = (link) => {
        if (window.confirm('Are you sure?')) {
            fetch(link, {method: 'DELETE'})
            .then(_ => getTrainings())
            .then(_ => {
                setMsg('Training Deleted');
                setOpen(true);
            })
            .catch(err => console.error(err))
        }
    }


    const handleClose = () => {
        setOpen(false);
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
            accessor: "links[0].href"
        },
        {
            filterable: false,
            sortable: false,
            width: 100,
            Cell: row => (<Button startIcon={<DeleteIcon />} color="secondary" onClick={() => deleteTraining(row.original.links[0].href)}>Delete</Button>)
        }
        
    ]

    return(
        <div>
            <ReactTable defaultPageSize={10}  filterable={true} data={trainings} columns={columns} />
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message={msg}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'                
                }}
            />
        </div>
    )
}