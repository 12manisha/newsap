/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            NewsMonkeyss
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li className="nav-item">
                    <Link className="nav-link" to="/business">
                      {" "}
                      business
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/entertainment">
                      {" "}
                      entertainment
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/general">
                      {" "}
                      general
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/health">
                      health
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/science">
                      {" "}
                      science
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sports">
                      {" "}
                      sports
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/technology">
                      {" "}
                      technology
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
