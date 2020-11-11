import React from 'react';
import Image from '../../assets/Images/Mohan-muruge.jpg' 
import './Convo.scss';

function Convo(props) {
    return (
        <article className="profile">
            <h1 className="profile__text">Join the Conversation</h1>
            <div className="profile__person">
                <img src={Image} class="profile__pic" alt="" /> 
                <form id="commentForm" className="profile__form">
                    
                    <label for="text"><textarea name="text" id="textArea"></textarea></label>
                    <button id="submitbtn" type="submit"> COMMENT</button>
               
                </form> 
         
            </div>

        </article>
    );
}

export default Convo;