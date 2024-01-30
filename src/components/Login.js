import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./DashBoard.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        username,
        password,
      })
      .then((res) => {
        console.log(res);
        navigate("/DashBoard");
      })
      .catch((error) => {
        console.error(
          "Login failed:",
          error.response?.data?.error || error.message
        );
        setError("Invalid username or password. Please try again.");
      });
  }

  return (
    <div id="Login_Box">
      <form onSubmit={handleSubmit}>
        <h1>Login Admin </h1>
        <br />
        <table className="Table_Log">
          <tr >
            <td>
              <h2>Username :</h2>
            </td>
            <td>
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <h2>Password :</h2>
            </td>
            <td>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </td>
          </tr>
          <div></div>
          <div></div>
        </table>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <Button type="submit" variant="outline-success">Login</Button>
      </form>
    </div>
  );
};

export default Login;
