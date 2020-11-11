import React from 'react';
import './scrubber.scss';
function Scrubber(props) {
    return (
            <div className = "scrubber">
                <div className="scrubber__time">0:00/0:42</div>
                <div className = "scrubber__innerbar"></div> 
            </div>
    );
}

export default Scrubber;