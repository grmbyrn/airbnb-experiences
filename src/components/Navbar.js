import React from 'react';
import logo from '../images/airbnb-logo.png'

export default function Navbar(props){
    return (
        <nav>
            <img className='nav--logo' src={logo} alt='airbnb logo' />
        </nav>
    )
}