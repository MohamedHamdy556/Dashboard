import React from 'react'
import './style.css'

function NavBar() {
    return (
        <div className="NavBar">
         <div className="NavBarWrapper">
             <div className="Logoside">
               <h3> <span className="deco">3</span>MP</h3>
             </div>
             <div className="SearchSide">
             <i className="fas fa-search"/> 
                <input type="search" placeholder="Search"/>
             </div>
             <div className="RightSide">
                 
                LogOut<i class="fas fa-sort-down"/>
             </div>
         </div>
          
        </div>
    )
}

export default NavBar
