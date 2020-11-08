import React from 'react';
import ContentStuff from './ContentStuff'; 
import ActualVid from '../../assets/Video/BrainStation Sample Video.mp4'

function MainContent(props) {

    const mainVideoData = {
        id: '521768792',
        title: 'BMX Rampage: 2018 Highlights',
        description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
        channel: 'Red Cow',
        image: 'type of <string>',
        views: '1,001,023',
        likes: '110,985',
        duration: 'type of <string>',
        video: ActualVid,
        timestamp: '12/18/2018',
        comments: [
            {
                id: 213, 
                name: 'Micheal Lyons',
                date: '12/18/2018',
                text: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
                
            },
            {
                id: 214, 
                name: 'Gary Wong',
                date: '12/12/2018',
                text: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
                
            },
            {
                id: 215, 
                name: 'Theodore Duncan',
                date: '11/15/2018',
                text: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day.Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
                
            }
    
            ] 
    };


    return (
        <div>
         <ContentStuff title= {mainVideoData.title} channel = {mainVideoData.channel} desc= {mainVideoData.description} likes = {mainVideoData.likes} views = {mainVideoData.views} date = {mainVideoData.timestamp} />
        
        </div>
    );
}

export default MainContent;