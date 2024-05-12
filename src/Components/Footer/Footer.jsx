import React from "react";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="center-footer">
        <h1 className="footer-title">انتقادات و پیشنهادات</h1>
        <div className="footer-input">
          <div className="send-email">
            <input
              type="email"
              className="footer-email"
              placeholder="ایمیل خود را وارد کنید..."
            />
            <button className="footer-btn">ارسال</button>
          </div>
          <h2 className="criticize">
            با ارسال ایمیل خود در باشگاه مشتریان ما عضو شوید.
          </h2>
        </div>
      </div>
      <div className="right-footer">
        <h1 className="footer-title">لینک ها</h1>
        <ul className="links">
          <li className="link-item">لیست شعبه ها</li>
          <li className="link-item">پرفروش ترین ها</li>
          <li className="link-item">ارتباط ما</li>
          <li className="link-item">درباره ما</li>
        </ul>
      </div>
      <div className="left-footer">
        <h1 className="footer-title">راه های ارتباطی با ما</h1>
        <div className="social">
          <div className="social-media">
            <LiaTelegramPlane className="telegram" />
          </div>
          <div className="social-media">
            <FaInstagram className="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
