import React from 'react';
import Play from './Play';
import Scrubber from './Scrubber';
import Volume from './Volume';

import './VidControls.scss'

 
function VidControls(props) {
    return (
        <div className= "vid-control">
            <Play />
            <Scrubber />
            <Volume />
            
        </div>
    );
}

export default VidControls;