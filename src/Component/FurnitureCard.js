import React from 'react'

export default function FurnitureCard({ item }) {
  return (
    <div className='furniture-card-in'>
      <img src={item.image} className="furniture-img" alt='sofa' />
      <div className="furniture-card-body">
        <h4 className="furniture-card-title">{item.title}</h4>
        <div className="brand-name">{item.brand}</div>
        <div className="product-rating">rating{item.rating}</div>
        <div className="todays-deal">Todays Deal</div>
        <div className="current-price">
          <span><strong>₹{item.price.sell}</strong></span>
          <span><s>₹{item.price.mrp}</s></span>
        </div>
        <div className="price-savings">
          <span>You Save ₹{item.discount.price}</span>
          <span className="percent-off">{item.discount.percent}</span>
        </div>
        <div className="extra-saving">{item.extraoffer}</div>
        <div className="shipping-status">{item.shipping}</div>
      </div>
    </div>
  )
}

