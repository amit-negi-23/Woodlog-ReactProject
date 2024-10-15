import React, { useEffect, useState, useContext } from 'react'
import '../FurnitureDetail.css'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import { CartContext } from '../App'
import { String } from '../Store/String'

export default function FurnitureDetail() {
    const { product,category , offerproduct} = useParams()
    const [productData, setProductData] = useState()
    const {dispatch} = useContext(CartContext)
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/amit-negi-23/Server/main/furniture.json")
            .then(res => res.json())
            .then(data => {
                if(product){
                    setProductData((data[category].filter((item) =>item.productId ===product))[0])
                }else if (offerproduct){
                    setProductData((data.furnitureOffer[category].filter((item) =>item.productId ===offerproduct))[0])

                }
            })
    }, [category,product,offerproduct])

    const addProduct= ()=>{
        dispatch({type:String.ADD_PRODUCT, payload: {newProduct: {...productData,quantity:1}}})
    }

    const buyProduct = ()=>{
        alert("Currently you can't buy");
    }

    return (
        <section className="furniture-details-section">
            {(productData!=null)?<div className="detail-furniture-card">
                <div className="detail-furniture-img">
                    <img src={productData.image}
                        alt="furniture" />
                </div>
                <div className="detail-furniture-card-body">
                    <h1 className="detail-furniture-card-title">{productData.title}</h1>
                    <div className="detail-brand-name">{productData.brand}</div>
                    <div className="detail-product-rating">Rating {productData.rating}</div>
                    <hr />
                    <div className="detail-furniture-price">
                        <div className="mrp-price">
                            <div className="">MRP</div>
                            <div className=""><s>₹{productData.price.mrp}</s></div>
                        </div>
                        <div className="offer-price">
                            <div className="">Offer price</div>
                            <div className="">₹11,117[Retail Discount ₹4,882]</div>
                        </div>
                    </div>
                    <div className="detail-todays-deal">
                        <div className="today-deal-detail">Todays Deal</div>
                        <div className="">
                            <span><strong>₹{productData.price.sell}</strong></span>
                            <span>[Coupon Discount  ₹218]</span>
                            <div>EMI from ₹1,489/month</div>
                        </div>
                    </div>
                    <hr />
                    <div className="detail-price-savings">
                        <div className="">You Saving</div>
                        <div className="">
                            <div>
                                <span>₹{productData.discount.price}</span>
                                <span className="detail-percent-off">{productData.discount.percent}</span>
                            </div>
                            <div>[₹4,882 Retail Discount + ₹218 Today’s Deal]</div>
                            <div className="detail-extra-saving">{productData.extraoffer}</div>
                        </div>
                    </div>
                    <hr />
                    <div className="detail-shipping-status">{productData.shipping}</div>
                    <button className="addtocart-btn" onClick={addProduct}>ADD TO CART</button>
                    <button className="buynow-btn" onClick={buyProduct}>BUY NOW</button>
                </div>


            </div>:<><Loading/></>}
        </section>
    )
}
