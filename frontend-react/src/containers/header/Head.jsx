import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <FontAwesomeIcon icon={faPhone} className="fa phone" />
            <label>+12345 1234 5678</label>
            <FontAwesomeIcon icon={faEnvelope} className="fa envelope" />
            <label>koreavzz@naver.com</label>
          </div>

          <div className="right row RText">
            <label>Theme FAQ's</label>
            <label>Need Helps</label>
            <span>🇰🇷</span>
            <label>KR</label>
            <span>🇰🇷</span>
            <label>KRW</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
