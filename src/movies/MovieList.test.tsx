import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MovieList, filterMoviesBySearch, sortMovies } from './MovieList';

let container:any;


it('renders the movie list after fetching data', async() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    const fakeMovieList = [{
        "title": "180",
        "release_year": "2011",
        "locations": "555 Market St.",
        "actor_1": "Siddarth",
        "actor_2": "Nithya Menon",
        "fun_facts": "Random"
    }]
    
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(fakeMovieList)
        })
    );

    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
        render(<MovieList search='' order='asc'/>, container);
    });

    const movieElem = container.getElementsByClassName("page__results");
    expect(movieElem[0].textContent).toBe('1802011Actors:SiddarthNithya MenonLocations:555 Market St.Random');
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

const moviesList:any[] = [{
    "title": "180",
    "release_year": "2011"
  },
  {
    "title": "24 Hours on Craigslist",
    "release_year": "2005"
  },
  {
    "title": "40 Days and 40 Nights",
    "release_year": "2002"
  }
]

describe('FilterMoviesBySearch works', () => {
    test('if filterMoviesBySearch returns the correct match based on user input', () => {
        expect(filterMoviesBySearch(moviesList, '1')).toEqual([{
            "title": "180",
            "release_year": "2011"
        }])
    })
    test('if filterMoviesBySearch returns the entire array if no user input', () =>{
        expect(filterMoviesBySearch(moviesList, '')).toEqual(moviesList);
    })
    test('if filterMoviesBySearch returns an empty array if no inputs match', () => {
        expect(filterMoviesBySearch(moviesList, 'zzz')).toEqual([]);
    })
})
describe('sortMovies works', () => {
    test('if sortMovies sorts movies in ascending order by release year', () =>{
        expect(sortMovies(moviesList, 'asc')).toEqual(moviesList);
    })
    test('if sortMovies sorts movies in descending order by release year', () => {
        expect(sortMovies(moviesList, 'desc')).toEqual(moviesList.reverse())
    })
})