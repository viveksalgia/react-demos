import './App.css';
import Movies from "./components/movieList";
import { getMovies } from "./services/fakeMovieService";
import { getGenres } from "./services/fakeGenreService";
import React, { Component } from "react";

class App extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    sortColumn: {path: "", order: ""}
  };

  componentDidMount(){
    const genres = [{_id: "", name: 'All Genres'}, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres});
  }

  handleDelete = (movie) => {
      const movies = this.state.movies.filter(m => m._id !== movie._id);
      this.setState({movies});
  }

  handleLiked = (movie) => {
    const movies = [...this.state.movies];  
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({movies});
  }

  handlePageChange = (page) => {
    this.setState({currentPage: page});
  }

  handleListSelect = (genre) => {
    this.setState({selectedGenre: genre, currentPage: 1});
  }

  handleSort = (path, sortOrder) =>{
    this.setState({sortColumn: {path: path, order: sortOrder}});
  }
  
  render() { 
    return (<main className="container">
              <Movies stateObj={this.state} 
                      onDelete={this.handleDelete}  
                      onClick={this.handleLiked}
                      onPageChange={this.handlePageChange}
                      onListSelect={this.handleListSelect}
                      onSort={this.handleSort}/>
            </main>);
  }
}
 
export default App;