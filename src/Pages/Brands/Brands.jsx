import { useEffect, useState } from "react";
import { BrandsRow } from '../../DummyData/DummyData';
import BrandsModal from "./Modal";

import './Style.css'
import { Table } from "react-bootstrap";

const Brands = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
     getData()
      
    }, [])
    async function deleteOperation(id) {
      let result=await fetch("http://127.0.0.1:8000/api/brandsdelete/"+id,{
        method:"DELETE" 
      });
      result=await result.json();
      getData();
     }
     async function getData() {
      let result=await fetch("http://127.0.0.1:8000/api/list")
      result=await result.json();
      setData(result)
      
       
     }
   
    
    return (

        <div className="Brands">
            <div className="BrandsbtnGroup">
                <div>
                </div>
                <button className="BrandBtn"><BrandsModal/></button>
            </div>
            <div className="BrandTable">
            <Table  bordered>
  <thead>
    <tr>
     
      <th style={{width:200}}>Image</th>
      <th>Brand</th>
      <th>Brand(Ar)</th>
      <th style={{width:200}}>Action</th>
    </tr>
  </thead>
 

  
  <tbody>
     {
     data.map((item)=>
    <tr>
      
      <td className="image"><img src={"http://127.0.0.1:8000/"+item.file_path} alt="" /></td>
      <td className="tabletext">{item.name}</td>
      <td className="tabletext">{item.namear}</td>
      <td className="tableicons"><i style={{color:'brown',cursor:"pointer"}} onClick={()=>deleteOperation(item.id)} class="icon fas fa-trash"/><i class="icon far fa-edit"/></td>
    </tr>
     )}
  </tbody>
 
</Table>
        </div>
        </div>
    )
}

export default Brands
