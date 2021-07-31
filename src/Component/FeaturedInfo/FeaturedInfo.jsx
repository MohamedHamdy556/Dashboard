import React from 'react'
import './FeaturedInfo.css'

function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3000</span>
                    <span className="featuredMoneyRate">
                        -9.6 <i class="fas fa-long-arrow-alt-down"/>
                    </span>
                </div>
                <span className="featuredSub">Compared To Last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4000</span>
                    <span className="featuredMoneyRate">
                        -98.6 <i class="fas fa-long-arrow-alt-down"/>
                    </span>
                </div>
                <span className="featuredSub">Compared To Last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$5000</span>
                    <span className="featuredMoneyRateCost">
                        +16.6 <i class="fas fa-long-arrow-alt-up"/>
                    </span>
                </div>
                <span className="featuredSub">Compared To Last Month</span>
            </div>
            
        </div>
    )
}

export default FeaturedInfo
