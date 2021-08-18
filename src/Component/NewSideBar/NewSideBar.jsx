import React from 'react'
   import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import './Style.css'
const NewSideBar = () => {
    
   
    
    return (
        <div className="NewSideBarBar">
        <ProSidebar className="ProSide">
       
         <Menu > 
             <MenuItem> 
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
    <SubMenu icon={<i className="fas fa-home"/>} title="DashBoard" >
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
                 <li className="SideBarListItem">
                 Tracking
                 </li>
        </MenuItem>
        <MenuItem> 
                 <li className="SideBarListItem">
                     Pick UP
                 </li>
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
        <MenuItem> 
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
    <MenuItem> 
  
                   Reports
                   </MenuItem>
    
  </Menu>
  
</ProSidebar>
        </div>
    )
}

export default NewSideBar
