import React from 'react'
import './uploadbtn.css'
import { BackupOutlined } from '@material-ui/icons'


function Uploadbtn() {
    return (
        <div className="dropdown">
        <button className="UploadJsx"><BackupOutlined/><h4 className="uploadtext">Upload</h4></button>
        <div className="dropdown-content">
        <h4>Excel</h4>
        <h4>Power Bi</h4>
        <h4>Another</h4>
        
  </div>

        </div>
    )
}

export default Uploadbtn
