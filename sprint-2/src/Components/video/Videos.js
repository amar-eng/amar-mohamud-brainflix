// import React, { Component } from 'react';
// import './Videos.scss';
// import { Link } from 'react-router-dom'; 
// import {API_URL, API_Key} from '../../utils/Data';
// import axios from "axios";
// // import VideoDetails from './VideoDetails'; 

// class Videos extends Component {
//      // Change state
//      state ={
//         stuff:[],
//     }

//     componentDidMount(){
       
//             // axios request goes here
//         axios.get(API_URL+'/videos/'+API_Key)
//             .then((response)=>{
//                 const vidData = response.data;
//                 console.log (vidData) 
//                 this.setState({
//                     stuff: vidData,
//                 })
//             });
//     }



 
//     render() {
        
//         const currIdQuery = this.props.match.params.id; 
//         console.log(currIdQuery);
//         // const currId = this.state.stuff.find((element) => this.state.stuff.id === element.currIdQuery)
//         const currId = this.state.stuff.find((element) => element.id === currIdQuery)
//         console.log('current video ID is ', currId)

//         const newList = this.state.stuff.filter((ele)=>{
//             return ele.id !== currId.id;
//         });
//         console.log('the newList array is', newList)
//         return (
           
//             <div>
//                 <h1>Videos Page Ting Bruv</h1>
//                 {
//                     newList.map((item)=>{
//                         return(
//                             <Link to = { `/videos/${item.id}`} key = {item.id}>
//                                 <div className = "side-vids" >
//                                     <img src = {item.image} alt= {item.title} className ="side-vids__image" />
//                                     <div className = "side-vids__content">
//                                         <p>{item.title}</p>
//                                         <p>{item.channel}</p>
//                                     </div>
//                                 </div>
//                                 {/* <VideoDetails currentID={item.id} /> */}
//                             </Link>
                           
                            
//                         )
//                     })
//                 }    
//             </div>
//         );
//     }
// }

// export default Videos;