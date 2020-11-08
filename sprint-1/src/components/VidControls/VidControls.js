import React from 'react';
import Playicon from '../../assets/Icons/PNG/Icon-play.png'; 
 
function VidControls(props) {
    return (
        <div className= "vid-controls">
            <div className = "vid-controls__play">
                <img src = {Playicon} />
            </div>
        </div>
    );
}

export default VidControls;