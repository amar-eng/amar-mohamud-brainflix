import React from 'react';
import Play from './Play';
import Scrubber from './Scrubber';
import Volume from './Volume';

import './VidControls.scss'

 
function VidControls(props) {
    return (
        <div className= "vid-control">
            <Play />
            <Scrubber duration = {props.duration}/>
            <Volume />
            
        </div>
    );
}

export default VidControls;