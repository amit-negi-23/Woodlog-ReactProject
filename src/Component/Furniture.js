import React, { useEffect, useState } from 'react'
import '../furnitureCard.css'
import FurnitureCard from './FurnitureCard'
import { Link, useParams } from 'react-router-dom'
import Loading from './Loading'

export default function Furniture() {
  const [categoryData, setcategoryData] = useState()
  const { category } = useParams()
  const [categoryOffer, setcategoryOffer] = useState()
  const [brands, setBrand]=useState()
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/amit-negi-23/Fake-Server/main/" + category + ".json")
      .then(res => res.json())
      .then(data => { setcategoryData(data) })
  }, [category])

  useEffect(()=>{
      fetch("https://raw.githubusercontent.com/amit-negi-23/Fake-Server/main/" + category + "Offer.json")
      .then(res => res.json())
      .then(data => {setcategoryOffer(data)})
  },[category])
  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/amit-negi-23/Fake-Server/main/" + category + "TopBrand.json")
    .then(res=>res.json())
    .then(data=>{setBrand(data)})
  },[category])
  return (
    <>
    <section class="furniture-offer-section">
            <div class="furniture-offer-card-container">
                {(brands!=null)?<div class="furniture-brands-offer">
                        <img src={brands.allBrand} alt='offer'/>
                </div>:'loading'}
                {(categoryOffer!=null)?categoryOffer.map((item)=>{
                  
                  return(
                    <Link to={'/'+category+ '/'+item.productId}>
                    <div class="furniture-offer-cards">
                        <img src={item.image} class="furniture-img" alt='off'/>
                        <div class="furniture-offer-card-body">
                            <h4 class="furniture-offer-card-title">{item.title}</h4>
                            <div>
                                <span><strong>₹{item.price.sell}</strong></span>
                                <span className='mrp'><s>₹{item.price.mrp}</s></span>
                                <span class="percent-off">{item.discount.percent}</span>
                            </div>
                        </div>
                    </div>
                </Link>
                  )
                }):<>Loading in process, Please wait.....</>}
            </div>
        </section>
    <section id='furniture-card-section'>
      <div className="furniture-cards-container">
        {(categoryData != null) ? categoryData.map((item) => {
          return (
            <div className="furniture-card" key={item.id}>
              <Link to={'/' + category + '/' + item.productId}><FurnitureCard key={item.id} item={item} /></Link>
            </div>
          )
        }) : <div><Loading /></div>}
      </div>
    </section>
</>
  )
}
