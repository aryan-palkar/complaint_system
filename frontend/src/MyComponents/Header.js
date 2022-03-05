import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
          Student Grievance
        </a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="d-flex">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
              <a href="/login" className="nav-link text-light" >Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/signup">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
