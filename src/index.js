import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './component/searchbar.js';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDYwnxMs7u67aRYtzqlPM0ukLSxC6Mxt3E';
const App = function() {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDom.render(<App />, document.querySelector('.container'));