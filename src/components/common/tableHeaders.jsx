import { toBeDisabled } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';

//columns: array
//sortColumn: Obj
//onSort: function

class TableHeaders extends Component {
    
    raiseSort = (path) => {
        let sortOrder="asc";

        if (this.props.sortColumn.path === path){
            if (this.props.sortColumn.order === sortOrder){
                sortOrder = "desc";
            }
        }

        this.props.onSort(path, sortOrder);
    }

    renderSortIcon = (column) => {
        const { sortColumn } = this.props;
        if (this.props.sortColumn.path !== column.path) return null;
        if (this.props.sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>
        return <i className="fa fa-sort-desc"></i>
    }
    
    render() { 
        
        const {label} = this.props;

        return (<thead>
                <tr>
                    {this.props.columns.map(column => <th className="clickable" key={column.path || column.key} scope="col" onClick={() => this.raiseSort(column.path)}>{column.label} {this.renderSortIcon(column)}</th>)}
                </tr> 
                </thead>);
    }
}
 
export default TableHeaders;