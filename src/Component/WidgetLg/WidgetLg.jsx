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
    
    { field: 'productname', headerName: 'productname ', width: 200 },
    { field: 'amount', UserName: 'amount ', width: 130 },
    { field: 'price', headerName: 'price ', width: 130 },
    { field: 'Totla', headerName: 'Totla ', width: 150 },
    { field: 'precent', headerName: 'precent ', width: 130 },
{ field: 'btntype', headerName: 'status', width: 120 ,renderCell:(params)=>{
        return(
               <>
                  <Button  type={params.row.btntype}/>
               </>  
                )  
    }
    },
     { field: 'status', headerName: 'Delete ', width: 120,renderCell:(params)=>{
        return(
            <>
                <DeleteIcon className="BtnListDelete" onClick={()=>handleClickDelete(params.row.id)}/>          
            </>    
        )
    } }
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
                components={{
                  Toolbar: MyExportButton,
                  
                }}
               
                autoHeight
            
         
                           
                    />    
    </div>
  );

}