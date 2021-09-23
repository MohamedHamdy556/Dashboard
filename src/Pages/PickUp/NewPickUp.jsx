import "./PickUp.css";

export default function NewPickUp() {
  return (
    <div className="newUser">
    
      <form className="newUserForm"> 
      <h1 className="newUserTitle" style={{color:'black',margin:5,padding:5}}>New PickUp</h1>
     
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
  );
}
