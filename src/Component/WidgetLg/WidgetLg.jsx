import { Tamount } from "../../DummyData/DummyData";
import "./WidgetLg.css";
import React, { useState } from 'react'
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@material-ui/data-grid';
import DeleteIcon from '@material-ui/icons/Delete';


function MyExportButton() {
  return (
    <GridToolbarContainer >
    
      <GridToolbarExport style={{backgroundColor:'brown',color:'white',padding:5,margin:5,width:100}}/>
      
     
    </GridToolbarContainer>
  );
}

export default function WidgetLg() {
    const [data, setData] = useState(Tamount)
    const handleClickDelete=(id)=>{
        setData(data.filter((item)=>item.id !== id))
    }
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  const columns = [
    
    { field: 'productname', headerName: 'productname ', width:200, headerClassName: 'super-app-theme--header', cellClassName: 'super-app-theme--cell',  headerAlign: 'center',},
    { field: 'amount', UserName: 'amount ', width: 200 , headerClassName: 'super-app-theme--header', cellClassName: 'super-app-theme--cell'  ,headerAlign: 'center',},
    { field: 'price', headerName: 'price ', width: 200 , headerClassName: 'super-app-theme--header', cellClassName: 'super-app-theme--cell',headerAlign: 'center',},
    { field: 'Totla', headerName: 'Totla ', width: 200 , headerClassName: 'super-app-theme--header', cellClassName: 'super-app-theme--cell',headerAlign: 'center',},
    { field: 'precent', headerName: 'precent ', width: 200 , headerClassName: 'super-app-theme--header', cellClassName: 'super-app-theme--cell',headerAlign: 'center',},
{ field: 'btntype', headerName: 'status', width: 200 ,renderCell:(params)=>{
        return(
               <>
                  <Button  type={params.row.btntype}/>
               </>  
                )  
    }, headerClassName: 'super-app-theme--header'
    },
     { field: 'status', headerName: 'Delete ', width: 220,renderCell:(params)=>{
        return(
            <>
                <DeleteIcon className="BtnListDelete" onClick={()=>handleClickDelete(params.row.id)}/>          
            </>    
        )
    }, headerClassName: 'super-app-theme--header' }
  ]  
  return (
    <div className="WidgetLg" >
      <h3 className="widgetLgTitle">Latest transactions</h3> 
     
      <DataGrid className="DG"
                rows={data}
                columns={columns} 
                pageSize={10}
                disableSelectionOnClick 
                autoHeight
                checkboxSelection
                
                components={{
                  Toolbar: MyExportButton,
                  
                }}
                    />    
    </div>
  );

}