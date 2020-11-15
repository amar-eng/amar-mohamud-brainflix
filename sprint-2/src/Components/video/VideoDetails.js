import React, { Component } from 'react';
import './VideoDetails.scss';
import {API_URL, API_Key} from '../../utils/Data';
import axios from "axios"; 

class VideoDetails extends Component {
    // state= {
    //     content:{}
    // }

//     componentDidMount(){
        
       
//         // axios request goes here
//     axios.get(API_URL+'/videos/1af0jruup5gu'+API_Key)
    
//         .then((response)=>{

//             const vidData = response.data;
//             console.log ('the video details are', vidData) 
//             this.setState({
//                 content: vidData,
//             })
//         });
// }
    

    render() {
        // const currId = this.state.content.find((element) => element.id === currIdQuery)
        // console.log('current video ID is ', currId)

        // const rendered = this.state.content.filter((ele)=>{
        //     return ele.id === currId.id;
        // });
        return (
            <div>
                   <h1>This is the video page</h1> 
            </div>
        );
    }
}

export default VideoDetails;