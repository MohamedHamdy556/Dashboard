import { CalendarToday, MailOutline, PermIdentity } from '@material-ui/icons'
import React from 'react'


function EditBrand() {
    return (
        <div className="User">
            <div className="UserTitleContainer">
                <h1 className="Title">Edit</h1>
            </div>
            <div className="UserContainer">
                <div className="UserShow">
                    <div className="UserShowTop">
                        <img src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="" className="UserImg" />
                  
                    </div>
                    <div className="UserShowBottom">
                      
                        <div className="UserShowInfo">
                            
                            <span className="UserShowInfoTitle">Name</span>
                        </div>
                        <div className="UserShowInfo">
                            
                            <span className="UserShowInfoTitle">Name (Ar)</span>
                        </div>
                        
                       
                        
                       
                    </div>
                </div>
                <div className="UserUpdate">
                <div className="newUser">
    
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Image</label>
          <input type="File" placeholder="Image" />
        </div>
       
        <div className="newUserItem">
          <label>Name</label>
          <input type="email" placeholder="Name" />
        </div>
        <div className="newUserItem">
          <label>Name (Ar)</label>
          <input type="password" placeholder="Name (Ar)" />
        </div>
        
      
       
        <button className="newUserButton">Edit</button>
      </form>
    </div>
                </div>
            </div>
        </div>
    )
}

export default EditBrand
