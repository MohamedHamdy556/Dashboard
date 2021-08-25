import React, { useState } from 'react'
   import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import './Style.css'
const NewSideBar = () => {
    
    const [collapsed, setcollapsed] = useState('')
  
    
    return (
        <div className="NewSideBarBar">
        <ProSidebar className="ProSide" collapsed={collapsed} >
       
         <Menu >

             <MenuItem className="SideBarMainIcon" onClick={()=>setcollapsed(!collapsed)} icon={<i class="fas fa-bars"/>}></MenuItem>
             <MenuItem icon={   <i className="fas fa-home"/>}> 
      <Link
       to="/"
       className="link">
                 <li className="SideBarListItem">
               
                     Home
                 </li>
        </Link>    
        </MenuItem>

    <MenuItem > 
    <Link to="/" className="link"></Link>
    </MenuItem>
    <SubMenu icon={ <i class="fas fa-tachometer-alt"/>} title="DashBoard" >
      <MenuItem> 
                 <li className="SideBarListItem">
                     New Shipment
                 </li>
        </MenuItem>
        <MenuItem> 
                 <li className="SideBarListItem">
                     Parcels
                 </li>
        </MenuItem>
        <MenuItem> 
                 <li className="SideBarListItem">
                     Orders
                 </li>
        </MenuItem>
        <MenuItem> 
                 <li className="SideBarListItem">
                     Customer
                 </li>
        </MenuItem>
        
     
    
    </SubMenu>
    <br/>
    <SubMenu icon={<i class="fas fa-truck-loading"/>} title="Track" >
      <MenuItem> 
      <Link to="/Tracking" className="link">
                 <li className="SideBarListItem">
                 Tracking
                 </li>
                 </Link>
        </MenuItem>
        <MenuItem> 
        <Link to="/PickUp" className="link">
        
                 <li className="SideBarListItem">
                     Pick UP
                 </li>
                 </Link>
        </MenuItem>
       
     
    
    </SubMenu>
    <SubMenu icon={<i class="fas fa-warehouse"/>} title="Inventory" >
      <MenuItem> 
      <Link
       to="/products"
       className="link">
                 <li className="SideBarListItem">
                     Products
                 </li>
        </Link>    
        </MenuItem>
      <MenuItem> 
      <Link
       to="/Brands" 
       className="link">
                 <li className="SideBarListItem">
                     Brands
                 </li>
       </Link>
       </MenuItem>
      <MenuItem>
      <Link to="/Catregories" className="link">
                 <li className="SideBarListItem">
                 Catregories
                 </li>
                 </Link>
     </MenuItem>
    
    </SubMenu>
    
    <SubMenu icon={<i class="far fa-user"/>} title="Admin" >
      <MenuItem> 
      <Link
       to="/Role" 
       className="link">
                 <li className="SideBarListItem">
                     Role
                 </li>
       </Link>
        </MenuItem>
        <MenuItem> 
        <Link
            to="/users"
            className="link">
                 <li className="SideBarListItem">
                     Users
                 </li>
             </Link>
        </MenuItem>
        <MenuItem icon={<i class="far fa-flag"/>}> 
                 <li className="SideBarListItem">
                     Reports
                 </li>
        </MenuItem>
       
     
    
    </SubMenu>
    <SubMenu icon={<i class="fas fa-cog"/>} title="Setting" >
      <MenuItem> 
            Zones
        </MenuItem>
        <MenuItem> 
        Branches
        </MenuItem>
        <MenuItem> 
                    Cities
        </MenuItem>
        <MenuItem> 
                    City assembly
        </MenuItem>
        <MenuItem> 
                    Warehouses
        </MenuItem>
        <MenuItem> 
                    Drivers
        </MenuItem>
        <MenuItem> 
                    Shipping
        </MenuItem>
       
    </SubMenu>
    <MenuItem icon={<i class="far fa-flag"/>}> 
                 <li className="SideBarListItem">
                     Reports
                 </li>
        </MenuItem>
    
  </Menu>
  
</ProSidebar>
        </div>
    )
}

export default NewSideBar
