import React from 'react';
import {NavLink} from 'react-router-dom'

export default function Navbar(){
    return(
        <nav className='navbar'>
            <h1>ironwolf.co</h1>
            <NavLink to='/'>SHOP ONLINE</NavLink>
            <NavLink to='/'>ABOUT</NavLink>
            <NavLink to='/'>STORES</NavLink>
            <NavLink to='/'>BIKES</NavLink>
            <NavLink to='/'>SURF</NavLink>
            <NavLink to='/'>CAFES</NavLink>
        </nav>
    )
}