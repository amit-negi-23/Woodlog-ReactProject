import React from 'react'
import '../Loading.css'
export default function Loading() {
    return (
        <div>
            <div className="container">
                <div className="loader-container">
                    <div className="ball bg-red"></div>
                    <div className="ball bg-skyblue"></div>
                    <div className="ball bg-green"></div>
                    <div className="ball bg-violet"></div>
                </div>
            </div>
        </div>
    )
}
