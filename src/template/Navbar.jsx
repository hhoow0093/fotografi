import React, { useState } from "react";
import "../css/Navbar.css";

const Navbar = () => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const handleclick = () => {
    setOverlayVisible(!isOverlayVisible);
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg p-4">
        <div class="container-fluid">
          <a class="navbar-brand text-white fw-bold" href="#">
            Portfolio
          </a>
          <span class="navbar-toggler-iconhehe " onClick={handleclick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-list text-white"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </span>
          <div class={` navbar-collapse`}>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item elly1">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  <svg
                    width="150"
                    height="50"
                    viewBox="0 0 558 121"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.272727 94L15.7273 0.909088H35.4091L22.6818 77.7727H62.5909L59.8636 94H0.272727ZM139.756 95.1818C136.695 95.1818 134.18 94.1212 132.21 92C130.271 89.8788 129.392 87.303 129.574 84.2727C129.786 81.2727 131.044 78.7424 133.347 76.6818C135.68 74.5909 138.362 73.5455 141.392 73.5455C144.301 73.5455 146.756 74.5909 148.756 76.6818C150.756 78.7727 151.635 81.303 151.392 84.2727C151.241 86.2727 150.589 88.1061 149.438 89.7727C148.317 91.4091 146.892 92.7273 145.165 93.7273C143.438 94.697 141.635 95.1818 139.756 95.1818ZM228.421 120.182C225.936 120.182 223.663 119.985 221.603 119.591C219.542 119.227 217.845 118.758 216.512 118.182L223.33 103.727C225.482 104.424 227.436 104.788 229.194 104.818C230.982 104.848 232.618 104.394 234.103 103.455C235.588 102.515 236.951 100.97 238.194 98.8182L239.921 95.8636L226.83 24.1818H246.466L252.375 75.5455H253.103L276.239 24.1818H297.466L257.512 101.545C255.542 105.333 253.209 108.621 250.512 111.409C247.845 114.197 244.678 116.348 241.012 117.864C237.375 119.409 233.178 120.182 228.421 120.182ZM358.461 120.182C355.976 120.182 353.703 119.985 351.643 119.591C349.582 119.227 347.885 118.758 346.552 118.182L353.37 103.727C355.522 104.424 357.476 104.788 359.234 104.818C361.022 104.848 362.658 104.394 364.143 103.455C365.628 102.515 366.991 100.97 368.234 98.8182L369.961 95.8636L356.87 24.1818H376.506L382.415 75.5455H383.143L406.279 24.1818H427.506L387.552 101.545C385.582 105.333 383.249 108.621 380.552 111.409C377.885 114.197 374.718 116.348 371.052 117.864C367.415 119.409 363.218 120.182 358.461 120.182ZM488.501 120.182C486.016 120.182 483.743 119.985 481.683 119.591C479.622 119.227 477.925 118.758 476.592 118.182L483.41 103.727C485.562 104.424 487.516 104.788 489.274 104.818C491.062 104.848 492.698 104.394 494.183 103.455C495.668 102.515 497.031 100.97 498.274 98.8182L500.001 95.8636L486.91 24.1818H506.546L512.455 75.5455H513.183L536.319 24.1818H557.546L517.592 101.545C515.622 105.333 513.289 108.621 510.592 111.409C507.925 114.197 504.758 116.348 501.092 117.864C497.455 119.409 493.258 120.182 488.501 120.182Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isOverlayVisible && (
        <div className="custom-overlay">
          <div className="close-button" onClick={handleclick}>
            <span className="text-white">X</span>
          </div>
          <div className="overlay-content">
            <ul className="navbar-nav">
              <li className="nav-item elly2">
                <a
                  className="nav-link active text-white fw-bold"
                  aria-current="page"
                  href="#"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
