import React from 'react';
import Image from '../../assets/Images/Mohan-muruge.jpg' 
import './Convo.scss';

function Convo(props) {
    return (
        <article className="profile">
            <h1 className="profile__text">Join the Conversation</h1>
            <div className="profile__person">
                <img src={Image} className="profile__pic" alt="" /> 
                <form id="commentForm" className="profile__form">
                    
                    <label><textarea name="text" id="textArea"></textarea></label>
                    <button id="submitbtn" > COMMENT</button>
               
                </form> 
         
            </div>

        </article>
    );
}

export default Convo;