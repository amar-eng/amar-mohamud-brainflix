import React from 'react';
import './Play.scss'
import Playicon from '../../assets/Icons/SVG/Icon-play.svg';
function Play(props) {
    return (
        <div className="play-image-container">
            <img className = 'play-image' src={Playicon} />
        </div> 
            
       
    );
}

export default Play;