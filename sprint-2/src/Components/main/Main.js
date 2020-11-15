// import {API_URL, API_Key} from '../../utils/Data';
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from "axios";
// import './Main.scss'

// class Main extends Component {
//     // Change state
//     state ={
//         stuff:[],
//     }

//     componentDidMount(){
//         // axios request goes here
        
//         axios.get(API_URL+'/videos'+API_Key)
//             .then((response)=>{
//                 const vidData = response.data;
//                 console.log (vidData) 
//                 this.setState({
//                     stuff: vidData,
                    
//                 })
                 
//             });
            
//     }
    

    // render() {

        

//         const newList = this.state.stuff.filter(function(element){
//             return element.id !== "1af0jruup5gu" ;
//         });
//         console.log(newList)
//         return (
//             <div>
//                 <h1>Main Page Tings</h1>
             
//                 {
                     
//                     newList.map((item)=>{
//                         return(
//                             <Link to = { `/videos/${item.id}`} key = {item.id}> 
//                             <div className = "side-vids" key = {item.id}>
//                                 <img src = {item.image} alt= {item.title} className ="side-vids__image" />
//                                 <div className = "side-vids__content">
//                                     <p>{item.title}</p>
//                                     <p>{item.channel}</p>
//                                 </div>
//                             </div>
//                             </Link>
                            
//                         )
//                     })
//                 }
//             </div>
//         );
//     }
// }

// export default Main;


import React from 'react';
import MainVid from '../mainvid/MainVid'; 
import VideoDetails from '../video/VideoDetails'; 
// import VideoList from '../videolist/VideoList'
function Main(props) {
    return (
        <div>
            <MainVid duration= {props.mainstuff.duration} thumb = {props.mainstuff.image} />
            <VideoDetails detailsdata = {props.mainstuff} />
            {/* <VideoList listdata = {this.props.VideoList} /> */}
            
        </div>
    );
}

export default Main;