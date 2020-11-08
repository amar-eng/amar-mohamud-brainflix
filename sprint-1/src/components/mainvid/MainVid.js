import React from 'react';
import thumb from '../../assets/Images/video-list-0.jpg';
import VidControls from '../VidControls/VidControls';


import './MainVid.scss'
function MainVid(props) {
    return (
        <>
        <div className= "main-vid">
            <video className= "vid"poster = {thumb}></video>
        </div>
        <VidControls />
        </>
        
    );
}

export default MainVid;