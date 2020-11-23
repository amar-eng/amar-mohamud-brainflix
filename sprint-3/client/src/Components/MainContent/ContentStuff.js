import React from 'react';
import './Content.scss';
import Views from '../../assets/Icons/SVG/Icon-views.svg';
import Likes from '../../assets/Icons/SVG/Icon-likes.svg';

function ContentStuff(props) {
    return (
        <section className="Content">
            <h1 className= "Content__title">{props.title}</h1>
            <div className= "Content__items">
                <div className = "Content__items-left">
                    <h2 className ="Content__channel"> By {props.channel}</h2>
                    <h4 className ="Content__date"> {new Date(props.date).toLocaleDateString()}</h4>
                </div>
                <div className = "Content__items-right">
                    
                        <img src = {Views} className = "Content__icon"/>
                        <h3 className ="Content__views"> {props.views}</h3>
                    
                    
                        <img src = {Likes} className = "Content__icon"/>
                        <h3 className ="Content__likes"> {props.likes}</h3>
                        
                </div>
            </div>
            
            
              
            
            <div className= "Content__desc">{props.desc}</div>
        </section>
    );
}

export default ContentStuff;