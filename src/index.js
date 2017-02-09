import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './component/searchbar.js';
import YTSearch from 'youtube-api-search';
import VideoList from './component/video_list.js';
import VideoDetail from './component/video_detail.js';
import _ from 'lodash';
//Can use debounce to throttle search duration to make it smoother.
//Use npm lodash. Use _ instead lodash
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
        this.videoSearch('lebron');
    }
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            })
        })
    }
    render () {
        const videoSearch = _.debounce( (term) => { this.videoSearch(term) }, 500);
        //_.debounce passes "(term) => { this.videoSearch(term) }" and returns new function that can only be called every .5 second.
        return (
            <div>
                <SearchBar onSearchTermChange={ videoSearch }/>
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