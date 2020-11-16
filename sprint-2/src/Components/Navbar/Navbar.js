import React from 'react';
import './Navbar.scss';
import Logo from '../../assets/Logo/Logo-brainflix.svg';
import Pic from "../../assets/Images/Mohan-muruge.jpg";
import {Link} from 'react-router-dom';
import Plus from '../../assets/Icons/SVG/Icon-upload.svg' 
function Navbar(props) {
    return (
        <div className ="navbar">
            <Link to = {`/`}>
                <img src ={Logo} className ="navbar__logo" alt = 'Brainflix-Logo'/>
            </Link>
                <input type ="text" placeholder ="Search"  />
            <div className = "navbar__content">
                    <Link to = "/upload">
                        <button>UPLOAD</button>
                    </Link>
                    <img className ="navbar__pic"src = {Pic} alt = 'Profile'/>
            </div>
            
            
        </div>
    );
}

export default Navbar;
