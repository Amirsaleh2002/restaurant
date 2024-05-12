import React, { useState } from "react";
import { BiSolidUser, BiSolidLockAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const evaluateInformation = (event) => {
    event.preventDefault();

    if (userName.length >= 10 && password.length >= 8) {
      navigate("/");
    }
  };

  return (
    <>
      <div className="login">
        <form className="login-form">
          <h1 className="login-title">فرم ورود به سایت</h1>
          <div className="username-login">
            <input
              type="text"
              id="username"
              className={`login-input ${
                userName.length < 10 ? "error-alarm" : "success-alarm"
              }`}
              placeholder="نام کاربری خود را وارد کنید ..."
              autoComplete="off"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
            <BiSolidUser className="login-icon" />
          </div>
          <div className="username-login">
            <input
              type="password"
              id="password"
              className={`login-input ${
                password.length < 8 ? "error-alarm" : "success-alarm"
              }`}
              placeholder="رمز خود را وارد کنید ..."
              autoComplete="off"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <BiSolidLockAlt className="login-icon" />
          </div>
          <div className="remember-me">
            <input type="checkbox" id="remember" className="remmeber-input" />
            <label htmlFor="remember" className="remember-label">
              مرا به خاطر بسپار
            </label>
          </div>
          <div className="forgot-pass">
            <a href="#" className="forgot-pass-link">
              فراموشی رمز عبور
            </a>
          </div>
          <div className="not-register">
            <span className="not-register-span">کاربر جدید هستید؟ </span>
            <span className="space"> / </span>
            <Link to="/register" className="forgot-pass-link">
              ثبت نام
            </Link>
          </div>
          <div className="btn-login">
            <button
              className={`btn-login-to-homepage ${
                userName.length < 10 || password.length < 8
                  ? "invalid"
                  : "valid"
              }`}
              onClick={evaluateInformation}
            >
              ورود
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
