import React from 'react'

import'./PickUp.css'

function EditPickUp() {
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
                        <span className="UserShowTitle">Account Details</span>
                        
                       
                        
                        <div className="UserShowInfo">
                           
                            <span className="UserShowInfoTitle">PickUp Id :</span>
                        </div>
                        <div className="UserShowInfo">
                           
                           <span className="UserShowInfoTitle">PickUp Location :</span>
                       </div>
                       <div className="UserShowInfo">
                           
                           <span className="UserShowInfoTitle">Scheduled Date  :</span>
                       </div>
                       <div className="UserShowInfo">
                           
                           <span className="UserShowInfoTitle">PickUp Type:</span>
                       </div>
                       <div className="UserShowInfo">
                           
                           <span className="UserShowInfoTitle">Status :</span>
                       </div>

                        
                       
                    </div>
                </div>
                <div className="UserUpdate">
                <div className="newUser">
    
      <form className="newUserForm">
      
        <div className="newUserItem">
          <label>PickUp Id</label>
          <input type="text" placeholder="PickUp Id" />
        </div>
        <div className="newUserItem">
          <label>PickUp Location</label>
          <input type="text" placeholder="PickUp Location" />
        </div>
        <div className="newUserItem">
          <label>Scheduled Date</label>
          <input type="date" placeholder="Name" />
        </div>
        <div className="newUserItem">
          <label>PickUp Type</label>
          <input type="text" placeholder="PickUp Type" />
        </div>
        <div className="newUserItem">
          <label>Status</label>
          <input type="text" placeholder="Status" />
        </div>
        
      
       
        <button className="newUserButton">Create</button>
      </form>
    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPickUp
