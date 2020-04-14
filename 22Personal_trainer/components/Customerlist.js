import React, { useState, useEffect } from 'react';
import MaterialTable from "material-table";

import Search from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import Remove from '@material-ui/icons/Remove';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import ArrowDownward from "@material-ui/icons/ArrowDownward";


export default function Customerlist() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getCustomers();
    }, [])

    const getCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
        .catch(err => console.error(err))
    }

    const columns = [
        {
            title: 'Firstname',
            field: 'firstname'
        },
        {
            title: 'Lastname',
            field: 'lastname'
        },
        {
            title: 'Email',
            field: 'email'
        },
        {
            title: 'Phone',
            field: 'phone'
        },
        {
            title: 'Address',
            field: 'streetaddress'
        },
        {
            title: 'City',
            field: 'city'
        }
    ]

    return(
        <div>
            <MaterialTable title="Customers"
            data={customers}
            columns={columns}
            icons={{ 
                Search: Search,
                DetailPanel: ChevronRight,
                ResetSearch: CloseIcon,
                FirstPage: FirstPage,
                LastPage: LastPage,
                NextPage: ChevronRight,
                PreviousPage: ChevronLeft,
                ThirdStateCheck: Remove,
                SortArrow: ArrowDownward,
              }}
            
            />
        </div>
    )
}