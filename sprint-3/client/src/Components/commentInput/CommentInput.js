
import React, { Component } from 'react';
import './CommentInput.scss';
import Image from '../../assets/Images/Mohan-muruge.jpg'
import axios from 'axios'; 
class CommentInput extends Component {
    constructor(props){
        super(props)

        this.state ={
            comment:''
        }
    }
    changeHandler =(e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    clickedHandler = (e)=>{
          e.preventDefault(); 
          console.log(this.state); 
          axios
            .post('http://localhost:8080/videos/', this.state)
            .then(response =>{
                console.log(response)
            })
            .catch(error =>{
                console.log(error)  
            })
    }


    render() {
        const {comment} = this.state
        return (
            <>
                 <p className="profile-heading">JOIN THE CONVERSATION</p>
                 <article className="profile">
                 <img src={Image} className="profile__pic" alt="" /> 
                     <form id="commentForm" className="profile__form">
                         <textarea type ="text" name="comment" id="textArea"  value={comment} onChange={this.changeHandler} className = "profile__textarea"></textarea>
                         <button id="submitbtn" onClick = {this.clickedHandler}> COMMENT</button>
                     </form> 
                     
                 </article>
             </>
        );
    }
}

export default CommentInput;