import React from 'react'
import './FeaturedInfo.css'
import {stocker} from'../../DummyData/DummyData'

function FeaturedInfo() {
    return (
        <div className="featured">
             {stocker.map((data, key) => {
          return ( 
          <div className="featuredItem">
              <div key={key}>
           
                <span className="featuredTitle">{data.featuredTitle}</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">${data.featuredMoney}</span>
                    <span className="featuredMoneyRate">
                   
                    {data.back <0 ?(
                        <p className="coin-precent red">
                            {data.back}%  
                            <i className="fas fa-long-arrow-alt-down"/>
                        </p>
                      
                    ):(
                        <p className="coin-precent green">
                            {data.back}%
                            <i className="fas fa-long-arrow-alt-up"/>
                        </p>
                    )}    
                </span> 
                </div>
                
                <span className="featuredSub">Compared To Last Month</span>
                
                </div>
             </div> 
            );
                })} 
           
            
        </div>
    )
}

export default FeaturedInfo
