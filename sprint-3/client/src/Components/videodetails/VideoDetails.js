import React from 'react';
import ContentStuff from '../mainContent/ContentStuff';
import Comments from '../comments/Comments'
import './VideoDetails.scss'
import CommentInput from '../commentInput/CommentInput';
function VideoDetails(props) {
    console.log("Details data", props.detailsdata)
    return (
        <div>
            <ContentStuff title= {props.detailsdata.title} channel = {props.detailsdata.channel} desc= {props.detailsdata.description} likes = {props.detailsdata.likes} views = {props.detailsdata.views} date = {props.detailsdata.timestamp} />
            <h3>{props.detailsdata.comments.length} Comments</h3>
            <CommentInput />
            <Comments detailsdata = {props.detailsdata} />
                
        </div>
    );
}

export default VideoDetails;