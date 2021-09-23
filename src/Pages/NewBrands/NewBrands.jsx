import { useState } from "react";
import "./Style.css";

export default function NewBrands() {
  const [file, setFile] = useState('')
  const [name, setName] = useState('')
  const [namear, setNameAr] = useState('')

  async function addBrand(){
   console.warn(file,name,namear)
   const formData=new FormData();
   formData.append('file',file)
   formData.append('name',name)
   formData.append('namear',namear)
   let result=await fetch("http://127.0.0.1:8000/api/addbrand",{
    method:'POST',
    body:formData
   
   })
  
   
  }
  return (
    <div className="newUser">
    
      <form className="newUserForm"> 
      <h4 className="newUserTitle" style={{color:'black',margin:5,padding:5}}>New Brand</h4>
        <div className="newUserItem">
         
          <input className="form-control " type="file"
          style={{height:50}} 
          onChange={(e)=>setFile(e.target.files[0])}
          />
        </div>
        <div className="newUserItem">
          <label>Name</label>
          <input className="brandsinput" type="text" placeholder="Name"  
          onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Name(Ar)</label>
          <input className="brandsinput" type="text" placeholder="Name(Ar)"
          onChange={(e)=>setNameAr(e.target.value)}
          />
        </div>
        
       
        
       
        
      
        <button className="newUserButton" onClick={addBrand}>Create</button>
      </form>
    </div>
  );
}
