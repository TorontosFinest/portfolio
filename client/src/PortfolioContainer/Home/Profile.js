import React from "react";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://www.linkedin.com/in/abdi-ali2022/" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-github"></i>
            </a>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Abdi</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🔴",
                    1000,
                    "Full-Stack Developer 💻",
                    1000,
                    "PERN Stack Dev 😎",
                    1000,
                    "Cross Platform Dev 🌐",
                    1000,
                    "React Dev 📱",
                    1000,
                  ]}
                />
              </h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
