import React, { useState } from "react";
import { BiSolidUser, BiSolidLockAlt } from "react-icons/bi";
import { Link , useNavigate} from "react-router-dom";
import "./Register.css";
function Register() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate()
  const evaluateUserInformation = (event) => {
    event.preventDefault();

    if (password === confirmPassword && userName.length >= 10 && password.length && confirmPassword.length) {
      navigate("/");
    }
  };

  return (
    <>
      <div className="login">
        <form className="login-form">
          <h1 className="login-title">ثبت نام در سایت</h1>
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
          <div className="username-login">
            <input
              type="password"
              id="password"
              className={`login-input ${
                password === confirmPassword ? "success-alarm" : "error-alarm"
              }`}
              placeholder="رمز خود را تکرار کنید ..."
              autoComplete="off"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <BiSolidLockAlt className="login-icon" />
          </div>
          <div className="not-register">
            <span className="not-register-span">قبلا لاگین کردید؟</span>
            <span className="space"> / </span>
            <Link to="/login" className="forgot-pass-link">
              ورود
            </Link>
          </div>
          <div className="btn-register">
            <button className={`btn-login-to-homepage ${userName.length < 10 || password.length < 8 ? 'invalid' : 'valid'}`} onClick={evaluateUserInformation}>
              ثبت نام
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
