import React from 'react';
import Video from './Video';
import './VideoList.scss';



function VideoList(props) {
    const videoList= [
        { 
            id: 101, 
            title: 'BMX Rampage: 2018 Highlights ', 
            channel: 'Red Cow', 
            image: require ('./node_modules') 
        
        }, 
    
        { 
            id: 102, 
            title: 'Become A Travel Pro In One Easy Lesson', 
            channel: 'Todd Welch', 
            image: 'type of <string>' 
        
        }, 
        { 
            id: 103, 
            title: 'Les Houches The Hidden Gem Of The Chamonix', 
            channel: 'Cornelia Blair', 
            image: 'type of <string>' 
        
        }, 
        { 
            id: 104, 
            title: 'Travel Health Useful Medical Information For', 
            channel: 'Glen Harper', 
            image: 'type of <string>' 
        
        }, 
        { 
            id: 105, 
            title: 'Cheap Airline Tickets Great Ways To Save', 
            channel: 'Emily Harper', 
            image: 'type of <string>' 
        
        }, 
        { 
            id: 106, 
            title: 'Take A Romantic Break In A Boutique Hotel', 
            channel: 'Ethan Owen', 
            image: 'type of <string>' 
        
        }, 
        { 
            id: 107, 
            title: 'Choose The Perfect Accommodations', 
            channel: 'Lydia Perez', 
            image: 'type of <string>' 
        
        }, 
        { 
            id: 108, 
            title: 'Cruising Destination Ideas', 
            channel: 'Timothy Austin', 
            image: 'type of <string>' 
        
        }, 
        { 
            id: 109, 
            title: 'Train Travel On Track For Safety', 
            channel: 'Scotty Cranmer', 
            image: 'type of <string>' 
        
        }
    
    
    
    ] 
    return (
        <div>
         {
             videoList.map((items)=>(
                 <Video title= {items.title} channel = {items.channel} />
             ))
         }  
        </div>
    );
}

export default VideoList;