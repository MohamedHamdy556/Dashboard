import React from 'react'
import {stocker} from'../../DummyData/DummyData'
import { Featured,
         FeaturedItem,
         FeaturedMoney,
         FeaturedMoneyContainer,
         FeaturedMoneyRate,
         FeaturedSub,
         FeaturedTitle,
         Green, Red } from './FeaturedInfoStyle';

function CardsInfo() {
    return (
        <Featured>
             {stocker.map((data, key) => {
          return ( 
          <FeaturedItem>
              <div key={key}>
           
                <FeaturedTitle>{data.featuredTitle}</FeaturedTitle>
                <FeaturedMoneyContainer>
                    <FeaturedMoney>${data.featuredMoney}</FeaturedMoney>
                    <FeaturedMoneyRate>
                   
                    {data.back <0 ?(
                        <Red>
                            {data.back}%  
                            <i className="fas fa-long-arrow-alt-down"/>
                        </Red>
                      
                    ):(
                        <Green>
                            {data.back}%
                            <i className="fas fa-long-arrow-alt-up"/>
                        </Green>
                    )}    
                </FeaturedMoneyRate> 
                </FeaturedMoneyContainer>
                
                <FeaturedSub>Compared To Last Month</FeaturedSub>
                
                </div>
             </FeaturedItem> 
            );
                })} 
           
            
        </Featured>
    )
}

export default CardsInfo
