import React from 'react';
import Playicon from '../../assets/Icons/SVG/Icon-play.svg';
import Fullsize from '../../assets/Icons/SVG/Icon-fullscreen.svg';
import Volume from '../../assets/Icons/SVG/Icon-volume.svg';

import './VidControls.scss'

 
function VidControls(props) {
    return (
        <div className= "vid-controls">
            <div className = "vid-controls__play">
                <img src = {Playicon} className = "vid-conrols__play-image" />
                
            </div>
            <div className = "vid-controls__scrubber-container">
                    <span className = "vid-controls__scrubber" ></span> {" "}
                    <span className = "vid-controls__time">0:00/0:42</span>
            </div>
            <div className = "vid-controls__container">
            <img src = {Fullsize} className = "vid-conrols__fullsize" />
            <img src = {Volume} className = "vid-conrols__volume" />
            </div>
        </div>
    );
}

export default VidControls;