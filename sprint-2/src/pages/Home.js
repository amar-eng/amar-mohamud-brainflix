import React, { Component } from 'react';
// import { Link } from 'react-router-dom'; 
import {API_URL, API_Key} from '../utils/Data';
import axios from "axios";
// import Main from '../Components/main/Main'
import './Home.scss'



    class Home extends Component {
  // Change state
        state ={
             mainContent:[],   
             videoListitems:[],
            
        }

    componentDidMount(){
    // axios request goes here
    
        axios.get(API_URL+'/videos/'+API_Key)
            .then((videoListitems)=>{
                console.log(videoListitems.data)
            const mainVidId = videoListitems.data[0].id; 
            const filteredList = videoListitems.data.filter (currvideo => {
                 return currvideo.id !== mainVidId}) 
                 console.log (filteredList)   
                this.setState({
                    videoListitems: filteredList
                    
                })
                return (videoListitems.data[0].id)
                
            })
            .then(mainVidId =>{
                axios.get(`${API_URL}/videos/${mainVidId}${API_Key}`)
                .then (mainVideo =>{
                    console.log(mainVideo.data)
                    this.setState({
                        mainContent: mainVideo.data
                    })
                })
            

            })  
        
    }

    // componentDidUpdate(prevprops){ 
    //     let curr
            
       
    // }


    render(){
        
        
        return (
           
            <div className = "home-content">
               
                {/* <Main mainstuff= {this.state.mainContent}  videoList= {this.state.videoListitems}/> */}
            </div>
        );
    }
}

export default Home;