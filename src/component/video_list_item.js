import React from 'react';

const VideoListItem = ({video}) => {
    //same as const video = props.video
    return ( 
        <li>{video.snippet.title}</li>
    )
}

export default VideoListItem;