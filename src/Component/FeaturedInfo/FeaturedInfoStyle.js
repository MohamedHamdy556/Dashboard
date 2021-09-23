import styled from "styled-components"

export const Featured=styled.div
`
    width: 100%;
   
   
    display: grid;
    grid-template-columns: 400px 400px 400px ;
    
  
  
    justify-content: space-evenly;
    @media screen and (max-width: 992px) {
        display: flex;
        flex-direction: column;
    }
   
`
export const FeaturedItem=styled.div
` 

    flex: 1;
    margin: 0px 20px;
    padding: 20px;
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    border-radius: 10px;
    margin-top: 20px;
    display: grid;
    
   
   `

   export const FeaturedTitle=styled.span
   `
    font-size: 18px;
    font-weight: 800;
    `
    export const FeaturedMoneyContainer=styled.div
    `
    display: flex;
    margin: 10px 0px;
    align-items: center;
`
export const FeaturedMoney=styled.span
`
    font-size: 18px;
    font-weight: 600;
`
export const FeaturedMoneyRate=styled.span
`
    font-size: 15px;
    font-weight: 600;
    margin-left: 20px;
    color: red;
`

export const FeaturedSub=styled.span
`
    font-size: 15px;
    color: gray;
    font-weight: 500;
`
export const Red=styled.p
`
    color: red;
`
export const Green=styled.p
`
    color: green;
`
