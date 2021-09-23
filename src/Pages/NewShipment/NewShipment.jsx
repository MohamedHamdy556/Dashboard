import React, { useEffect, useState } from 'react'
import "./NewShipment.css"
import Examples from '../Modal/Modal';
import { Link } from 'react-router-dom';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@material-ui/data-grid';
function MyExportButton() {
    return (
      <GridToolbarContainer >
      
        <GridToolbarExport style={{backgroundColor:'brown',color:'white',padding:5,margin:5,width:100}}/>
        
       
      </GridToolbarContainer>
    );
  }
  function NewShipment() {
      const [data, setData] = useState([])
  
  
  
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
      
        
    
        const columns = [
    
       
          { field: "name", headerName: "ID", width: 200 },
          { field: "email", headerName: "Order",width:250},
          { field: "password", headerName: "Phone", width: 200 },
          { field: "role", headerName: "Cost", width: 200},
          {
            field: "Action",
            headerName: "Action",
            width: 170,
            renderCell: ({id}) => {
              
              return (
                <>
                
       <i onClick={()=>deleteOperation(id)} style={{color:'brown',cursor:"pointer"}}  class="icon fas fa-trash"/>
       <Link to={"user/" + id}>
       <i style={{color:'green',cursor:"pointer"}} class="icon far fa-edit"/>
       </Link>
       </>
        
      
              );
            },
          },
        ];
      
     
      return (
<div className="NewShipment">
              <div className="BrandsbtnGroup">
              <div className="dropdowngroup">
                  <div className="ShipmentDropdown">
              <select className="newShipmentSelect" placeholder="..." >
                 <option  >----</option>
              </select>
</div>
<div className="ShipmentDropdown">
            <select className="newShipmentSelect" placeholder="..." >
              <option>Courier ID</option>
            </select>
 
</div>
<div className="ShipmentDropdown">
            <select className="newShipmentSelect" placeholder="..." >
            <option>Track</option>
            </select>
</div>
<div className="ShipmentDropdown">
            <select className="newShipmentSelect" placeholder="..." >
            <option>WareHouse</option>
            </select>
</div>
            </div>
            
           <button className="btn btn-outline-danger">Done</button>
              
          </div>
         
             
          <DataGrid
       
        rows={data}
        columns={columns} 
        pageSize={10}
        disableSelectionOnClick     
        autoHeight
        components={{
          Toolbar: MyExportButton,
          
        }}
        />
          </div>
      )   
     
  }

export default NewShipment
