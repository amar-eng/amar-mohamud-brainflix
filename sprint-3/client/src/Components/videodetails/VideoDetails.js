import React from 'react';
import ContentStuff from '../mainContent/ContentStuff';
import Convo from '../commentInput/Convo'
import Comments from '../comments/Comments'
import './VideoDetails.scss'
function VideoDetails(props) {
    console.log("Details data", props.detailsdata)
    return (
        <div>
            <ContentStuff title= {props.detailsdata.title} channel = {props.detailsdata.channel} desc= {props.detailsdata.description} likes = {props.detailsdata.likes} views = {props.detailsdata.views} date = {props.detailsdata.timestamp} />
            <h3>{props.detailsdata.comments.length} Comments</h3>
            <Convo />
            <Comments detailsdata = {props.detailsdata} />
                
        </div>
    );
}

export default VideoDetails;