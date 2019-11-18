import React from 'react';
import movieDataService from '../services/movieDataService';
import Types from '../types';
import Movie from './Movie';

type MovieProps = {
    order: string,
    search: string
}

/**
 * MovieList Functional Component that fetches movie list from external API
 * @property order   Order to display movie list - ascending or descending
 * @property search  Search term to filter movie list
*/

const MovieList = ({order, search}: MovieProps) => {
    const [movieList, setMovieList] = React.useState<Types.MovieInterface[]>([]);

    React.useEffect(() => {
        movieDataService.get().then(dataOrError => {
          const isData = Array.isArray(dataOrError);
          if (isData) {
            setMovieList(dataOrError);
          }
        });
    }, []);

    let filteredMovies = sortMovies(filterMoviesBySearch(movieList, search), order);

    return (
        <div className="page">
          <div className="page__results results">
            {filteredMovies.map(movie => {
                return (
                    <div key={movie.title} className="movieElement">
                        <Movie 
                            title = {movie.title}
                            release_year = {movie.release_year}
                            actors = {movie.actors}
                            locations = {movie.locations}
                            fun_facts = {movie.fun_facts}
                        />
                    </div>
                );
                })}
          </div>
        </div>
    );
};

/**
 * Method to allow user to filter movies based on a search term
 * @param {Array} movieList    List of movies to filter
 * @param {string} searchTerm  Search term input by user
 * 
 * @return {Array} List of filtered movies
*/
const filterMoviesBySearch = (movieList: Array<any>, searchTerm: string) => {
    return movieList.filter((movie) => {
        return movie.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    })
}

/**
 * Method to allow user to sort movies by release year
 * @param {Array} movieList    List of movies to filter
 * @param {string} order       Ascending or descending order
 * 
 * @return {Array} List of movies sorted by release year
*/
const sortMovies = (movieList: Array<any>, order: string) => {
    return movieList.sort((a, b) => {
        const isReversed = (order==='asc') ? 1 : -1;
        return isReversed * a.release_year.localeCompare(b.release_year);
    });
}

export { MovieList, filterMoviesBySearch, sortMovies} ;
