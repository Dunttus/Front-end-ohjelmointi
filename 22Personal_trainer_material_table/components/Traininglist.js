import React, { useState, useEffect } from 'react';
import MaterialTable from "material-table";
import Moment from 'react-moment';

import Search from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import Remove from '@material-ui/icons/Remove';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Delete from "@material-ui/icons/Delete";


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
            title: 'Activity',
            field: 'activity'
        },
        {
            title: 'Date',
            field: 'date'
        },
        {
            title: 'Min',
            field: 'duration'
        }
    ]

    return(
        <div>
            <MaterialTable title="Trainings"
            data={trainings}
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
                Delete: Delete,
              }}
            />
        </div>
    )
}