import React from 'react';
import MainVid from '../mainvid/MainVid'; 
import VideoDetails from '../video/VideoDetails'; 
import VideoList from '../videolist/VideoList'
function Main(props) {
    console.log("mainstuff data", props.mainstuff)
    return (
        <div>
            <MainVid duration= {props.mainstuff[0].duration} thumb = {props.mainstuff[0].image} />
            <VideoDetails detailsdata = {props.mainstuff[0]} />
            <VideoList listdata = {props.videoList} />
            
        </div>
    );
}

export default Main;