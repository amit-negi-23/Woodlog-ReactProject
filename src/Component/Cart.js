import React, { useContext } from 'react'
import './Cart.css'
import { CartContext } from '../App'
import { String } from '../Store/String'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
export default function Cart() {
    const { store: { products }, dispatch } = useContext(CartContext)
    const isDesktopOrLaotop = useMediaQuery({ query: '(min-width: 992px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })
    /*const [mobDevice, setmobDevice] = useState()
     if(window.innerWidth<600){
         setmobDevice(window.innerWidth)
     }
     console.log(mobDevice)*/
    const removeProduct = (product) => {

        dispatch({ type: String.REMOVE_PRODUCT, payload: { id: product.productId } })
    }
    return (
        <div>
            {(products.length !== 0) ? <div className='table-container'>
                {isDesktopOrLaotop && <table>
                    <thead>
                        <tr>
                            <th>SR.No.</th>
                            <th>Product img</th>
                            <th>Product name</th>
                            <th>Brand</th>
                            <th>Shipping</th>
                            <th>MRP</th>
                            <th>Discount</th>
                            <th>Discount Percent</th>
                            <th>Sell Price</th>
                            <th>Remove item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => {
                            return (
                                <tr key={product.productId}>
                                    <td>{index + 1}</td>
                                    <td className='img-td'><img src={product.image} alt='product' /></td>
                                    <td>{product.title}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.shipping}</td>
                                    <td><s>₹{product.price.mrp}</s></td>
                                    <td>₹{product.discount.price}</td>
                                    <td>{product.discount.percent}</td>
                                    <td className='selling-price'>₹{product.price.sell}</td>
                                    <td><button onClick={() => { removeProduct(product) }}>Remove</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>}

                {isMobile && products.map((product, idx) => {
                    return (
                        <>
                        <div>This page is under construction........</div>
                            <div className='cart-furniture-card'>
                                <div>
                                    <img src={product.image} className="furniture-img" alt='sofa' />
                                    <button onClick={() => { removeProduct(product) }}>Remove</button>
                                </div>
                                <div className="cart-furniture-card-body">
                                    <h4 className="furniture-card-title">{product.title}</h4>
                                    <div className="brand-name">{product.brand}</div>
                                    <div className="product-rating">rating{product.rating}</div>
                                    <div className="todays-deal">Todays Deal</div>
                                    <div className="current-price">
                                        <span><strong>₹{product.price.sell}</strong></span>
                                        <span><s>₹{product.price.mrp}</s></span>
                                    </div>
                                    <div className="price-savings">
                                        <span>You Save ₹{product.discount.price}</span>
                                        <span className="percent-off">{product.discount.percent}</span>
                                    </div>
                                    <div className="extra-saving">{product.extraoffer}</div>
                                    <div className="shipping-status">{product.shipping}</div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div> : <div className='empty-msg-container'>
                <div className='empty-msg'>Your Cart is Empty</div>
                <div>What would you like to Buy ? Pick from our Best Selling Categories</div>
                <Link to={'/'}><button className='startbuy-btn'>Start Buying</button></Link>
            </div>}
        </div>
    )
}
