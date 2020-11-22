import React from 'react';
import Image from '../../assets/Images/Mohan-muruge.jpg' 
import './CommentInput.scss';

function CommentInput(props) {
    return (
        
            
            <article className="profile">
                <img src={Image} className="profile__pic" alt="" /> 

                <form id="commentForm" className="profile__form">
                    
                        {/* JOIN THE CONVERSATION */}
                        <textarea name="text" id="textArea" className = "profile__textarea"></textarea>
                    
                    <button id="submitbtn" > COMMENT</button>
                </form> 
         
            </article>

        
    );
}

export default CommentInput;