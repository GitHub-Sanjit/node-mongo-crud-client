import React, { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState({});

  const handleAddUser = (event) => {
    event.preventDefault();
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("User Added Successfully");
          event.target.reset();
        }
      });
  };

  const handleInputBlur = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };

  return (
    <div>
      <h2>Please add a new user : </h2>
      <form onSubmit={handleAddUser}>
        <input
          onBlur={handleInputBlur}
          type="text"
          name="name"
          placeholder="name"
          required
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="text"
          name="address"
          placeholder="Address"
          required
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="email"
          name="email"
          id="email"
          placeholder="email"
          required
        />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
