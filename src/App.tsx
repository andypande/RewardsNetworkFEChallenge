import React, { useState } from 'react';
import { MovieList } from './movies/MovieList';

/**
 * App Component that displays Filtering options on left side of screen and Movie list on right side
 *
 * @method changeSortOrder  Allow user to sort based on ascending or descending order by release year 
 * @method updateSearch     Allow user to search for a movie by title
 *  
*/

const App = () => {

  const [order, changeSortOrder] = useState('asc');
  const [search, updateSearch] = useState('');

    return (
      <div className="page">
        <div className="page__filters filters">
          <div className="sort-group">
                <span>Sort by Release Year</span>
                <span className="noDisplay" data-testid="sortvalue">{order}</span>
                <button 
                    className='myButton'
                    data-testid="sortAscending" 
                    onClick={() => changeSortOrder('asc')}>
                    Sort Ascending
                </button>
                <button 
                    className='myButton'
                    data-testid="sortDescending"  
                    onClick={() => changeSortOrder('desc')}>
                    Sort Descending
                </button>
                <br/>
                <span>Search for Movies</span>
                <input type="text"
                      className="searchInput"
                      data-testid="searchValue"
                      value={search} 
                      onChange={e => updateSearch(e.target.value)}
                />
            </div>
        </div>

        <div className="page__results results">
          <MovieList
           search={search}
           order={order}
          />
        </div>
      </div>
    );

};

export default App;