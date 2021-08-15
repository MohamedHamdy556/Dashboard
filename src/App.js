import './App.css';
import NavBar from './Component/NavBar/Index';
import SideBar from './Component/SideBar/Index';
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


function App() {
  return (
     <Router>
       <div className="App">
      <NavBar/>
      <div className="container">
     
      <NewSideBar/>
          <Switch>
      <Route exact path="/">
          <Home/>
      </Route>
      <Route path="/users">
          <UserList/>
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
          <Route path="/Catregories">
            <Catregories />
          </Route>
          
         </Switch>   

      </div>
    </div>
    </Router>
  );
}

export default App;
