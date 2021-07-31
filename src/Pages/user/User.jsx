import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from '@material-ui/icons'
import React from 'react'
import'./User.css'

function User() {
    return (
        <div className="User">
            <div className="UserTitleContainer">
                <h1 className="Title">Edit</h1>
                <button className="Createbtn">Create</button>
            </div>
            <div className="UserContainer">
                <div className="UserShow">
                    <div className="UserShowTop">
                        <img src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="" className="UserImg" />
                   <div className="UserTitleAll">
                    <div className="UserShowUserName">Tree</div>
                    <div className="UserShowUserTitle">SoftWare Company</div>
                    </div>

                    </div>
                    <div className="UserShowBottom">
                        <span className="UserShowTitle">Account Details</span>
                        <div className="UserShowInfo">
                            <PermIdentity/>
                            <span className="UserShowInfoTitle">Tree556</span>
                        </div>
                        <div className="UserShowInfo">
                            <CalendarToday/>
                            <span className="UserShowInfoTitle">25-5-2021</span>
                        </div>
                        <div className="UserShowInfo">
                            <PhoneAndroid/>
                            <span className="UserShowInfoTitle">+0101152151</span>
                        </div>
                        <div className="UserShowInfo">
                            <MailOutline/>
                            <span className="UserShowInfoTitle">Tree556@Gmail.com</span>
                        </div>
                        <div className="UserShowInfo">
                            <LocationSearching/>
                            <span className="UserShowInfoTitle">maadi</span>
                        </div>
                       
                    </div>
                </div>
                <div className="UserUpdate"></div>
            </div>
        </div>
    )
}

export default User
