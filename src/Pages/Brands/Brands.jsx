import { DataGrid } from "@material-ui/data-grid";
import { useState } from "react";
import { BrandsRow } from '../../DummyData/DummyData';
import BrandsModal from "./Modal";
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';

import './Style.css'

const Brands = () => {
    const [data, setData] = useState(BrandsRow);
    const handleClickDelete=(id)=>{
      setData(data.filter((item)=>item.id !== id))
  }
 
    const columns = [
  
        { field: "image", headerName: "Image", width: 200,renderCell:(params)=>{  
            return(    
                <div className="BrandListImg">
                    <img className="BrandListImg" src={params.row.image} alt="" /> 
                </div>     
            )
       
        }},
        { field: "Name", headerName: "Name", width: 200 },
        { field: "NameAr", headerName: "Name Ar",width:250},
        
        {
         
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>

               <Link to={"/EditBrand/"+params.row.id}>
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
                <button className="BrandBtn"><BrandsModal/></button>
            </div>
            <div className="BrandTable">
            <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        rowHeight={110}
        autoHeight
     
         />
        </div>
        </div>
    )
}

export default Brands
