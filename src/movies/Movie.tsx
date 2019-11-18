import React from 'react';

type MovieProps = {
    title: string,
    release_year: number,
    actors?: Array<string>,
    locations?: Array<string>,
    fun_facts?: string
}

/**
 * Movie Functional Component that renders movie in a card
 * @property title         Movie title
 * @property release_year  Year of movie release
 * @property actors        Array of actors in movie
 * @property locations     Array of locations movie filmed
 * @property fun_facts     String of movie fun facts
*/

const Movie = ({title, release_year, actors, locations, fun_facts}: MovieProps) => {
    return (
        <section className="movie" key={title}>
                <h1 className="movie__title">
                  {title}
                  <span className="movie__release-year">{release_year}</span>
                </h1>
    
                {!!actors && actors.length>0 && (
                  <div className="movie__section movie__actors">
                    <span className="movie__section-title movie__actors-title">
                      Actors:
                    </span>
    
                    <ol className="movie__section-list movie__actors-list">
                      {actors.map(actor => (
                        <li
                          className="movie__section-list-item movie__actors-list-item"
                          key={actor}
                        >
                          {actor}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
    
                {!!locations && locations.length>0 && (
                  <div className="movie__section movie__locations">
                    <span className="movie__section-title movie__locations-title">
                      Locations:
                    </span>
    
                    <ul className="movie__section-list movie__locations-list">
                      {locations.map(location => (
                        <li
                          className="movie__section-list-item movie__locations-list-item"
                          key={location}
                        >
                          {location}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
    
                {!!fun_facts && fun_facts.length>0 &&  (
                  <p className="movie__fun-facts">{fun_facts}</p>
                )}
        </section>
      );
};

export default Movie;