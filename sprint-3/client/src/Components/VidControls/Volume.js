import React from 'react';
import Fullsize from '../../assets/Icons/SVG/Icon-fullscreen.svg';
import Volumebutton from '../../assets/Icons/SVG/Icon-volume.svg';
import './Volume.scss';

function Volume(props) {
    return (
        <div className ="vid-controls-rhs">
            <img className = 'fullsize-icon' src={Fullsize}  alt = "full-size icon "/>
            <img className = 'volume-icon' src={Volumebutton} alt = "volume icon " />   
        </div>
    );
}

export default Volume;