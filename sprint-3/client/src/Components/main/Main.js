import React from 'react';
import MainVid from '../mainvid/MainVid'; 
import VideoDetails from '../videodetails/VideoDetails'; 
import VideoList from '../videolist/VideoList'; 
import './Main.scss'; 
function Main(props) {
    console.log("mainstuff data", props.mainvideoitems)
    return (
        <div>
            
            <MainVid duration= {props.mainvideoitems[0].duration} thumb = {props.mainvideoitems[0].image} />
            <section className = "section">
                <VideoDetails detailsdata = {props.mainvideoitems[0]} className= "section__left"/>
                <VideoList listdata = {props.videoList} className= "section__right"/>
            </section>
            
            
        </div>
    );
}

export default Main;