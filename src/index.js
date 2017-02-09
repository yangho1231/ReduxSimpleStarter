import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './component/searchbar.js';
import YTSearch from 'youtube-api-search';
import VideoList from './component/video_list.js';
import VideoDetail from './component/video_detail.js';
const API_KEY = 'AIzaSyDYwnxMs7u67aRYtzqlPM0ukLSxC6Mxt3E';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null 
        };
        //Instead of ({videos: videos}) You can just put({videos})
        //Only works if key and value are identical
        YTSearch({key: API_KEY, term: 'lebron'}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            })
        })
    }
    render () {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={ selectedVideo => this.setState({selectedVideo}) } 
                    videos={this.state.videos} 
                />
            </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector('.container'));