import React, {useContext } from 'react'
import './Cart.css'
import { CartContext } from '../App'
import { String } from '../Store/String'
import { Link } from 'react-router-dom'

export default function Cart() {
    const {store: {products},dispatch} = useContext(CartContext)

   
    const removeProduct= (product)=>{
        console.log(product)
        dispatch({type: String.REMOVE_PRODUCT, payload: {id:product.productId}})
    }
  return (
    <div>
        {(products.length!==0)?<div className='table-container'><table>
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
                {products.map((product,index)=>{
                    return(
                        <tr>
                        <td>{index+1}</td>
                        <td className='img-td'><img src={product.image} alt='product'/></td>
                        <td>{product.title}</td>
                        <td>{product.brand}</td>
                        <td>{product.shipping}</td>
                        <td><s>₹{product.price.mrp}</s></td>
                        <td>₹{product.discount.price}</td>
                        <td>{product.discount.percent}</td>
                        <td className='selling-price'>₹{product.price.sell}</td>
                        <td><button  onClick={()=>{removeProduct(product)}}>Remove</button></td>
                    </tr>
                    )
                })}
                </tbody>
            </table></div>:<div className='empty-msg-container'>
                <div className='empty-msg'>Your Cart is Empty</div>
                <div>What would you like to Buy ? Pick from our Best Selling Categories</div>
                <Link to={'/'}><button className='startbuy-btn'>Start Buying</button></Link>
            </div>}
    </div>
  )
}
