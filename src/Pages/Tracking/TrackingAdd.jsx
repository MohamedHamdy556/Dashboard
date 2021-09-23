import "./Tracking.css";

export default function NewTrack() {
  return (
    <div className="newUser">
    
      <form className="newUserForm" style={{height:550}}> 
      <h1 className="newUserTitle" style={{color:'black',margin:5,padding:5}}>New Track</h1>
     
        <div className="newUserItem">
          <label>Code</label>
          <input type="text" placeholder="Name" />
        </div> 
        <div className="newUserItem">
          <label>Last UpDate</label>
          <input type="datetime-local" placeholder="Name" />
        </div>
        <div className="newUserItem">
          <label>Customer Info</label>
          <input type="text" placeholder="Name/Number" />
        </div>
        <div className="newUserItem">
          <label>Location</label>
          <input type="text" placeholder="Name" />
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
  );
}
