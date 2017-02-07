import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './component/searchbar.js';
import YTSearch from 'youtube-api-search';
import VideoList from './component/video_list.js';

const API_KEY = 'AIzaSyDYwnxMs7u67aRYtzqlPM0ukLSxC6Mxt3E';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };
        //Instead of ({videos: videos}) You can just put({videos})
        //Only works if key and value are identical
        YTSearch({key: API_KEY, term: 'lebron'}, (videos) => {
            this.setState({videos})
        })
    }
    render () {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector('.container'));