
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import CategoryModal from "./Modal";
import './Style.css'

const Catregories = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      getData()
    }, [])
   
     async function deleteOperation(id) {
      let result=await fetch("http://127.0.0.1:8000/api/categorydelete/"+id,{
        method:"DELETE" 
      });
      result=await result.json();
      getData();
     }
     async function getData() {
      let result=await fetch("http://127.0.0.1:8000/api/catelist")
      result=await result.json();
      setData(result)
      
       
     }
    
    return (
        <div className="Brands">
        <div className="BrandsbtnGroup">
            <div>
            </div>
            <CategoryModal/>
        </div>
        <div className="BrandTable">
        <Table  bordered>
  <thead>
    <tr>
      <th style={{width:200}}>Category Name</th>
      <th>Order</th>
      <th style={{width:200}}>SubCategories </th>
      <th>Creation Date</th>
      <th>Creator</th>

      <th style={{width:200}}>Action</th>
    </tr>
  </thead>
 

  
  <tbody>
     {
     data.map((item)=>
    <tr>
      
      <td className="tabletext">{item.category_name}</td>
      <td className="tabletext">{item.orders}</td> 
      <td className="tabletext">{item.subcategory}</td>
      <td className="tabletext">{item.creaton_date}</td>
      <td className="tabletext">{item.Creator}</td>
     
   
      <td className="tableicons">
        <i onClick={()=>deleteOperation(item.id)} style={{cursor:"pointer",color:'brown'}} class="icon fas fa-trash"/><i class="icon far fa-edit"/></td>
    </tr>
     )}
  </tbody>
 
</Table>
    </div>
    </div>
    )
}

export default Catregories
