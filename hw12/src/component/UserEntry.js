import React from "react";
import { Link } from "react-router-dom";

const imageStyle = {width:50, height:50}

const UserEntry = props => {
  return (
    <tr>
      <td>{props.user.id}</td>
      <td>
        <Link to={`/users/${props.user.login}`}>{props.user.login}</Link>
      </td>
      <td><img style={imageStyle} src={props.user.avatar_url} alt ='profileImage'/></td>

    </tr>
    
      

  );
};
export default UserEntry;
