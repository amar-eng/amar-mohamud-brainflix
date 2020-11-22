import React, { Component } from 'react'; 
// import {API_URL, API_Key} from '../utils/Data';
import axios from "axios";
import Main from '../Components/main/Main'
import './Home.scss'



    class Home extends Component {

        state ={
             mainContent:null,   
             videoListitems:null,
            
        }

    componentDidMount(){
        // Axios request to get the list of videos and filtering out the first video

        axios.get("http://localhost:8080/videos")
            .then((videoListitems)=>{
                console.log(videoListitems.data)
            const mainVidId = videoListitems.data[0].id; 
            const newList = videoListitems.data.filter (currvideo => {
                 return currvideo.id !== mainVidId}) 
                 console.log (newList) 
            //   Axios request to get a single video with using the ID 
                axios.get(`http://localhost:8080/videos/${mainVidId}`)
                .then (mainVideo =>{
                    console.log('main video data', mainVideo.data)
                    this.setState({
                        videoListitems:newList,
                        mainContent: mainVideo.data
                    })
                })
                
            })
           

 
        
    }



    componentDidUpdate(prevprops){ 
   
        let currId  = this.props.match.params.id
        console.log (currId)
        console.log(prevprops.match.params.id)

         if (prevprops.match.params.id !== currId)
        {  
            // if the current id doesnt exist then: 
            if (!currId) {
            console.log("List of videos: ",this.state.videoListitems)
            currId = this.state.videoListitems[0].id;
            }
            // Axios request to get the updated video list 
            axios.get("http://localhost:8080/videos")
            .then((videoListitems)=> {
                console.log (videoListitems.id)
                const filteredList = videoListitems.data.filter (video => {
                    return video.id !== currId})
                this.setState({
                    videoListitems : filteredList
                })
                // axios request to get the updated(current) video Details
                if (prevprops.match.params.id !== currId){
                    axios.get(`http://localhost:8080/videos/${currId}`)
                    .then (currentVideo =>{
                        console.log(currentVideo.data)
                        this.setState({
                            videoListitems : filteredList,
                            mainContent: currentVideo.data

                            
                        })
                    })
                }
            })
        }    
    }

   
    render(){
       
         
        if (!this.state.mainContent){
            return <p>Loading...</p>
        }else{
            return (
           
                <div className = "home-content">
                   
                    <Main  mainvideoitems= {this.state.mainContent} videoList= {this.state.videoListitems}/>
                </div>
            );
        }

        
    }
}

export default Home;