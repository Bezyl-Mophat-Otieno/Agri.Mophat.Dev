import React from "react";
import "./About-Nav.css";
import img from "../../assets/images/logo-light.svg";
import img1 from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

function AboutNav() {
  return (
    <header class="navbar-light header-sticky">
      {/* <!-- Logo Nav START --> */}
      <nav class="navbar navbar-expand-xl">
        <div class="container">
          {/* <!-- Logo START --> */}
          <Link class="navbar-brand" to="/">
            <img
              class="light-mode-item navbar-brand-item"
              src={img1}
              alt="logo"
            />
            <img
              class="dark-mode-item navbar-brand-item"
              src={img}
              alt="logo"
            />
          </Link>
          {/* <!-- Logo END --> */}

          {/* <!-- Responsive navbar toggler --> */}
          <button
            class="navbar-toggler ms-auto mx-3 p-0 p-sm-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-animation">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* <!-- Main navbar START --> */}
          <div class="navbar-collapse collapse" id="navbarCollapse">
            <ul class="navbar-nav navbar-nav-scroll mx-auto">
              {/* <!-- Nav item Home --> */}
              <li class="nav-item dropdown">
                <Link
                  class="nav-link"
                  to="/"
                  id="homeMenu"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Home
                </Link>
              </li>

              {/* <!-- Nav item Pages --> */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="pagesMenu"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul class="dropdown-menu" aria-labelledby="pagesMenu">
                  <li>
                    {" "}
                    <Link class="dropdown-item" to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link class="dropdown-item" to="/contact">
                      Contact
                    </Link>
                  </li>

                  {/* <!-- Dropdown submenu --> */}
                  <li class="dropdown-submenu dropend">
                    <a class="dropdown-item dropdown-toggle" href="#">
                      Authentication
                    </a>
                    <ul class="dropdown-menu" data-bs-popper="none">
                      <li>
                        {" "}
                        <Link class="dropdown-item" to="/sign-in">
                          Sign In
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link class="dropdown-item" to="/sign-up">
                          Sign Up
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link class="dropdown-item" to="/forgot-password">
                          Forgot Password
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link class="dropdown-item" to="/two-factor-auth">
                          Two factor authentication
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* <!-- Dropdown submenu --> */}
                  <li class="dropdown-submenu dropend">
                    <Link class="dropdown-item dropdown-toggle" to="/blog">
                      Blog
                    </Link>
                    <ul class="dropdown-menu" data-bs-popper="none">
                      <li>
                        {" "}
                        <Link class="dropdown-item" to="/blog">
                          Blog
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link class="dropdown-item" to="/blog-detail">
                          Blog Detail
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* <!-- Nav item Account --> */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="accounntMenu"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Accounts
                </a>
                <ul class="dropdown-menu" aria-labelledby="accounntMenu">
                  {/* <!-- Dropdown submenu --> */}
                  <li class="dropdown-submenu dropend">
                    <Link class="dropdown-item dropdown-toggle" to="/profile">
                      User Profile
                    </Link>
                  </li>

                  <li>
                    {" "}
                    <Link class="dropdown-item" to="/dashboard">
                      Master Admin
                    </Link>{" "}
                  </li>
                </ul>
              </li>

              {/* <!-- Notification dropdown START --> */}
              <li class="nav-item dropdown ms-0 ms-md-3">
                {/* <!-- Notification button --> */}
                <a
                  class="nav-notification btn btn-light p-0 mb-0"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  <i class="bi bi-cart fa-fw"></i>
                </a>
                {/* <!-- Notification dote --> */}
                <span class="notif-badge animation-blink"></span>
              </li>
              {/* <!-- Notification dropdown END --> */}
            </ul>
          </div>
          {/* <!-- Main navbar END --> */}

          {/* <!-- Header right side START --> */}
          <ul class="nav flex-row align-items-center list-unstyled ms-xl-auto">
            {/* <!-- Dark mode options START --> */}
            <li class="nav-item dropdown me-2">
              <button
                class="btn btn-link text-warning p-0 mb-0"
                id="bd-theme"
                type="button"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                data-bs-display="static"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-circle-half theme-icon-active fa-fw"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                  <use href="#"></use>
                </svg>
              </button>

              <ul
                class="dropdown-menu min-w-auto dropdown-menu-end"
                aria-labelledby="bd-theme"
              >
                <li class="mb-1">
                  <button
                    type="button"
                    class="dropdown-item d-flex align-items-center"
                    data-bs-theme-value="light"
                  >
                    <svg
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-brightness-high-fill fa-fw mode-switch me-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                      <use href="#"></use>
                    </svg>
                    Light
                  </button>
                </li>
                <li class="mb-1">
                  <button
                    type="button"
                    class="dropdown-item d-flex align-items-center"
                    data-bs-theme-value="dark"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-moon-stars-fill fa-fw mode-switch me-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                      <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                      <use href="#"></use>
                    </svg>
                    Dark
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="dropdown-item d-flex align-items-center active"
                    data-bs-theme-value="auto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-circle-half fa-fw mode-switch me-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                      <use href="#"></use>
                    </svg>
                    Auto
                  </button>
                </li>
              </ul>
            </li>
            {/* <!-- Dark mode options END --> */}

            {/* <!-- Search --> */}
            <li class="nav-item dropdown nav-search me-1 me-sm-2">
              <a
                class="nav-link mb-0 py-0"
                role="button"
                href="#"
                id="navSearch"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
                data-bs-display="static"
              >
                <i class="bi bi-search fs-5"> </i>
              </a>
              <div
                class="dropdown-menu dropdown-menu-end shadow rounded p-2"
                aria-labelledby="navSearch"
              >
                <form class="input-group">
                  <input
                    class="form-control border-primary"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                  />
                  <button class="btn btn-primary m-0" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </li>

            {/* <!-- Sign In button --> */}
            <li class="nav-item">
              <Link to="/sign-up" class="btn btn-sm btn-primary mb-0">
                <i class="fa-solid fa-right-to-bracket me-sm-2"></i>
                <span class="d-none d-sm-inline">Sign Up</span>
              </Link>
            </li>
          </ul>
          {/* <!-- Header right side END --> */}
        </div>
      </nav>
    </header>
  );
}

export default AboutNav;
