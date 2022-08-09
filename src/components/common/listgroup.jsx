import React from 'react';

const ListGroup = (props) => {

    const {list, keyField, titleField, onListSelect, selectedItem} = props;

    return ( 
            <ul className="list-group">
                {list.map(list => (            
                                    <li key={list[keyField]} 
                                        className={list === selectedItem ? "list-group-item active" : "list-group-item"}
                                        onClick={() => onListSelect(list)}>
                                            {list[titleField]}
                                    </li>
                                  )
                        )
                }
            </ul>  
            );
};

ListGroup.defaultProps = {
    titleField: "name",
    keyField: "_id"
}
 
export default ListGroup;

