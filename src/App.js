import './App.css';
import NavBar from './Component/NavBar/Index';
import SideBar from './Component/SideBar/Index';
import Home from './Pages/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserList from './Pages/userList/UserList';
import User from './Pages/user/User';
import ProductList from './Pages/productList/ProductList';
import Product from './Pages/product/Product';
import NewProduct from './Pages/newProduct/NewProduct';
import NewUser from './Pages/newUser/NewUser';


function App() {
  return (
     <Router>
       <div className="App">
     
      <NavBar/>
      <div className="container">
      <SideBar/>
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
    
         </Switch>   

      </div>
    </div>
    </Router>
  );
}

export default App;
