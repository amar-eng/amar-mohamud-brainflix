import React from 'react';
import Video from './Video';
import './VideoList.scss';
import Pic1 from '../../assets/Images/video-list-0.jpg'; 
import Pic2 from '../../assets/Images/video-list-1.jpg'; 
import Pic3 from '../../assets/Images/video-list-2.jpg'; 
import Pic4 from '../../assets/Images/video-list-3.jpg'; 
import Pic5 from '../../assets/Images/video-list-4.jpg'; 
import Pic6 from '../../assets/Images/video-list-5.jpg'; 
import Pic7 from '../../assets/Images/video-list-6.jpg'; 
import Pic8 from '../../assets/Images/video-list-7.jpg'; 
import Pic9 from '../../assets/Images/video-list-8.jpg'; 
 

function VideoList (props) {
    const videoList= [
        { 
            id: 101, 
            title: 'BMX Rampage: 2018 Highlights ', 
            channel: 'Red Cow', 
            image: Pic1 
        
        }, 
    
        { 
            id: 102, 
            title: 'Become A Travel Pro In One Easy Lesson', 
            channel: 'Todd Welch', 
            image: Pic2
        
        }, 
        { 
            id: 103, 
            title: 'Les Houches The Hidden Gem Of The Chamonix', 
            channel: 'Cornelia Blair', 
            image: Pic3 
        
        }, 
        { 
            id: 104, 
            title: 'Travel Health Useful Medical Information For', 
            channel: 'Glen Harper', 
            image: Pic4 
        
        }, 
        { 
            id: 105, 
            title: 'Cheap Airline Tickets Great Ways To Save', 
            channel: 'Emily Harper', 
            image: Pic5
        
        }, 
        { 
            id: 106, 
            title: 'Take A Romantic Break In A Boutique Hotel', 
            channel: 'Ethan Owen', 
            image: Pic6 
        
        }, 
        { 
            id: 107, 
            title: 'Choose The Perfect Accommodations', 
            channel: 'Lydia Perez', 
            image: Pic7 
        
        }, 
        { 
            id: 108, 
            title: 'Cruising Destination Ideas', 
            channel: 'Timothy Austin', 
            image: Pic8 
        
        }, 
        { 
            id: 109, 
            title: 'Train Travel On Track For Safety', 
            channel: 'Scotty Cranmer', 
            image: Pic9
        
        }
    
    
    
    ] 

    const newList = videoList.filter(function(element){
        return element.id !== 101 ;
    }); 
    console.log(newList)

   
    return (
        <div>
         {
             newList.map((items)=>(
                 <Video title= {items.title} channel = {items.channel} pic= {items.image}/>
            
             ))
         }  
        </div>
    );
}

export default VideoList;