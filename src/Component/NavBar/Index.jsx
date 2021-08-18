import { Language, NotificationsNone, Settings } from '@material-ui/icons'
import React from 'react'
import './style.css'

function NavBar() {
    return (
        <div className="NavBar">
         <div className="NavBarWrapper">
             <div className="Logoside">
               <h2> <span className="deco">E</span>VA</h2>
             </div>
             
             <div className="topRight">
                 
             <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="" alt="pic" className="topAvatar" />
        
             </div>
         </div>
          
        </div>
    )
}

export default NavBar
