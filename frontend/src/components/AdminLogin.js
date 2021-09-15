import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { adminLogin } from "../redux/actions/admin";

const Login = ({ adminLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const onSubmit = async (e) => {
      e.preventDefault();
      await adminLogin(email, password);
      history.push("/admin");
  };

  return (
    <div className="login">
      <div className="loginDiv">
        <div className="left">
          <img src={trueno} alt="logo" className="logo" />
          <h1>Welcome, Admin!</h1>
          <hr />
          <p>
            Not an admin? Visit our{" "}
            <a href="https://www.gotrueno.com/">website!</a>
          </p>
        </div>
        <div className="signin">
          <h1>Sign In</h1>
          <form onSubmit={onSubmit}>
            <div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div>
              <button className="loginButton">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { adminLogin })(Login);
