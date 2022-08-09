import React from 'react';
import TableBody from './tableBody';
import TableHeaders from './tableHeaders';

const Table = (props) => {

    const{columns, sortColumn, onSort, onClick, onDelete, data} = props;

    return ( <table className="table">
                <TableHeaders columns={columns} sortColumn={sortColumn} onSort={onSort}/>
                <TableBody id="_id" data={data} columns={columns} onClick={onClick} onDelete={onDelete} />
            </table>  
        );
}
 
export default Table;