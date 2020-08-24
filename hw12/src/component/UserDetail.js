import React, { useState, useEffect } from "react";
import axios from "axios";

function UserDetail({ match, history }) {
  useEffect(() => {
    if (localStorage.getItem("authenticated") === "false") {
      history.push("/login");
    }
    getUserDetail();
  }, []);
  const [detail, setDetail] = useState({});
  const [error, setError] = useState(null);

  const getUserDetail = () => {
    axios
      .get(`https://api.github.com/users/${match.params.id}`)
      .then(res => {
        setDetail(res.data);
      })
      .catch(err => {
        setError(err);
        console.log("something went wrong when getting the users");
      });
  };

  return (
    <div >
      <div className="box">
        <div>{detail.login ? detail.login : "No Name "}</div>
        <div>{detail.location ? detail.location : "NO LOCATION "}</div>
        <div>{detail.following ? detail.following : "No following "}</div>
        <div>{detail.followers ? detail.followers : "No followers "}</div>
        
      </div><button className="btn-detail" onClick={() => history.push("/users")}>back to user </button>
        <button className="btn-detail" onClick={() => history.push("/")}>home</button>
    </div>
  );
}

export default UserDetail;
