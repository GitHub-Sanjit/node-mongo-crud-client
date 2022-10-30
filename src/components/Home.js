import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();

  const handleDelete = (user) => {
    const agree = window.confirm(
      `Are You Sure, You want to delete: ${user.name}`
    );
    if (agree) {
      console.log(`deleting user with ${user.name} id`);
    }
  };

  return (
    <div>
      <h2>Users :{users.length}</h2>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} {user.email}
            <button onClick={() => handleDelete(user)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Home;
