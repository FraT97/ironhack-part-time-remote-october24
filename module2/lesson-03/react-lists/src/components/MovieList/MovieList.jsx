import { useState } from 'react';
 import MovieCard from '../MovieCard/MovieCard';
// import the array of movie objects
import moviesData from '../../movies-data.json';

function MovieList(props) {
    const [movies, setMovies] = useState(moviesData);

    const updateMovies = (movieId) => {
        // remove the movie from the list
        // 1. find the movie and remove it
            // .find()
            // movieId
            // const list = [...movies]
            // const foundMovieIndex = movies.findIndex(movie => movie._id === movieId)
            // list.splice(foundMovieIndex, 1)
            const filteredMovies = movies.filter(movie => {
                return movie._id !== movieId;
              });
        // 2. update the movies state variable
            setMovies(filteredMovies)
    }
   
    return (
      <div>
        <h2>Movie List</h2>

        {/* {movies.map(singleMovie => {
            return ( <MovieCard key={singleMovie._id} movie={singleMovie} updateMovies={updateMovies}  />);
      })} */}

      {props.children}
      </div>
    );
  }
   
  export default MovieList;