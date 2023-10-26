import React from "react";
import img from "../../assets/images/avatar/01.jpg";
import { Link } from "react-router-dom";

function SideNavProfile() {
  return (
    <div>
      {" "}
      {/* <!-- Offcanvas body --> */}
      <div class="offcanvas-body p-3 p-lg-0">
        <div class="card bg-light w-100">
          {/* <!-- Edit profile button --> */}
          <div class="position-absolute top-0 end-0 p-3">
            <a
              href="#"
              class="text-primary-hover"
              data-bs-toggle="tooltip"
              data-bs-title="Edit profile"
            >
              <i class="bi bi-pencil-square"></i>
            </a>
          </div>

          {/* <!-- Card body START --> */}
          <div class="card-body p-3">
            {/* <!-- Avatar and content --> */}
            <div class=" mb-3">
              {/* <!-- Avatar --> */}
              <div class="avatar avatar-xl mb-2">
                <img
                  class="avatar-img rounded-circle border border-2 border-white"
                  src={img}
                  alt=""
                />
              </div>
              <h6 class="mb-0">Jacqueline Miller</h6>
              <a href="#" class="text-reset text-primary-hover small">
                hello@gmail.com
              </a>
              <hr />
            </div>

            {/* <!-- Sidebar menu item START --> */}
            <ul class="nav nav-pills-primary-soft  flex-column ">
              <li class="nav-item">
                <Link class="nav-link custom-style active" to="/profile">
                  <i class="bi bi-person fa-fw me-2"></i>My Profile
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link custom-style" to="/my-orders">
                  <i class="bi bi-ticket-perforated fa-fw me-2"></i>
                  My Orders
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link custom-style" to="/payment-details">
                  <i class="bi bi-wallet fa-fw me-2"></i>Payment Details
                </Link>
              </li>
              {/* <li class="nav-item">
                            <a class="nav-link" href="account-wishlist.html">
                              <i class="bi bi-heart fa-fw me-2"></i>Wishlist
                            </a>
                          </li> */}

              <li class="nav-item">
                <Link class="nav-link custom-style" to="/delete-account">
                  <i class="bi bi-trash fa-fw me-2"></i>Delete Profile
                </Link>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link custom-style text-danger bg-danger-soft-hover"
                  href="#"
                >
                  <i class="fas fa-sign-out-alt fa-fw me-2"></i>Sign Out
                </a>
              </li>
            </ul>
            {/* <!-- Sidebar menu item END --> */}
          </div>
          {/* <!-- Card body END --> */}
        </div>
      </div>
    </div>
  );
}

export default SideNavProfile;
