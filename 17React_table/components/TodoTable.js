import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default function TodoTable(props) {
    const columns = [
        {
          Header: 'Date',
          accessor: 'date'
        },
        {
          Header: 'Description',
          accessor: 'desc'
        },
        {
          Cell: ({index}) => <button id={index} onClick={props.deleteTodos}>Delete</button>,
          filterable: false,
          sortable: false,
          width: 100,
        }
      ]
    
      return (
        <div>
          <ReactTable filterable={true} data={props.todos} columns={columns} />
        </div>
 );
}