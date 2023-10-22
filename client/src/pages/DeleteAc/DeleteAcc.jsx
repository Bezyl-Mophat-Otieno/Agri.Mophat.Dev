import React from "react";
import img from "../../assets/images/avatar/01.jpg";

function DeleteAcc() {
  return (
    <>
      {/* <!-- **************** MAIN CONTENT START **************** --> */}
      <main>
        {/* <!-- ======================= */}
        {/* Content START --> */}
        <section class="pt-3">
          <div class="container">
            <div class="row">
              {/* <!-- Sidebar START --> */}
              <div class="col-lg-4 col-xl-3">
                {/* <!-- Responsive offcanvas body START --> */}
                <div
                  class="offcanvas-lg offcanvas-end"
                  tabindex="-1"
                  id="offcanvasSidebar"
                >
                  {/* <!-- Offcanvas header --> */}
                  <div class="offcanvas-header justify-content-end pb-2">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="offcanvas"
                      data-bs-target="#offcanvasSidebar"
                      aria-label="Close"
                    ></button>
                  </div>

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
                        <div class="text-center mb-3">
                          {/* <!-- Avatar --> */}
                          <div class="avatar avatar-xl mb-2">
                            <img
                              class="avatar-img rounded-circle border border-2 border-white"
                              src={img}
                              alt=""
                            />
                          </div>
                          <h6 class="mb-0">Jacqueline Miller</h6>
                          <a
                            href="#"
                            class="text-reset text-primary-hover small"
                          >
                            hello@gmail.com
                          </a>
                          <hr />
                        </div>

                        {/* <!-- Sidebar menu item START --> */}
                        <ul class="nav nav-pills-primary-soft flex-column">
                          <li class="nav-item">
                            <a class="nav-link" href="account-profile.html">
                              <i class="bi bi-person fa-fw me-2"></i>My Profile
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="account-bookings.html">
                              <i class="bi bi-ticket-perforated fa-fw me-2"></i>
                              My Bookings
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="account-travelers.html">
                              <i class="bi bi-people fa-fw me-2"></i>Travelers
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              href="account-payment-details.html"
                            >
                              <i class="bi bi-wallet fa-fw me-2"></i>Payment
                              Details
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="account-wishlist.html">
                              <i class="bi bi-heart fa-fw me-2"></i>Wishlist
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="account-settings.html">
                              <i class="bi bi-gear fa-fw me-2"></i>Settings
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link active"
                              href="account-delete.html"
                            >
                              <i class="bi bi-trash fa-fw me-2"></i>Delete
                              Profile
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link text-danger bg-danger-soft-hover"
                              href="#"
                            >
                              <i class="fas fa-sign-out-alt fa-fw me-2"></i>Sign
                              Out
                            </a>
                          </li>
                        </ul>
                        {/* <!-- Sidebar menu item END --> */}
                      </div>
                      {/* <!-- Card body END --> */}
                    </div>
                  </div>
                </div>
                {/* <!-- Responsive offcanvas body END -->	 */}
              </div>
              {/* <!-- Sidebar END --> */}

              {/* <!-- Main content START --> */}
              <div class="col-lg-8 col-xl-9">
                {/* <!-- Offcanvas menu button --> */}
                <div class="d-grid mb-0 d-lg-none w-100">
                  <button
                    class="btn btn-primary mb-4"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasSidebar"
                    aria-controls="offcanvasSidebar"
                  >
                    <i class="fas fa-sliders-h"></i> Menu
                  </button>
                </div>

                {/* <!-- Card START --> */}
                <div class="card border">
                  {/* <!-- Card header --> */}
                  <div class="card-header border-bottom">
                    <h4 class="card-header-title">Delete Account</h4>
                  </div>

                  {/* <!-- Card body START --> */}
                  <div class="card-body">
                    <h6>Before you go...</h6>
                    <ul>
                      <li>
                        Take a backup of your data <a href="#">Here</a>{" "}
                      </li>
                      <li>
                        If you delete your account, you will lose your all data.
                      </li>
                    </ul>
                    <div class="form-check form-check-md my-4">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="deleteaccountCheck"
                      />
                      <label class="form-check-label" for="deleteaccountCheck">
                        Yes, I'd like to delete my account
                      </label>
                    </div>
                    <a
                      href="#"
                      class="btn btn-success-soft btn-sm mb-2 mb-sm-0"
                    >
                      Keep my account
                    </a>
                    <a href="#" class="btn btn-danger btn-sm mb-0">
                      Delete my account
                    </a>
                  </div>
                  {/* <!-- Card body END --> */}
                </div>
                {/* <!-- Card END --> */}
              </div>
              {/* <!-- Main content END --> */}
            </div>
          </div>
        </section>
        {/* <!-- ======================= */}
        {/* Content END --> */}
      </main>
      {/* <!-- **************** MAIN CONTENT END **************** --> */}
    </>
  );
}

export default DeleteAcc;
