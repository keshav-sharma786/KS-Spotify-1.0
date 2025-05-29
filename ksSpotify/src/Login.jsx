import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    const userData = { email, password };
    localStorage.setItem("spotifyUser", JSON.stringify(userData));

    alert("Welcome To KS Spotify");

    setEmail("");
    setPassword("");
    setError("");

    navigate("/Home");
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(to bottom, #1db954, #000000);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .login-container {
          background-color: #000;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
          width: 550px;
          height: 400px;
          color: white;
        }
        .login-title {
          text-align: center;
          font-size: 28px;
          font-weight: bold;
          color: #1db954;
          margin-bottom: 20px;
        }
        .form-group {
          margin-bottom: 20px;
        }
        label {
          display: block;
          margin-bottom: 6px;
          font-weight: bold;
        }
        input[type="email"],
        input[type="password"] {
          width: 100%;
          padding: 10px;
          border-radius: 6px;
          border: none;
          background-color: #222;
          color: white;
        }
        input[type="email"]:focus,
        input[type="password"]:focus {
          outline: none;
          border: 2px solid #1db954;
        }
        button {
          width: 100%;
          padding: 12px;
          background-color: #1db954;
          border: none;
          color: white;
          font-weight: bold;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        button:hover {
          background-color: #1ed760;
        }
        .error {
          color: #ff4d4f;
          font-size: 14px;
          margin-top: -10px;
          margin-bottom: 10px;
          text-align: center;
        }

        @media(max-width : 767px) {
            .login-container {
              width: 230px;
              height: 400px;
            }
        }
      `}</style>

      <div className="login-container">
        <div className="login-title">KS Spotify Login</div>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="error">{error}</div>}
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
