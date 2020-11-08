import React from 'react';
import thumb from '../../assets/Images/video-list-0.jpg';
// import VidControls from '../VidControls/VidControls';
import Playicon from '../../assets/Icons/SVG/Icon-play.svg';
import './MainVid.scss'
function MainVid(props) {
    return (
        <div className= "main-vid">
            <video className= "vid"poster = {thumb}>
                
            </video>
            <div className = "vid-controls__play">
                    <img className = "vid-controls__image"src = {Playicon} />
            </div>
        </div>
    );
}

export default MainVid;