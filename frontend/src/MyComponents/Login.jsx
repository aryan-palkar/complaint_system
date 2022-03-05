import React, { useState } from "react";
import profile from "../Images/loginimage/a.png";
import email from "../Images/loginimage/email.jpg";
import pass from "../Images/loginimage/pass.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-img">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <h2>Student Login</h2>
          <div>
            <img src={email} alt="email" className="email" />
            <input
              // value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              placeholder="username"
              className="name"
            />
          </div>
          <div>
            <img src={pass} alt="pass" className="email" />
            <input
              // value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="password"
              className="name"
            />
          </div>
          <div className="login-button">
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
