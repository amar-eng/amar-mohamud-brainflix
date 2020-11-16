import React, { Component } from 'react';
// import { Link } from 'react-router-dom'; 
import {API_URL, API_Key} from '../utils/Data';
import axios from "axios";
import Main from '../Components/main/Main'
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

    componentDidUpdate(prevprops){ 
        let currId  = this.props.match.params.id
         if (prevprops.match.params.id !== currId){ 
            axios.get(API_URL+'/videos/'+API_Key)
            .then((videoListitems)=> {
                console.log (videoListitems.id)
                const filteredList = videoListitems.data.filter (video => {
                    return video.id !== currId})
                this.setState({
                    videoListitems : filteredList
                })
                     
                return videoListitems; 
            })

            .then(() =>{
                if (prevprops.match.params.id !== currId){
                    axios.get(`${API_URL}/videos/${currId}${API_Key}`)
                    .then (currentVideo =>{
                        console.log(currentVideo.data)
                        this.setState({
                            mainContent: currentVideo.data
                        })
                    })
                }
                
            

            })  
         }  
       
    }

   
    render(){
       
        
        return (
           
            <div className = "home-content">
               
                <Main mainstuff= {this.state.mainContent}  videoList= {this.state.videoListitems}/>
            </div>
        );
    }
}

export default Home;