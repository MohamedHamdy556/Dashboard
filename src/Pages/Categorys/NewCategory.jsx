import { useState } from "react";
import "./NewCategory.css";

export default function NewCategory() {
  const [cname, setCName] = useState('')
  const [orders, setOrders] = useState('')
  const [subcategory, setSubCategory] = useState('')
  const [creatondate, setCreatonCate] = useState('')
  const [creator, setCreator] = useState('')
 

async function addCategory() {
  let item={cname,orders,subcategory,creatondate,creator}
  console.warn(item)
  const formData=new FormData();
  formData.append('category_name',cname)
  formData.append('orders',orders)
  formData.append('subcategory',subcategory)
  formData.append('creaton_date',creatondate)
  formData.append('Creator',creator)
  let result=await fetch("http://127.0.0.1:8000/api/addcategory",{
    method:'POST',
    body:formData,
  
  })
 
}
  return (
    <div className="newUser">
      <h4 className="newUserTitle">New Category</h4>
      <form className="newUserForm">
        
        <div className="newUserItem">
          <label>category_name</label>
          <input type="text" placeholder="Category" onChange={(e)=>setCName(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>orders</label>
          <input type="text" placeholder="orders" onChange={(e)=>setOrders(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>subcategory</label>
          <input className="textareastyle" placeholder="subcategory" onChange={(e)=>setSubCategory(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>creaton_date</label>
          <input type="date"  onChange={(e)=>setCreatonCate(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Creator</label>
          <input type="text" placeholder="Creator" onChange={(e)=>setCreator(e.target.value)}/>
        </div>
        
        
      
       
        <button onClick={addCategory} className="newUserButton">Create</button>
      </form>
    </div>
  );
}
