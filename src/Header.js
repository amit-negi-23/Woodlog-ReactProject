import React from 'react'
import brandlogo from './Assets/woodlog.png'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <header>
                <div id="header-top-container">
                    <div id="logo-container">
                        <img src={brandlogo} alt="brandlogo"/>
                    </div>

                    <div id="search">
                        <input type="text" placeholder="search here"/>
                            <button>
                                <span className="material-symbols-outlined">search</span>
                            </button>
                    </div>
                    <div id="icons">
                        <Link to={'/cart'}><i className="fa-solid fa-cart-shopping"></i></Link>
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-user"></i>
                    </div>
                    <div>
                        <button id="signup-btn">Sign Up</button>
                        <button id="login-btn">Log In</button>
                    </div>
                </div>

                <div id="header-bottom-container">
                    <nav id="navbar">
                        <ul id="navmenu">
                            <li className="navitem"><Link to={'Beds'} className="navlink">Bedroom Furniture</Link></li>
                            <li className="navitem"><a href="i" className="navlink">Dining & Kitchen Furniture</a></li>
                            <li className="navitem"><Link to={'/BarFurniture'} className="navlink">Bar furniture</Link></li>
                            <li className="navitem"><Link to={'OfficeFurniture'} className="navlink">Study & office Furniture</Link></li>
                            <li className="navitem"><a href="i" className="navlink">Book Shelves</a></li>
                        </ul>
                    </nav>

                </div>
            </header>
        </div>
    )
}
