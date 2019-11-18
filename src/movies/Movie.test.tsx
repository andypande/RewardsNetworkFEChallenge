import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Movie from './Movie';

let container:any;

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});


afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

const title:string = 'Sharknado';
const release_year:number = 1989;
const actors:string[] = ['The Rock'];
const locations:string[] = ['Starbucks Reserve'];
const fun_facts: string = 'I Like Tacos';

it('renders the movie component if there is a title and year provided', () => {
    act(() => {
        render(<Movie 
                title = {title}
                release_year = {release_year}
            />, container);
      });
      expect(container.textContent).toBe("Sharknado1989");
})

it('renders the actors list if at least one actor provided and no list if actors array empty', () => {
    act(() => {
        render(<Movie 
                title = {title}
                release_year = {release_year}
                actors = {actors}
            />, container);
      });
      expect(container.textContent).toBe("Sharknado1989Actors:The Rock");

      act(() => {
        render(<Movie 
                title = {title}
                release_year = {release_year}
                actors = {[]}
            />, container);
      });
      expect(container.textContent).toBe("Sharknado1989");
})

it('renders the locations list if at least one locations provided and no list if locations array empty', () => {
    act(() => {
        render(<Movie 
                title = {title}
                release_year = {release_year}
                locations = {locations}
            />, container);
      });
      expect(container.textContent).toBe("Sharknado1989Locations:Starbucks Reserve");

      act(() => {
        render(<Movie 
                title = {title}
                release_year = {release_year}
                locations = {[]}
            />, container);
      });
      expect(container.textContent).toBe("Sharknado1989");
})

it('renders the fun facts if at least one fun fact provided and no content if fun fact string empty', () => {
    act(() => {
        render(<Movie 
                title = {title}
                release_year = {release_year}
                fun_facts = {fun_facts}
            />, container);
      });
      expect(container.textContent).toBe("Sharknado1989I Like Tacos");

      act(() => {
        render(<Movie 
                title = {title}
                release_year = {release_year}
                fun_facts = ''
            />, container);
      });
      expect(container.textContent).toBe("Sharknado1989");
})

it('renders the movie component with title, release year, actors, locations, fun facts', () => {
    act(() => {
        render(<Movie 
                title = {title}
                release_year = {release_year}
                actors = {actors}
                locations = {locations}
                fun_facts = {fun_facts}
            />, container);
      });
      expect(container.textContent).toBe("Sharknado1989Actors:The RockLocations:Starbucks ReserveI Like Tacos");

})
