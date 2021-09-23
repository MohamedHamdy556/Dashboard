import "./Style.css";

export default function NewRole() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Role</h1>
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
  );
}
