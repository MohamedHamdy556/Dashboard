import React from 'react'



function EditCategory() {
    return (
        <div className="User">
            <div className="UserTitleContainer">
                <h1 className="Title">Edit</h1>
            </div>
            <div className="UserContainer">
                <div className="UserShow">
                    <div className="UserShowTop">
                        

                    </div>
                    <div className="UserShowBottom">
                        
                        <div className="UserShowInfo">
                            
                            <span className="UserShowInfoTitle">Category Name</span>
                        </div>
                        <div className="UserShowInfo">
                          
                            <span className="UserShowInfoTitle">Order</span>
                        </div>
                        
                        <div className="UserShowInfo">
                           
                            <span className="UserShowInfoTitle">Category Name</span>
                        </div>
                        <div className="UserShowInfo">
                            
                            <span className="UserShowInfoTitle">Creator</span>
                        </div>
                        <div className="UserShowInfo">
                          
                            <span className="UserShowInfoTitle">Sub Category</span>
                        </div>
                        <div className="UserShowInfo">
                          
                            <span className="UserShowInfoTitle">Creation Date</span>
                        </div>
                        
                       
                    </div>
                </div>
                <div className="UserUpdate">
                <div className="newUser">
    
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Category Name</label>
          <input type="text" placeholder="Name" />
        </div>
        <div className="newUserItem">
          <label>Order</label>
          <input type="text" placeholder="Name" />
        </div>
        <div className="newUserItem">
          <label>Category Name</label>
          <input type="text" placeholder="Name" />
        </div>
        <div className="newUserItem">
          <label>Creator</label>
          <input type="password" placeholder="Creator" />
        </div>
        <div className="newUserItem">
          <label>Sub Category</label>
          <select className="newUserSelect" placeholder="Sub Category..">
            <option >Super Admin</option>
            <option >User</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Creation Date</label>
          <input type="Date" placeholder="Creation Date" />
        </div>
        
        
      
       
        <button className="newUserButton">Edit</button>
      </form>
    </div>
                </div>
            </div>
        </div>
    )
}

export default EditCategory
