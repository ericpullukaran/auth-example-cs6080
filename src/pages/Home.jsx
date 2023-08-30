import React, { useContext, useState } from "react";
import { AuthContext } from "../utils/AuthContext";

const Home = (props) => {
  const { saveToken } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // req login to server get back a token
    if (email === "1" && password === "1") {
      saveToken("thisisafaketoken");
      console.log("Saved token to context!");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Home;
