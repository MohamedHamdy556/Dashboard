import React, { useState } from 'react'
import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import DeleteIcon from '@material-ui/icons/Delete';
import { UserRows } from '../../DummyData/DummyData';
import { Link } from 'react-router-dom';


function UserList() {
    const [data, setData] = useState(UserRows)
    const handleClickDelete=(id)=>{
        setData(data.filter((item)=>item.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'PIC', headerName: 'PIC ', width: 230 ,renderCell:(params)=>{
            return(
                <div className="UserListuser">
                    <img className="UserListImg" src={params.row.avatar} alt="" />
                    {params.row.UserName}
                </div>
            )
        }},
        { field: 'Email', headerName: 'Email ', width: 230 },
        { field: 'Transaction', headerName: 'Transaction ', width: 230 },
        { field: 'status', headerName: 'status ', width: 130 },
        { field: 'action', headerName: 'Action ', width: 300,renderCell:(params)=>{
            return(
                <>
                <Link to={"/user/"+params.row.id}>
                <button className="BtnListEdit">Edit</button>
                </Link>
                    <DeleteIcon className="BtnListDelete" onClick={()=>handleClickDelete(params.row.id)}/>                   
                </>
                
                
            )
        } },


       
      ];
      
     
      
    return (
        <div className="userList">
                  <DataGrid rows={data} columns={columns} pageSize={12} checkboxSelection disableSelectionOnClick />

        </div>
    )
}

export default UserList
