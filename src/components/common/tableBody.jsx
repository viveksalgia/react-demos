import React, { Component } from 'react';
import _ from "lodash"

class TableBody extends Component {

    renderCell = (item, column) => {
        if (column.content) return column.content(item);
        return _.get(item, column.path);
    }
    
    render() {
        
        const {data, columns, id} = this.props;
                
        return (
                <tbody>
                    {data.map(item => 
                                    <tr key={item[id]}>
                                        {columns.map(column => <td key={item[id] + (column.path||column.key)} scope="col">{this.renderCell(item, column)}</td>)}
                                    </tr>
                    )}
                </tbody>
            );
    }
}
 
export default TableBody;