import React from 'react';
// import {Link} from 'react-router-dom'; 
import './VideoList.scss'

function VideoList(props) {
    return (
        <div>
            {
                props.listdata.map((item)=>{
                    return(
                        
                        <div className = "side-vids" key = {item.id}>
                            <img src = {item.image} alt= {item.title} className ="side-vids__image" />
                            <div className = "side-vids__content">
                                <p>{item.title}</p>
                                <p>{item.channel}</p>
                            </div>
                        </div>
                        
                        
                    )
                })
            }
        </div>
    );
}

export default VideoList;