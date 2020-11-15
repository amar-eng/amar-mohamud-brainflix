import React from 'react';
import ContentStuff from '../MainContent/ContentStuff';
import Convo from '../Convo/Convo'
import Comments from '../Comments/Comments'
function VideoDetails(props) {
    console.log(props)
    return (
        <div>
            <ContentStuff title= {props.detailsdata.title} channel = {props.detailsdata.channel} desc= {props.detailsdata.description} likes = {props.detailsdata.likes} views = {props.detailsdata.views} date = {props.detailsdata.timestamp} />
            <Convo />
            <Comments detailsdata = {props.detailsdata} />
        </div>
    );
}

export default VideoDetails;