import React, { useState } from 'react'
import "./Tracking.css"
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@material-ui/data-grid';
import DeleteIcon from '@material-ui/icons/Delete';
import { TrackingData } from '../../DummyData/DummyData';
import { Link } from 'react-router-dom';
import TrackingModal from './Modal';

function MyExportButton() {
    return (
      <GridToolbarContainer >
      
        <GridToolbarExport style={{backgroundColor:'brown',color:'white',padding:5,margin:5,width:100}}/>
        
       
      </GridToolbarContainer>
    );
  }
function Tracking() {
    const [data, setData] = useState(TrackingData)
    const handleClickDelete=(id)=>{
        setData(data.filter((item)=>item.id !== id))
    }
   
    const columns = [
        { field: 'TrackingCode', headerName: 'Tracking Code ', width: 200 },  
        { field: 'TrackingDate', headerName: 'Last UpDate ', width: 200 },
        { field: 'TrackingName', headerName: ' Customer Info ', width: 200 },
        { field: 'TrackingFrom', headerName: 'Location ', width: 180 },
        { field: 'COD', headerName: 'COD ', width: 130 },
        { field: 'Type', headerName: 'Type ', width: 150 },
        { field: 'status', headerName: 'status ', width: 150 },
      
      
        
        { field: 'action', headerName: 'Action ', width: 300,renderCell:(params)=>{
            return(
                <>
                <Link to={"/TrackingEdit/"+params.row.id}>
               
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

export default Tracking
