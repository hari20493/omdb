import React from 'react'
export default function Trending({ trending }) {
    // iterate through the trending array and display trending items in a div tag
    return (
        <div className="trending">
            <h2>Trending</h2>
            <div className="trending-items">
                {trending.map((item, index) => {
                    return (
                        <div key={index} className="trending-item">
                            <img src={item.image} alt={item.title} />
                            <div className="trending-item-info">
                                <h3>{item.title ? item.title : item.name}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )


}
