import React, { useState } from 'react'
import "./PickUp.css"
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@material-ui/data-grid';
import DeleteIcon from '@material-ui/icons/Delete';
import { pickup, UserRows } from '../../DummyData/DummyData';
import { Link } from 'react-router-dom';
import TrackingModal from './Modal';

function MyExportButton() {
    return (
      <GridToolbarContainer >
      
        <GridToolbarExport style={{backgroundColor:'brown',color:'white',padding:5,margin:5,width:100}}/>
        
       
      </GridToolbarContainer>
    );
  }
function PickUp() {
    const [data, setData] = useState(pickup)
    const handleClickDelete=(id)=>{
        setData(data.filter((item)=>item.id !== id))
    }
   
    const columns = [
      
        { field: 'PickUpId', headerName: 'PickUp Id ', width: 200 },
        { field: 'PickUpLocation', headerName: 'PickUp Location ', width: 200 },
        { field: 'ScheduledDate', headerName: 'Scheduled Date ', width: 200 },
        { field: 'PickUpType', headerName: 'PickUp Type ', width: 200 },
        { field: 'Status', headerName: 'Status ', width: 150 },
      

        
        { field: 'action', headerName: 'Action ', width: 300,renderCell:(params)=>{
            return(
                <>
                <Link to={"/EditPickUp/"+params.row.id}>
               
                <i className="fas fa-pen"/>
               
                </Link>
                    <DeleteIcon className="BtnListDelete" onClick={()=>handleClickDelete(params.row.id)}/>                   
                </>    
            )
        } },
      ]  
    return (
        <div className="userList">
            <div className="BrandsbtnGroup">
                <TrackingModal/>
            <div>
            </div>
          
            
        </div>
            <div className="UserListTable">
                <DataGrid 
                rows={data}
                columns={columns} 
                pageSize={12}
                disableSelectionOnClick     
                autoHeight
                components={{
                    Toolbar: MyExportButton,
                  }}
                  
                    />    
        </div>
        </div>
    )   
   
}

export default PickUp
