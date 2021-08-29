import { Button } from 'bootstrap'
import React from 'react'
import './Stylce.css'
const Filters = () => {
    return (
        <div className="Filters">
            <button className="btnFilter">All</button>
            <button className="btnFilter">Awating Action</button>
            <button className="btnFilter">On Hold</button>
            <button className="btnFilter">Canceld</button>
            <button className="btnFilter">ReScheduled</button>
            <button className="btnFilter">New</button>
            <button className="btnFilter">Out ForDelivery</button>
            <button className="btnFilter">Completed</button>
            <button className="btnFilter">Return To Origin</button>
            <button className="btnFilter">Cant Be Deliverd</button>
      
        </div>
    )
}

export default Filters
