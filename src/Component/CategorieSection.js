import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CategorieSection() {
    const [shop, setShop] = useState()
    const [care, setCare] = useState()
    const [bestSell, setBestSell] = useState()

    // useEffect(() => {
    //     fetch("https://raw.githubusercontent.com/amit-negi-23/Server/main/furniture.json")
    //         .then(res => res.json())
    //         .then(data => { setShop(data.shop); setCare(data.takecare); setBestSell(data.bestSeller) })
    // }, [])



    useEffect(() => {
        fetch("https://raw.githubusercontent.com/amit-negi-23/Fake-Server/main/furniture.json")
            .then(res => res.json())
            .then(data => { setShop(data.shop); setCare(data.takecare); setBestSell(data.bestSeller) })
    }, [])

    return (
        <div>
            <div id="hero-sec">
                <img src="https://ii1.pepperfry.com/assets/w23-pf-modular-page-banner-1280.jpg" alt="" />
            </div>
            <section id="furniture-shop-section">
                <h2>Shop By Categories</h2>
                <div className="furniture-shop-container">
                    {(shop != null) ? shop.map((item) => {
                        return (<div key={item.id}>
                            <Link to={'/' + item.pathname}><div className="furniture-shop-cards">
                                <img src={item.image} className="furniture-img" alt='furniture' />
                                <div className="furniture-shop-card-body">
                                    <h3 className="furniture-shop-card-title">{item.product}</h3>
                                </div>
                            </div></Link>
                        </div>)
                    }) : <div><h2>loading.....</h2></div>}
                </div>
            </section>
            <section className="furniture-care-section">
                <h2>Care For Your Furniture</h2>
                <div className="furniture-care-container">
                    {(care != null ? <> <div key={1} className="furniture-care"><img src={care.stainRemover} alt='fur' />
                    </div>
                        <div key={2} className="furniture-care"><img src={care.furnitureCare} alt='fur' />
                        </div></> : <></>)}
                </div>
            </section>


            <section className="furniture-best-seller-section">
                <h2>Shop Best Sellers</h2>
                <div className="furniture-best-seller-container">
                    {(bestSell != null) ? bestSell.map((item) => {
                        
                        return (
                            <Link key={item.pathname} to={'/'+item.pathname}>
                                <div className="furniture-best-seller-cards">
                                    <img src={item.image}
                                        className="furniture-img" alt='fur' />
                                    <div className="furniture-best-seller-card-body">
                                        <h3 className="furniture-best-seller-card-title">{item.product}</h3>
                                    </div>
                                </div>
                            </Link>
                        )
                    }) : <><h2>loading.....</h2></>}

                </div>
            </section>

            <section className='sale-discount-section'>
                <div className='sale-discount-container'>
                    <div><img src='https://ii1.pepperfry.com/assets/3c7308b7-afe8-4992-b29a-24c43ae9c780.jpg'  alt='discount' /></div>
                    <div><img src='https://ii1.pepperfry.com/assets/8432fff0-e21d-4556-9134-6f899807ec92.jpg'  alt='discount' /></div>
                </div>
            </section>
        </div>
    )
}
