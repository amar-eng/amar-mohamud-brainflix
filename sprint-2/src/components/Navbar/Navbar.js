import React from 'react';
import './Navbar.scss';
import Logo from '../../assets/Logo/Logo-brainflix.svg';
import Pic from "../../assets/Images/Mohan-muruge.jpg";
function Navbar(props) {
    return (
        <div className ="navbar">
            <img src ={Logo} className ="navbar__logo"/>
            <div className = "navbar__content">
                <label>
                    <input type ="text" placeholder ="Search"  />
                </label>
                <div className = "navbar__bottom">
                    <button >UPLOAD</button>
                    <img className ="navbar__pic"src = {Pic}/>
                </div>
                
            </div>
            
            
        </div>
    );
}

export default Navbar;
