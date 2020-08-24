import React from "react";
import { Link } from "react-router-dom";

function Home({ history }) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/users">user</Link>
          </li>
          <li>
		   <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/users/:id">userDetails</Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          localStorage.setItem("authenticated", "false");
          history.push("/");
        }}
      >
        Log out
      </button>
    </div>
  );
}

export default Home;
