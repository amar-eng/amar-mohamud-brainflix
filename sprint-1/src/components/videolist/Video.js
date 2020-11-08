import React from 'react';

function Video(props) {
    return (
        <div>
          <h4>{props.title}</h4> 
          <h4 >{props.channel}</h4> 
        </div>
    );
}

export default Video;