import React from 'react';
import "./Video.scss";
function Video(props) {
    return (
        <div className = "Video-list">
            <img src= {props.pic} />
            <div className = "Video-list__container">
            <h4>{props.title}</h4> 
            <h4 >{props.channel}</h4>
            </div>
            
           
        </div>
    );
}

export default Video;