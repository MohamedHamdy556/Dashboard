import "./productList.css";
import { DataGrid, GridToolbarContainer, GridToolbarExport } from "@material-ui/data-grid";
import DeleteIcon from '@material-ui/icons/Delete';
import { productRows } from "../../DummyData/DummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductModal from "./Modal";

function MyExportButton() {
  return (
    <GridToolbarContainer >
    
      <GridToolbarExport style={{backgroundColor:'brown',color:'white',padding:5,margin:5,width:100}}/>
      
     
    </GridToolbarContainer>
  );
}

export default function ProductList() {
  const [data, setData] = useState(productRows);


  useEffect(() => {
    getData();
   }, [])
   async function deleteOperation(id) {
     let result=await fetch("http://127.0.0.1:8000/api/userdelete/"+id,{
       method:"DELETE" 
     });
     result=await result.json();
     getData();
    }
    async function getData() {
     let result=await fetch("http://127.0.0.1:8000/api/userslist")
     result=await result.json();
     setData(result)
    }

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
  
    { field: "sku", headerName: "SKU", width: 200},
    { field: "name", headerName: "ProductName", width: 200 },
    { field: "email", headerName: "Category > Sub Category",width:250},
    { field: "stock", headerName: "Stock", width: 200 },
    
    {
     
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
            <i className="pen far fa-eye"></i>
            
            </Link>
            <i className="pen far fa-copy"></i>
            <i className="fas fa-pen"></i>
           
             <DeleteIcon className="BtnListDelete"  onClick={() => handleDelete(params.row.id)}/>     
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <div className="btnGroup">
        <div className="dropdowngroup">
      <div className="dropdown">
        <button className="SelectCat"><i class="fas fa-chevron-down"></i>Select Category</button>
        <div className="dropdown-Category">
        <h4>Mobile</h4>
        <h4>Shoes</h4>
        <h4>Jacket</h4>
        </div>
  </div>
  <div className="dropdown">
        <button className="SelectCat"><i class="fas fa-chevron-down"></i>Select Sub Category</button>
        <div className="dropdown-Category">
        <h4>Mobile</h4>
        <h4>Shoes</h4>
        <h4>Jacket</h4>
        
  </div>
</div>
        </div>
        <div className="Exportgroup">
        <button className="btnP">Export CSV</button>
        <button className="btnP">Import CSV</button>
        <button className="btnP">Emport Stock</button>
        <button className="btnP">Export Stock</button>
        <button className="btnPVariant"><ProductModal/></button>
</div>
      </div>
      
      <div className="productTable" >
      <DataGrid
      
        rows={data}
        columns={columns} 
        pageSize={10}
        disableSelectionOnClick     
        autoHeight
        components={{
          Toolbar: MyExportButton,
        }}
        
      /></div>
   
    </div>
  );
}
