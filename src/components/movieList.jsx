import React, { Component } from "react";
import Pagination from "./common/pagination"
import { paginate } from "./utils/paginate";
import ListGroup from "./common/listgroup";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component{
    
    render(){

        const {length: count} = this.props.stateObj.movies;
        const {pageSize, currentPage, movies, genres, selectedGenre, sortColumn} = this.props.stateObj;
        
        const filtered = selectedGenre && selectedGenre._id ? movies.filter(m => m.genre._id === selectedGenre._id) : movies;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const moviePage = paginate(sorted, currentPage, pageSize);
        
        if (count === 0){
            return <p>There are no movies in the database.</p>;
        }
        else{
            return(
                <div className="row">
                    <div className="col-3">
                        <ListGroup list={genres} 
                                   selectedItem={selectedGenre}
                                   onListSelect={this.props.onListSelect}/>
                    </div>
                    <div className="col">
                        <p>Showing {filtered.length} movies in the database.</p>
                        <MoviesTable movies={moviePage} 
                                     onDelete={this.props.onDelete}
                                     onClick={this.props.onClick} 
                                     onSort={this.props.onSort}
                                     sortColumn={sortColumn}/>
                        <Pagination itemsCount={filtered.length}
                                    pageSize={pageSize} 
                                    onPageChange={this.props.onPageChange}
                                    currentPage={currentPage}/>
                               
                    </div>
                </div>
            );
        }
        
    }
}

export default Movies;