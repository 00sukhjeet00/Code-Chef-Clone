import * as React from "react";

const pages = ["Blog", "Contest", "Practice", "LeaderBoard"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Sci-Fi
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/practice">
                Practice
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/contest">
                Contest
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/blogs">
                Blogs
              </a>
            </li>
          </ul>
          <a href="/login" class="btn btn-primary">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;