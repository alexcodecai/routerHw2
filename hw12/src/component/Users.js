import React, { useState, useEffect } from "react";
import axios from "axios";
import UserEntry from "./UserEntry.js";

function Users({ history }) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("authenticated") === "false") {
      history.push("/login");
    }
    getusers();
  }, []);

  const getusers = () => {
    axios
      .get(`https://api.github.com/users?per_page=100`)
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        setError(err);
        console.log("something went wrong when getting the users");
      });
  };
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>UserName</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <UserEntry user={user} key={user.id} />
        ))}
      </tbody>
    </table>
  );
}

// {problems.map(problem => (
// 	<h1 key={problem.id}>
// 		<Link to={`/${problem.id}`}>{problem.title}</Link>
// 	</h1>
// ))}

export default Users;
