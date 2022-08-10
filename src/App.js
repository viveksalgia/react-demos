import './App.css';
import Movies from "./components/movieList";
import { getMovies } from "./services/fakeMovieService";
import { getGenres } from "./services/fakeGenreService";
import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Customers from "./components/customer";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from './components/navbar';
import MovieForm from './components/movieForm';

class App extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    sortColumn: {path: "", order: ""},
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
    return (
            <React.Fragment>
              <NavBar />
              <main className="container">
                <Routes>
                  <Route path="/movies/:id" element={<MovieForm />}></Route>
                  <Route path="/movies" element={<Movies stateObj={this.state} 
                                                              onDelete={this.handleDelete}  
                                                              onClick={this.handleLiked}
                                                              onPageChange={this.handlePageChange}
                                                              onListSelect={this.handleListSelect}
                                                              onSort={this.handleSort}/>}></Route>
                  <Route path="/customers" element={<Customers />}></Route>
                  <Route path="/rentals" element={<Rentals />}></Route>
                  <Route path="/not-found" element={<NotFound />}></Route>
                  <Route path="/" element={<Navigate to="/movies"/>}></Route>
                  <Route path="*" element={<Navigate to="/not-found"/>}></Route>
                </Routes>
              </main>
            </React.Fragment>);
  }
}
 
export default App;