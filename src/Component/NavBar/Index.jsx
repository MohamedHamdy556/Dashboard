import React from 'react'
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './style.css'

function NavBar() {
    return (
      <Navbar bg="dark" expand="lg"  variant="dark"  className="fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/">EVA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link  as={Link}  to="/">Home</Nav.Link>
          
           
            <div className="sidebar"> 
            <NavDropdown title="DashBoard" id="basic-nav-dropdown">
              <NavDropdown.Item> New Shipment</NavDropdown.Item>
              <NavDropdown.Item >Parcels</NavDropdown.Item>
              <NavDropdown.Item >Orders</NavDropdown.Item>
              <NavDropdown.Item > Orders</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Track" id="basic-nav-dropdown">
             
              <NavDropdown.Item as={Link} to="./Tracking">Tracking</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="./PickUp">Pick UP</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Inventory" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/products">
                
                     Products   
               
        </NavDropdown.Item>
              <NavDropdown.Item  as={Link}  to="/Brands">  
             
              Brands   
                
                </NavDropdown.Item>
              <NavDropdown.Item  as={Link}  to="/Brands"> 
                
              Catregories   
             
                </NavDropdown.Item>
            
            </NavDropdown>
            <NavDropdown title="Admin" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Role"> 
                 
                 Role   
                
                 </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Users">
               
                Users   
                </NavDropdown.Item>
              <NavDropdown.Item>  
              
              Reports   
             
                </NavDropdown.Item>
           
            
            </NavDropdown>
            <NavDropdown title="Zones" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/products"> 
                
              Branches   
            
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products"> 
              
                Cities   
             
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products"> 
                   
                   City assembly   
               
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products"> 
             
                Warehouses
              
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products"> 
              
                Drivers
              
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products"> 
                
                Shipping  
             
                </NavDropdown.Item>
            </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>   
    )
}

export default NavBar
