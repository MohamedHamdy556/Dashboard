import React from 'react'
import Uploadbtn from '../uploadbtn/uploadbtn'
import './style.css'

function SideBar() {
    return (
        <div className="sidebar">
     <div className="SideBarWrapper">
         <div className="SideBarMenu">
             <h3 className="SideBarTitle">DashBoard</h3>
             <ul className="SideBarList">
                 <li className="SideBarListItem">
                 <i class="fas fa-home"/>
                     Home
                 </li>
                 <li className="SideBarListItem">
                 <i class="fas fa-users"/>
                     New ShipMent
                 </li>
                 <li className="SideBarListItem">
                 <i class="fas fa-user-lock"/>
                     Transport Click
                 </li>
             </ul>
             <br/>
             <br/>
             <br/>
             <br/>

             <h3 className="SideBarTitle">Tracking</h3>
             <ul className="SideBarList">
                 <li className="SideBarListItem">
                 <i class="fas fa-home"/>
                     Billing & Payment
                 </li>
             </ul>
             <br/>
             <br/>
             <br/>
             <br/>

             <h3 className="SideBarTitle">Zone</h3>
             <ul className="SideBarList">
                 <li className="SideBarListItem">
                 <i class="fas fa-home"/>
                     WareHouse
                 </li>
                 <li className="SideBarListItem">
                 <i class="fas fa-home"/>
                     Drivers
                 </li>

                 <li className="SideBarListItem">
                 <i class="fas fa-home"/>
                     Zones
                 </li>

                 <li className="SideBarListItem">
                 <i class="fas fa-home"/>
                     Users
                 </li>

                 <li className="SideBarListItem">
                 <i class="fas fa-home"/>
                     Tracks
                 </li>

             </ul>

         </div>  
         
<Uploadbtn/>
     </div>

        </div>
    )
}

export default SideBar
