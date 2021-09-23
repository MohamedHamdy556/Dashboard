import { useState } from "react";
import "./newUser.css";

export default function NewUser() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [password, setPassword] = useState('')

async function signup() {
  let item={name,role,email,password}
  console.warn(item)
  const formData=new FormData();
  formData.append('name',name)
  formData.append('email',email)
  formData.append('role',role)
  formData.append('password',password)
  let result=await fetch("http://127.0.0.1:8000/api/register",{
    method:'POST',
    body:formData,
  
  })
 
}
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" value={name} placeholder="UserName" onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Role</label>
          <select className="newUserSelect" placeholder="Type.." value={role} onChange={(e)=>setRole(e.target.value)}>
            <option  >----</option>
            <option >Super Admin</option>
            <option >User</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="text" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" value={password} placeholder="password"  onChange={(e)=>setPassword(e.target.value)}/>

        </div>
      
        
        <button className="newUserButton" onClick={signup}>Create</button>
       
      </form>
    </div>
  );
}
