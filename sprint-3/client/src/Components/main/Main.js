import React from 'react';
import MainVid from '../mainvid/MainVid'; 
import VideoDetails from '../video/VideoDetails'; 
import VideoList from '../videolist/VideoList'
function Main(props) {
    
    return (
        <div>
            {/* <MainVid duration= {props.mainstuff.duration} thumb = {props.mainstuff.image} />
            <VideoDetails detailsdata = {props.mainstuff} /> */}
            <VideoList listdata = {props.videoList} />
            
        </div>
    );
}

export default Main;