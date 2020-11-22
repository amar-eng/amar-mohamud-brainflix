import React from 'react';
import './Comments.scss'
function Comments(props) {
    console.log(props)
    return (
        <section className = "comment">
            {
            props.detailsdata.comments && props.detailsdata.comments.map((item)=>{
               
                return (
                    <div className = "comments" key = {item.id}>
                        <div className = "comments__icon"></div>
                        <div className = "comments__content">
                            <div className = "comments__profile"  >
                                    <h3 className= "comments__name">{item.name}</h3>
                                    <h3 className= "comments__date">{new Date(item.timestamp).toLocaleDateString()}</h3>
                            </div>
                            <h3 className = "comments__text">{item.comment}</h3> 
                            
                        </div>
                       
                        
                        
                    </div>
                
                )
            })
        }
                        
        </section>
    );
}

export default Comments;