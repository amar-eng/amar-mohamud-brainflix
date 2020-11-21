import React from 'react';
import './scrubber.scss';
function Scrubber(props) {
    return (
            <div className = "scrubber">
                <div className="scrubber__time">0:00/{props.duration}</div>
                <div className = "scrubber__innerbar"></div> 
            </div>
    );
}

export default Scrubber;