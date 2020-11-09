import React from 'react';
import Fullsize from '../../assets/Icons/SVG/Icon-fullscreen.svg';
import Volumebutton from '../../assets/Icons/SVG/Icon-volume.svg';
import './Volume.scss';

function Volume(props) {
    return (
        <div className ="vid-controls-rhs">
            <img className = 'fullsize-icon' src={Fullsize}  />
            <img className = 'volume-icon' src={Volumebutton} />   
        </div>
    );
}

export default Volume;