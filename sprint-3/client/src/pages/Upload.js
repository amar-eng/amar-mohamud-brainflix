import React, { Component } from 'react';
import './Upload.scss';
import thumb from '../assets/Images/Upload-video-preview.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios'; 

class Upload extends Component {
    constructor(props){
        super(props)

        this.state ={
            title:'', 
            description:''
        }
    }

    changeHandler =(e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    clickedHandler = (e)=>{
        //   e.preventDefault(); 
          console.log(this.state); 
          axios
            .post('http://localhost:8080/videos', this.state)
            .then(response =>{
                console.log(response)
            })
            .catch(error =>{
                console.log(error)  
            })
    }

    render() {
        const {title,description} = this.state

        return (
            <div className= "upload">
                <h1 className = "upload__header" >Upload Video</h1>
            
                <div className = "upload__container">
                     <div className = "upload__items">
                         <p className = "upload__title"> VIDEO THUMBNAIL</p>
                         <img src= {thumb} alt ="Upload thumbnail" className = "upload__image" />
                    </div>
                       
                     <form className ="upload__forms" >
                         <label >
                             TITLE YOUR VIDEO
                             <input type ="text" name="title" value={title} onChange={this.changeHandler} placeholder ="Add a title to your video"  />
                         </label>
                         <label >
                             ADD A VIDEO DESCRIPTION
                             <textarea type ="text" name="description" value={description} onChange={this.changeHandler} placeholder ="Add a description of your video" className = "upload__forms--text" />
                         </label>
                     </form>
                </div>
                <div to ="/" className = "upload__content">
                     <Link to = "/" className = "upload__button" onClick = {this.clickedHandler} >
                         <button>PUBLISH</button>                     
                     </Link>
                     <Link to = "/" className = "upload__cancel">
                         <p>CANCEL</p>
                     </Link>
                 </div>           
                
            </div>
        );
    }
}

export default Upload;