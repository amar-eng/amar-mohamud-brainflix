import React from 'react';
import './Navbar.scss';
import Logo from '../../assets/Logo/Logo-brainflix.svg';
import Pic from "../../assets/Images/Mohan-muruge.jpg";
import {Link} from 'react-router-dom'; 
function Navbar(props) {
    return (
        <div className ="navbar">
            <Link to = {`/`}>
                <img src ={Logo} className ="navbar__logo" alt = 'Brainflix-Logo'/>
            </Link>
            <div className = "navbar__content">
                <label>
                    <input type ="text" placeholder ="Search"  />
                </label>
                <div className = "navbar__bottom">
                    <Link to = "/upload">
                        <button >UPLOAD</button>
                    </Link>
                    <img className ="navbar__pic"src = {Pic} alt = 'Profile'/>
                </div>
                
            </div>
            
            
        </div>
    );
}

export default Navbar;
