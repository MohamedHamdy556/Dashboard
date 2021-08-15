import React from 'react'
   import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import './Style.css'
const NewSideBar = () => {
    return (
        <div className="NewSideBarBar">
        <ProSidebar>
         <Menu >
    <MenuItem > DashBoard
    <Link to="/" className="link"></Link>
    </MenuItem>

    <SubMenu icon={<i className="fas fa-home"/>} title="Inventory" >
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
     <MenuItem> 
     <Link
     to="/users"
     className="link">
                 <li className="SideBarListItem">
                
                     Users
                 </li>
    </Link>
    </MenuItem>
    </SubMenu>
    
    
  </Menu>
  
</ProSidebar>
        </div>
    )
}

export default NewSideBar
