import React, { useContext } from 'react'
import brandlogo from './Assets/woodlog.png'
import { Link } from 'react-router-dom'
import { CartContext } from './App'
import './blink.css'
export default function Header() {
    const { store: { products } } = useContext(CartContext)

    return (
        <div>
            <header>
                <div id="header-top-container">
                    <Link to={'/'}>
                        <div id="logo-container">
                            <img src={brandlogo} alt="brandlogo" />
                        </div>
                    </Link>

                    <div id="search">
                        <input type="text" placeholder="search here" />
                        <button>
                            <span className="material-symbols-outlined">search</span>
                        </button>
                    </div>
                    <div id="icons">
                    <Link to={'/'}><i className="fa-solid fa-house"></i></Link>
                        <Link to={'/cart'}><span className='shopping-cart'><i className="fa-solid fa-cart-shopping"></i>
                            {(products.length !== 0) ? <div className='cart-status'>
                                <div className="blinkdot"></div>
                            </div> : ""}</span></Link>
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-user"></i>
                    </div>
                    <div>
                    <Link to={'/register'} id="signup-btn"> 
                        <button id="signup-btn">Sign Up</button>
                    </Link>
                        <button id="login-btn">Log In</button>
                    </div>
                </div>

                <div id="header-bottom-container">
                    <nav id="navbar">
                        <ul id="navmenu">
                            <li className="navitem"><Link to={'beds'} className="navlink">Bedroom Furniture</Link></li>
                            <li className="navitem"><Link to={'diningSets'} className="navlink">Dining & Kitchen Furniture</Link></li>
                            <li className="navitem"><Link to={'/barFurniture'} className="navlink">Bar furniture</Link></li>
                            <li className="navitem"><Link to={'officeFurniture'} className="navlink">Study & office Furniture</Link></li>
                            <li className="navitem"><Link to={'wardrobes'} className="navlink">Book Shelves</Link></li>
                        </ul>
                    </nav>

                </div>
            </header>
        </div>
    )
}
