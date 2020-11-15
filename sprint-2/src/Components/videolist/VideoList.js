import React from 'react';
import {Link} from 'react-router-dom'; 
import './VideoList.scss'

function VideoList(props) {
    console.log (props)
    return (
        <div>
            {
                props.listdata.map((item)=>{
                    return(
                       <Link to = {`/videos/${item.id}`} key = {item.id}>
                       
                        <div className = "side-vids">
                            <img src = {item.image} alt= {item.title} className ="side-vids__image" />
                            <div className = "side-vids__content">
                                <p>{item.title}</p>
                                <p>{item.channel}</p>
                            </div>
                        </div>
                        </Link>
                        
                    )
                })
            }
        </div>
    );
}

export default VideoList;