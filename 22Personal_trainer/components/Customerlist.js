import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Snackbar from '@material-ui/core/Snackbar';
import Addcustomer from './Addcustomer';
import Editcustomer from './Editcustomer';
import Addtraining from './Addtraining';


export default function Customerlist() {
    const [customers, setCustomers] = useState([]);
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('');
    
    useEffect(() => {
        getCustomers();
    }, [])

    const getCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
        .catch(err => console.error(err))
    }

    const deleteCustomer = (link) => {
        if (window.confirm('Are you sure?')) {
            fetch(link, {method: 'DELETE'})
            .then(_ => getCustomers())
            .then(_ => {
                setMsg('Customer Deleted');
                setOpen(true);
            })
            .catch(err => console.error(err))
        }
    }

    const addCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers',
            {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(customer)
            }
        )
        .then(_ => getCustomers())
        .then(_ => {
            setMsg('New customer added');
            setOpen(true);
        })
        .catch(err => console.error(err))
    }

    const newTraining = (training) => {
        fetch(Addtraining.getUserid,
            {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(training)
            }
        )
        .then(_ => Addtraining.getTraining())
        .then(_ => {
            setMsg('New training added');
            setOpen(true);
        })
        .catch(err => console.error(err))
    }

    const updateCustomer = (link, customer) => {
        fetch(link, {
          method: 'PUT',
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify(customer)
        })
        .then(_ => getCustomers())
        .then(_ => {
          setMsg('Customer updated');
          setOpen(true);
        })
        .catch(err => console.error(err))  
    }

    const handleClose = () => {
        setOpen(false);
    }



    const columns = [
        {
            accessor: 'links[2].href',
            filterable: false,
            sortable: false,
            width: 165,
            Cell: ({value}) => (<Addtraining newTraining={newTraining} />)
        },
        {
            Header: 'Firstname',
            accessor: 'firstname'
        },
        {
            Header: 'Lastname',
            accessor: 'lastname'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Phone',
            accessor: 'phone'
        },
        {
            Header: 'Address',
            accessor: 'streetaddress'
        },
        {
            Header: 'City',
            accessor: 'city'
        },
        {
            filterable: false,
            sortable: false,
            width: 100,
            Cell: row => (<Editcustomer customer={row.original} updateCustomer={updateCustomer} />)
        },
        {
            filterable: false,
            sortable: false,
            width: 100,
            Cell: row => (<Button startIcon={<DeleteIcon />} color="secondary" onClick={() => deleteCustomer(row.original.links[0].href)}>Delete</Button>)
        }
    ]

    return(
        <div>
            <Addcustomer addCustomer={addCustomer}/>
            <ReactTable defaultPageSize={10}  filterable={true} data={customers} columns={columns} />
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