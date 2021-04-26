import React from 'react'
import {Link} from 'react-router-dom'
import './navbarStyle.css'
function Navbar() {
    return (
        <div id='navbar'>
        <nav className='gray darken-3'>
            <div className="container">
                <div className="nav-wrapper">
                    <Link to='/' className='brand-logo'>MarioPlan</Link>
                    <a href='#!' data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                    <li><Link to='/create'>create project</Link></li>
                    <li><Link to='/'>log out</Link></li>
                    <li><Link to='/' className='btn btn-floating pink lighten-1'>xx</Link></li>
                    </ul>
                    <ul className='right hide-on-med-and-down'>
                        <li><Link to='login'>logIn</Link></li>
                        <li><Link to='signup'>SignUp</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
            <li><Link to='/create'>create project</Link></li>
            <li><Link to='/'>log out</Link></li>
            <li><Link to='/' className='btn btn-floating pink lighten-1'>xx</Link></li>
        </ul>
        <ul className='sidenav' id='mobile-demo'>
            <li><Link to='login'>logIn</Link></li>
            <li><Link to='signup'>SignUp</Link></li>
        </ul>
        </div>
    )
}

export default Navbar
