import React from 'react'

import'./EditRole.css'

function EditRole() {
    return (
        <div className="User">
            <div className="UserTitleContainer">
                <h1 className="Title">Edit</h1>
            </div>
            <div className="UserContainer">
                <div className="UserShow">
                    <div className="UserShowTop">
                   <div className="UserTitleAll">
                    </div>

                    </div>
                    <div className="UserShowBottom">
                        <div className="UserShowInfo">
                            
                            <span className="UserShowInfoTitle">Role Name</span>
                        </div>
                        <div className="UserShowInfo">
                            
                            <span className="UserShowInfoTitle">permission</span>
                        </div>
                        
                        <div className="UserShowInfo">
                           
                            <span className="UserShowInfoTitle">Order Status</span>
                        </div>
                        
                       
                    </div>
                </div>
                <div className="UserUpdate">
                <div className="newUser">
    
      <form className="newUserForm">
      <div className="newUserItem">
          <label>Role Name</label>
          <input type="text" placeholder="Name" />
        </div>
        <div className="newUserItem">
          <label>Permission</label>
          <select className="newUserSelect" placeholder="Type..">
            <option >1</option>
            <option >2</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Order Status</label>
          <select className="newUserSelect" placeholder="Type..">
            <option >1</option>
            <option >2</option>
          </select>
          </div>
        
      
       
        <button className="newUserButton">Create</button>
      </form>
    </div>
                </div>
            </div>
        </div>
    )
}

export default EditRole
