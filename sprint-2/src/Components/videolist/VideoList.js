import React from 'react';
import {Link} from 'react-router-dom'; 
import './VideoList.scss'

function VideoList(props) {
    console.log (props)
    return (
        <div className = "side-vids">
            <h1 className= "side-vids__header">NEXT VIDEO</h1>
            {
                
                props.listdata && props.listdata.map((item)=>{
                    return(
                       <Link to = {`/videos/${item.id}`} key = {item.id} className = "side-vids__links">
                       
                        <div className = "side-vids__container">
                            <img src = {item.image} alt= {item.title} className ="side-vids__image" />
                            <div className = "side-vids__content">
                                <h3>{item.title}</h3>
                                <h4>{item.channel}</h4>
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