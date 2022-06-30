
import React from 'react';
import '../navbar.css'
import ReactDOM from 'react-dom';
 import {NavLink} from 'react-router-dom';

export default function Navbar() { 
  return (
<>
<nav className='navbar'>
<div className="mainflex">
<h1 className='heading'>Registration Form</h1>
    <ul className='list'>
        <li className='items'>
        <NavLink className='link' to="/adduserform">Add User</NavLink>
        </li>
    </ul>
    </div>
    </nav>
</>
  )
}
