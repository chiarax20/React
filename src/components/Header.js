import React from 'react';
import '../App.css';
import logo from '../img/logo.png';

function Header(){
    return(
    /*Barra principale con lpgp*/
        <div className='Header'> 
            <div className='Logo'>
                <img src={logo} width='60' className='Img'/>      
            </div>
            <h1>Books Finder</h1>
        </div>
    )
}
export default Header;