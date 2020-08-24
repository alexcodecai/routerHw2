import React, { useState, useEffect } from "react";

function Login({ history }) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authenticated") === "false") {
      history.push("/login");
    }
  }, [history]);

  const handleSubmit = e => {
    e.preventDefault();
    if (userName === "username" && password === "password") {
      localStorage.setItem("authenticated", "true");
      history.push("/");
    } else {
      localStorage.setItem("authenticated", "false");
    }
  };

  const handleUsername = e => {
    setUsername(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
  };

  return (
    <div className ='table'>
      <form onSubmit={handleSubmit} className="form" >
        <label className="username">
          userName:
          <input value={userName} onChange={handleUsername} />
        </label>
        <label className="password">
          password:
          <input value={password} onChange={handlePassword} />
        </label>
        <button className ="btn-group" type="submit">Log in</button>
      </form>
      <button className ="btn-group" onClick={() => history.push("/")}>back to home page</button>
    </div>
  );
}

export default Login;
