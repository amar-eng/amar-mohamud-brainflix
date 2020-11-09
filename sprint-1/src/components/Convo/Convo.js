import React from 'react';
import Image from '../../assets/Images/Mohan-muruge.jpg' 

function Convo(props) {
    return (
        <article className="profile">
            <h1 className="profile__text">Join the Conversation</h1>
            <div className="profile__person">
                {/* <img src={Image} class="profile__pic" alt="" />  */}
                <form id="commentForm" className="profile__form">
                    <label for="name-input">NAME<input id="name-input" type="text" name="Name" placeholder="NAME"/></label>
                    <label for="text">COMMENT<textarea name="text" id="textArea" placeholder="Add a new Comment"></textarea></label>
                    <button id="submitbtn" type="submit"> COMMENT</button>
               
                </form> 
         
            </div>

        </article>
    );
}

export default Convo;