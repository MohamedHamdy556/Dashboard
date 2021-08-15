import { DataGrid } from "@material-ui/data-grid";
import { useState } from "react";
import { CategoryRow } from '../../DummyData/DummyData';
import './Style.css'

const Catregories = () => {
    const [data, setData] = useState(CategoryRow);

 
    const columns = [
  
        { field: "CName", headerName: "Category Name", width: 200},
        { field: "Order", headerName: "Order", width: 200 },
        { field: "SubCategories", headerName: "SubCategories", width: 200 },
        { field: "CDate", headerName: "Creation Date", width: 200 },
        { field: "Creator", headerName: "Creator",width:250},
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
            
            <i className="far fa-eye"></i>
            
         
              </>
            );
          },
        },
      ];
    
    return (
        <div className="Brands">
        <div className="BrandsbtnGroup">
            <div>
            </div>
            <button className="BrandBtn">+ New Category</button>
        </div>
        <div className="BrandTable">
        <DataGrid
        
    rows={data}
    disableSelectionOnClick
    columns={columns}
    pageSize={15}
     />
    </div>
    </div>
    )
}

export default Catregories
