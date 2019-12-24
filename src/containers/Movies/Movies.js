import React, {Component} from "react";
import axios from '../../axios-api';
import Movie from '../../components/Movie/Movie';
import AddMovie from '../../components/AddMovie/AddMovie';
import Spinner from '../../components/Spinner/Spinner';

class Movies extends Component {

  state = {
    movies: [],
    newMovie: {name: ''},
    loading: false
  };

  async componentDidMount() {
    await this.getMovie();
  }

  async getMovie() {
    this.setState({loading: true});
    const response = await axios('/movies.json');
    if (response.status === 200) {
      const movies = response.data;
      this.setState({movies, loading: false});
    }
  }

  removeMovie = async (event, id) => {
    event.preventDefault();
    this.setState({loading: true});
    await axios.delete('/movies/' + id + '.json');
    const movies = {...this.state.movies};
    delete movies[id];
    this.setState({movies, loading: false});
  };

  valueChange = event => this.setState({newMovie: {name: event.target.value}});

  addMovie = async event => {
    event.preventDefault();

    const movie = {
      name: this.state.newMovie.name
    };
    
    await axios.post('/movies.json', movie);
    this.getMovie();
    this.setState({newMovie: {name: ''}});
  };

  changeMovie = async (event, id) => {
    const movies = {...this.state.movies};
    movies[id] = {name: event.target.value};

    await axios.put('/movies/' + id + '.json', movies[id]);
    this.setState({movies});
  };

  render() {
    const state = this.state.movies;
    let movies = null;
    if (state) {
      movies = (
        Object.keys(state).map(id => (
          <div className='Movie' key={id}>
            <Movie
              key={id}
              id={id}
              name={state[id].name}
              change={this.changeMovie}
              remove={this.removeMovie}
            />
          </div>
        ))
      ) 
    } 
    if(!state) {
      movies = <div>There are no movies in the database, add a movies!</div>;
    }
    if(this.state.loading) {
      movies = <Spinner />;
    }

    return (
      <div>
        <AddMovie 
          add={this.valueChange} 
          submit={this.addMovie} 
          name={this.state.newMovie.name}
        />
        <p className='MoviesTitle mt-4'>To watch list: </p>
        {movies}
      </div>
    )
  }
};

export default Movies;