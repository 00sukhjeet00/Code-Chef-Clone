import * as React from "react";

const pages = ["Blog", "Contest", "Practice", "LeaderBoard"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  return (
    <nav className="navbar p-0 fixed-top d-flex flex-row">
      <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
        <a className="navbar-brand brand-logo-mini" href="index.html">
          <img src="assets/images/logo-mini.svg" alt="logo" />
        </a>
      </div>
      <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
        <button
          className="navbar-toggler navbar-toggler align-self-center"
          type="button"
          data-toggle="minimize"
        >
          <span className="mdi mdi-menu" />
        </button>
        <ul className="navbar-nav w-100">
          <li className="nav-item w-100">
            <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
            </form>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item nav-settings d-none d-lg-block">
            <a className="nav-link" href="#">
              <span className="menu-icon">
                <i className="mdi mdi-speedometer" />
              </span>
            </a>
          </li>
          <li className="nav-item dropdown border-left">
            <a
              className="nav-link count-indicator dropdown-toggle"
              id="messageDropdown"
              href="#"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="menu-icon">
                <i className="mdi mdi-laptop" />
              </span>
            </a>
          </li>
          <li className="nav-item dropdown border-left">
            <a
              className="nav-link count-indicator dropdown-toggle"
              id="messageDropdown"
              href="#"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="menu-icon">
                <i className="mdi mdi-vector-point" />
              </span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              id="profileDropdown"
              href="#"
              data-toggle="dropdown"
            >
              <div className="navbar-profile">
                <img
                  className="img-xs rounded-circle"
                  src="assets/images/faces/face15.jpg"
                  alt=""
                />
                <p className="mb-0 d-none d-sm-block navbar-profile-name">
                  Henry Klein
                </p>
                <i className="mdi mdi-menu-down d-none d-sm-block" />
              </div>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
              aria-labelledby="profileDropdown"
            >
              <h6 className="p-3 mb-0">Profile</h6>
              <div className="dropdown-divider" />
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-settings text-success" />
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject mb-1">Settings</p>
                </div>
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-logout text-danger" />
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject mb-1">Log out</p>
                </div>
              </a>
              <div className="dropdown-divider" />
              <p className="p-3 mb-0 text-center">Advanced settings</p>
            </div>
          </li>
        </ul>
        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="mdi mdi-format-line-spacing" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
