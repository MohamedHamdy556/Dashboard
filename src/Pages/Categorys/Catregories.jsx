import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';

import { DataGrid } from "@material-ui/data-grid";
import { useState } from "react";
import { CategoryRow } from '../../DummyData/DummyData';
import CategoryModal from "./Modal";
import './Style.css'

const Catregories = () => {
    const [data, setData] = useState(CategoryRow);

   
      const handleClickDelete=(id)=>{
          setData(data.filter((item)=>item.id !== id))
      }
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
            <Link to={"/EditCategory/"+params.row.id}>
            <i className="fas fa-pen"/>

            </Link>
            <DeleteIcon className="BtnListDelete" onClick={()=>handleClickDelete(params.row.id)}/>        
         
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
            <CategoryModal/>
        </div>
        <div className="BrandTable">
        <DataGrid
        
    rows={data}
    disableSelectionOnClick
    columns={columns}
    pageSize={15}
    autoHeight
     />
    </div>
    </div>
    )
}

export default Catregories
