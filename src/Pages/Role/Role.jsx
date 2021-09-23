import React, { useState } from 'react'
import "./Style.css"
import { DataGrid } from '@material-ui/data-grid';
import DeleteIcon from '@material-ui/icons/Delete';
import { RoleRows } from '../../DummyData/DummyData';
import { Link } from 'react-router-dom';
import ModalRole from './ModalRole';


function Role() {
    const [data, setData] = useState(RoleRows)
    const handleClickDelete=(id)=>{
        setData(data.filter((item)=>item.id !== id))
    }
   
    const columns = [
      
        { field: 'Name', headerName: 'Name ', width: 200 },
        { field: 'CreationDate', headerName: 'Creation Date ', width: 230 },
        { field: 'Permission', headerName: 'Permission ', width: 230 },
        { field: 'OrderStatus', headerName: 'OrderStatus ', width: 300,renderCell:(params)=>{
            return(
                <>
                <Link to={"/EditRole/"+params.row.id}>
               
                <i className="pen far fa-eye"/>
               
                </Link>
                    <DeleteIcon className="BtnListDelete" onClick={()=>handleClickDelete(params.row.id)}/>                   
                </>    
            )
        } },
      ]  
    return (
        <div className="userList">
            <div className="BrandsbtnGroup">
            <div>
            </div>
           <ModalRole/>
            
        </div>
            <div className="UserListTable">
                <DataGrid 
                rows={data}
                columns={columns} 
                pageSize={12}
                disableSelectionOnClick     
                autoHeight
                    />    
        </div>
        </div>
    )   
   
}

export default Role
