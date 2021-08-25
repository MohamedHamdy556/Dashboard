import './App.css';
import NavBar from './Component/NavBar/Index';
import Home from './Pages/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UserList from './Pages/userList/UserList';
import User from './Pages/user/User';
import ProductList from './Pages/productList/ProductList';
import Product from './Pages/product/Product';
import NewProduct from './Pages/newProduct/NewProduct';
import NewUser from './Pages/newUser/NewUser';
import Brands from './Pages/Brands/Brands';
import Catregories from './Pages/Categorys/Catregories';
import NewSideBar from './Component/NewSideBar/NewSideBar';
import Role from './Pages/Role/Role';
import EditRole from './Pages/Role/EditRole';
import EditCategory from './Pages/Categorys/EditCategory';
import EditBrand from './Pages/Brands/EditBrand';
import { Container } from 'react-bootstrap';
import Tracking from './Pages/Tracking/Tracking';
import TrackingEdit from './Pages/Tracking/TrackingEdit';
import PickUp from './Pages/PickUp/PickUp';
import EditPickUp from './Pages/PickUp/EditPickUp';


function App() {
  return (
     <Router>
      <NavBar/>  
        <NewSideBar/>
      <Container style={{marginTop:30}}>
     
          <Switch>
      <Route exact path="/">
          <Home/>
      </Route>
      <Route path="/users">
          <UserList/>
      </Route>
      <Route path="/Role">
      <Role/>
      </Route>
      <Route path="/EditRole/:RoleId">
      <EditRole/>
      </Route>
     
    
      <Route path="/user/:userId">
          <User/>
      </Route>
      <Route path="/newUser">
            <NewUser />
          </Route>
      <Route path="/products">
          <ProductList/>
      </Route>
      <Route path="/product/:productId">
          <Product/>
      </Route>
      <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/Brands">
            <Brands />
          </Route>
          <Route path="/EditBrand">
            <EditBrand/>
          </Route>

         
          <Route path="/Catregories">
            <Catregories />
          </Route>
          <Route path="/EditCategory">
            <EditCategory />
          </Route>
          <Route path="/Tracking">
            <Tracking />
          </Route>
          <Route path="/TrackingEdit/:TrackingId">
          <TrackingEdit/>  
      </Route>
      <Route path="/PickUp">
            <PickUp />
          </Route>
          <Route path="/EditPickUp/:EditPickUpId">
          <EditPickUp/>  
      </Route>
          
          
          
         </Switch>   

      </Container>
   
    </Router>
  );
}

export default App;
