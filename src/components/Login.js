import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    {error && <div style={{ color: "red" }}>{error}</div>}
    <button type="submit">Login</button>
  </form>
  );
};

export default Login;
