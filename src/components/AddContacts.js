import { useState } from "react";

const AddContacts = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  return (
    <div className="card border-0 shadow w-50 mt-5  mx-auto">
      <div className="card-header text-center bg-success text-white">
        Add your contact information
      </div>
      <div className="card-body">
        <form onSubmit={(e) => handleClick(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary mt-2 rounded">
            Create Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContacts;
