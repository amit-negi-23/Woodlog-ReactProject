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

                        <Link to={'/cart'}><span className='shopping-cart'><i className="fa-solid fa-cart-shopping"></i>
                            {(products.length !== 0) ? <div className='cart-status'>
                                <div className="blinkdot"></div>
                            </div> : ""}</span></Link>
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
                            <li className="navitem"><Link to={'DiningSets'} className="navlink">Dining & Kitchen Furniture</Link></li>
                            <li className="navitem"><Link to={'/BarFurniture'} className="navlink">Bar furniture</Link></li>
                            <li className="navitem"><Link to={'OfficeFurniture'} className="navlink">Study & office Furniture</Link></li>
                            <li className="navitem"><Link to={'Wardrobes'} className="navlink">Book Shelves</Link></li>
                        </ul>
                    </nav>

                </div>
            </header>
        </div>
    )
}
