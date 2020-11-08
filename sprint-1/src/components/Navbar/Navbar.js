import React from 'react';
import './Navbar.scss';
import Logo from '../../assets/Logo/Logo-brainflix.svg';
import Pic from "../../assets/Images/Mohan-muruge.jpg";
import Plus from "../../assets/Icons/PNG/Icon-upload.png";
import Search from "../../assets/Icons/SVG/Icon-search.svg"
function Navbar(props) {
    return (
        <div className ="navbar">
            <div className ="navbar__logo"><img src ={Logo} /></div>
            <div className = "navbar__content">
                <label>
                    <img src = {Search}/>
                    <input type ="text" placeholder ="Search"  />
                </label>
            
                <button><img src = {Plus}/>UPLOAD</button>
                <img className ="navbar__pic"src = {Pic}/>
            </div>
            
            
        </div>
    );
}

export default Navbar;
