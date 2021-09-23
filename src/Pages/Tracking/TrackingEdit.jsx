import React from 'react'

import'./Tracking.css'

function TrackingEdit() {
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
                           
                            <span className="UserShowInfoTitle">Track Code :</span>
                        </div>
                        <div className="UserShowInfo">
                           
                           <span className="UserShowInfoTitle">Last UpDate :</span>
                       </div>
                       <div className="UserShowInfo">
                           
                           <span className="UserShowInfoTitle">Customer Info :</span>
                       </div>
                       <div className="UserShowInfo">
                           
                           <span className="UserShowInfoTitle">Location :</span>
                       </div>
                       <div className="UserShowInfo">
                           
                           <span className="UserShowInfoTitle">COD :</span>
                       </div>
                       <div className="UserShowInfo">
                           
                           <span className="UserShowInfoTitle">Type:</span>
                       </div>
                       <div className="UserShowInfo">
                           
                           <span className="UserShowInfoTitle">status :</span>
                       </div>
                      
                    </div>
                </div>
                <div className="UserUpdate">
                <div className="newUser">
    
      <form className="newUserForm">
      <div className="newUserItem">
          <label>Code</label>
          <input type="text" placeholder="Name" />
        </div>
        <div className="newUserItem">
          <label>Last UpDate</label>
          <input type="text" placeholder="Name" />
        </div>
        <div className="newUserItem">
          <label>Customer Info </label>
          <input type="text" placeholder="Name" />
        </div>
        <div className="newUserItem">
          <label>Location</label>
          <input type="Date" placeholder="Name" />
        </div>
        <div className="newUserItem">
          <label>COD</label>
          <input type="text" placeholder="Name" />
        </div>
        <div className="newUserItem">
          <label>Type</label>
          <select>
           <option>Deliverd</option>
           <option>On tHE Way</option>
         </select>
        </div>
        <div className="newUserItem">
          <label>status</label>
          <select>
           <option>Deliverd</option>
           <option>On tHE Way</option>
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

export default TrackingEdit
