import { CalendarToday, MailOutline, PermIdentity } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router'

import'./User.css'

function User(props) {

  const [data, setData] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [password, setPassword] = useState('')

  useEffect( async() => {
    let result=await fetch("http://127.0.0.1:8000/api/getuser/"+props.match.params.id)
    result=await result.json();
    setData(result)
    setName(result.name)
    setEmail(result.email)
    setRole(result.role)
    setPassword(result.password)
   
  }, []) 
 async function UpdateUser(id) {
    const formData=new FormData();
    formData.append('name',name)
    formData.append('email',email)
    formData.append('role',role)
    formData.append('password',password)
    
    let result=await fetch("http://127.0.0.1:8000/api/update/"+id+"?_method=PUT",{
      method:'POST',
      body:formData
    });
  
   alert("Data has Been Updated")
  }
    return (
        <div className="User">
            <div className="UserTitleContainer">
                <h1 className="Title">Edit</h1>
            </div>
            <div className="UserContainer">
                <div className="UserShow">
                    <div className="UserShowTop">
                        <img src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="" className="UserImg" />
                   <div className="UserTitleAll">
                    <div className="UserShowUserName">{data.name}</div>
                    <div className="UserShowUserTitle">{data.role}</div>
                    </div>

                    </div>
                    <div className="UserShowBottom">
                        <span className="UserShowTitle">Account Details</span>
                        <div className="UserShowInfo">
                            <PermIdentity/>
                            <span className="UserShowInfoTitle">{data.name}</span>
                        </div>
                        <div className="UserShowInfo">
                            <CalendarToday/>
                            <span className="UserShowInfoTitle">25-5-2021</span>
                        </div>
                        
                        <div className="UserShowInfo">
                            <MailOutline/>
                            <span className="UserShowInfoTitle">{data.email}</span>
                        </div>
                        
                       
                    </div>
                </div>
                <div className="UserUpdate">
                <div className="newUser">
    
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input  type="text"  onChange={(e)=>setName(e.target.value)} defaultValue={data.name} />
        </div>
        <div className="newUserItem">
          <label>Role</label>
          <select className="newUserSelect" onChange={(e)=>setRole(e.target.value)} defaultValue={data.role}>
            <option >Super Admin</option>
            <option >User</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" onChange={(e)=>setEmail(e.target.value)} defaultValue={data.email} />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="text"onChange={(e)=>setPassword(e.target.value)} defaultValue={data.password} />
        </div>
        
      
       
        <button onClick={()=>UpdateUser(data.id)} className="newUserButton">Update</button>
      </form>
    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(User) 
