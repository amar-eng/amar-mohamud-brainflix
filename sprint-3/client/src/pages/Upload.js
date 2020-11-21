import React from 'react';
import './Upload.scss'; 
import thumb from '../assets/Images/Upload-video-preview.jpg'; 

import { Link } from 'react-router-dom';
function Upload(props) {
    return (
        <div className= "upload">
            <h1 className = "upload__header" >Upload Video</h1>
            
            <div className = "upload__container">
                <div className = "upload__items">
                    <p className = "upload__title"> VIDEO THUMBNAIL</p>
                    <img src= {thumb} alt ="Upload thumbnail" className = "upload__image" />
                </div>
           
                <div className ="upload__forms">
                    <label >
                        TITLE YOUR VIDEO
                        <input type ="text" placeholder ="Add a title to your video"  />
                    </label>
                    <label >
                        ADD A VIDEO DESCRIPTION
                        <textarea type ="text" placeholder ="Add a description of your video" className = "upload__forms--text" />
                    </label>
                </div>
                
                
            </div>
            <div className = "upload__content">
                <Link to = "/" className = "upload__button">
                    <button>PUBLISH</button>
                    
                </Link>
                <Link to = "/" className = "upload__cancel">
                    <p>CANCEL</p>
                </Link>
            </div>
            

            
        </div>
    );
}

export default Upload;