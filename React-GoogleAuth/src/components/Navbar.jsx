import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/productform">
                  Product Form
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productlist">
                  Product List
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link className="btn btn-success p-2 me-2" to="/" role="button">
                Signup
              </Link>
              <Link className="btn btn-success p-2 me-2" to="/logout" role="button">
                Logout
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
