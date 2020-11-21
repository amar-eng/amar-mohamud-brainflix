import React from 'react';

import VidControls from '../VidControls/VidControls';


import './MainVid.scss'
function MainVid(props) {
    return (
        <>
        <div className= "main-vid">
            <video className= "vid"poster = {props.thumb}></video>
        </div>
        <VidControls duration = {props.duration}/>
        </>
        
    );
}

export default MainVid;