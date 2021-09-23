import React, { useEffect, useState } from 'react'
import "./userList.css"
import Examples from '../Modal/Modal';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@material-ui/data-grid';

function MyExportButton() {
  return (
    <GridToolbarContainer >
    
      <GridToolbarExport style={{backgroundColor:'brown',color:'white',padding:5,margin:5,width:100}}/>
      
     
    </GridToolbarContainer>
  );
}
function UserList() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState([])


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
     async function Search(Key) {
       let searchbar=await fetch("http://127.0.0.1:8000/api/search/"+Key)
       searchbar =await searchbar.json();
        setSearch(searchbar)
       
      
       
      }
      
  
      const columns = [
  
     
        { field: "name", headerName: "name", width: 200 },
        { field: "email", headerName: "email",width:250},
        { field: "password", headerName: "password", width: 200 },
        { field: "role", headerName: "role", width: 200},
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
        <div className="userList">
            <div className="BrandsbtnGroup">
            <div>
            </div>
           <Examples/>
            
        </div>
        <div className="Search"> 
        <div className="Bar">
      
            <input className="inputSearch" placeholder="Search" type="search" onChange={(e)=>Search(e.target.value)}/>
            </div>
            <Table  bordered>
  <tbody>
     {
     search.map((item)=>
    <tr>
      
      <td className="tabletext">{item.name}</td>
      <td className="tabletext">{item.email}</td> 
      <td className="tabletext">{item.password}</td>
      <td className="tabletext">{item.role}</td>
     
   
      <td className="tableicons">
       
        </td>
    </tr>

     )}
  </tbody>
 
</Table>
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

export default UserList
