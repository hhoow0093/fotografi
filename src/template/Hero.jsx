import React from "react";
import "../css/Hero.css";

const Hero = () => {
  return (
    <>
      <div className="cover-navbar"></div>
      <section className="hero-section">
        <div className="mytext text-center">
          <h1 className="text-white">Hi, welsome to ly Media!</h1>
          <h5 className="text-white">by @ellymarsenia</h5>
        </div>
        <div className="arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-caret-down-fill text-white"
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
