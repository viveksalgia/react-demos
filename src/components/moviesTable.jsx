import React, {Component} from 'react';
import Like from "./common/like";
import Table from './common/table';


class MoviesTable extends Component {
    
    
    
    render() { 
        const {movies, onDelete, onClick, onSort, sortColumn} = this.props;

        const columns = [
            {path:"title", label:"Title"},
            {path:"genre.name", label:"Genre"}, 
            {path:"numberInStock", label:"Stock"}, 
            {path:"dailyRentalRate", label:"Rate"}, 
            {_id:"l01", key:"like", content: (movie) => {return (<Like liked={movie.liked} onClick={() => this.props.onClick(movie)}/>)}}, 
            {_id:"d01", key:"delete", content: (movie) => {return (<button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">Delete</button>)}}
        ]

        return ( 
            <Table columns={columns} 
                   sortColumn={sortColumn} 
                   onSort={onSort} 
                   onClick={onClick} 
                   onDelete={onDelete} 
                   data={movies} />
            );
    }
}
 
export default MoviesTable;