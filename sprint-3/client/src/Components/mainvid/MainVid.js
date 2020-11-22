import React from 'react';

import VidControls from '../vidControls/VidControls';


import './MainVid.scss'
function MainVid(props) {
    console.log('mainvid', props.duration)
    return (
        <>
        <div className= "main-vid">
            <video className= "vid"poster = {props.thumb} width="100%" height="100%"></video>
        </div>
        <VidControls duration = {props.duration}/>
        </>
        
    );
}

export default MainVid;