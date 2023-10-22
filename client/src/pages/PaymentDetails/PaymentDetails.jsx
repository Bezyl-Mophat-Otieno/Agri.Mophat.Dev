import React from "react";
import img from "../../assets/images/avatar/01.jpg";
import img1 from "../../assets/images/element/visa.svg";
import img2 from "../../assets/images/element/mastercard.svg";
import img3 from "../../assets/images/element/visa.svg";

function PaymentDetails() {
  return (
    <>
      {/* <!-- **************** MAIN CONTENT START **************** --> */}
      <main>
        {/* <!-- ======================= */}
        {/* Content START --> */}
        <section class="pt-3">
          <div class="container">
            <div class="row g-2 g-lg-4">
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
                              class="nav-link active"
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
                            <a class="nav-link" href="account-delete.html">
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
              <div class="col-lg-8 col-xl-9 ps-xl-5">
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

                {/* <!-- Payment detail START --> */}
                <div class="card bg-transparent border">
                  {/* <!-- Card header --> */}
                  <div class="card-header bg-transparent border-bottom">
                    <h4 class="card-header-title">Payment Details</h4>
                  </div>

                  {/* <!-- Card body START --> */}
                  <div class="card-body p-2 p-sm-4">
                    <h5>Saved Card</h5>
                    <div class="row g-4">
                      {/* <!-- Visa card --> */}
                      <div class="col-md-6">
                        <div class="card">
                          <div class="bg-primary p-4 rounded-3">
                            <div class="d-flex justify-content-between align-items-start">
                              <img class="w-40px" src={img1} alt="" />
                              {/* <!-- Card action START --> */}
                              <div class="dropdown">
                                <a
                                  class="text-white"
                                  href="#"
                                  id="creditcardDropdown"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  data-bs-auto-close="outside"
                                  aria-expanded="false"
                                >
                                  {/* <!-- Dropdown Icon --> */}
                                  <svg width="24" height="24" fill="none">
                                    <circle
                                      fill="currentColor"
                                      cx="12.5"
                                      cy="3.5"
                                      r="2.5"
                                    ></circle>
                                    <circle
                                      fill="currentColor"
                                      opacity="0.5"
                                      cx="12.5"
                                      cy="11.5"
                                      r="2.5"
                                    ></circle>
                                    <circle
                                      fill="currentColor"
                                      opacity="0.3"
                                      cx="12.5"
                                      cy="19.5"
                                      r="2.5"
                                    ></circle>
                                  </svg>
                                </a>
                                <ul
                                  class="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="creditcardDropdown"
                                >
                                  <li>
                                    <a class="dropdown-item" href="#">
                                      <i class="bi bi-credit-card-2-front-fill me-2 fw-icon"></i>
                                      Edit card
                                    </a>
                                  </li>
                                  <li>
                                    <a class="dropdown-item" href="#">
                                      <i class="bi bi-calculator me-2 fw-icon"></i>
                                      Currency converter
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* <!-- Card action END --> */}
                            </div>
                            <h4 class="text-white mt-4">**** **** **** 1569</h4>
                            <div class="d-flex justify-content-between text-white">
                              <span>Valid thru: 12/26</span>
                              <span>CVV: ***</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Master card --> */}
                      <div class="col-md-6">
                        <div class="card">
                          <div class="bg-danger p-4 rounded-3">
                            <div class="d-flex justify-content-between align-items-start">
                              <img class="w-40px" src={img2} alt="" />
                              {/* <!-- Card action START --> */}
                              <div class="dropdown">
                                <a
                                  class="text-white"
                                  href="#"
                                  id="creditcardDropdown2"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  data-bs-auto-close="outside"
                                  aria-expanded="false"
                                >
                                  {/* <!-- Dropdown Icon --> */}
                                  <svg width="24" height="24" fill="none">
                                    <circle
                                      fill="currentColor"
                                      cx="12.5"
                                      cy="3.5"
                                      r="2.5"
                                    ></circle>
                                    <circle
                                      fill="currentColor"
                                      opacity="0.5"
                                      cx="12.5"
                                      cy="11.5"
                                      r="2.5"
                                    ></circle>
                                    <circle
                                      fill="currentColor"
                                      opacity="0.3"
                                      cx="12.5"
                                      cy="19.5"
                                      r="2.5"
                                    ></circle>
                                  </svg>
                                </a>
                                <ul
                                  class="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="creditcardDropdown2"
                                >
                                  <li>
                                    <a class="dropdown-item" href="#">
                                      <i class="bi bi-credit-card-2-front-fill fw-icon me-2"></i>
                                      Edit card
                                    </a>
                                  </li>
                                  <li>
                                    <a class="dropdown-item" href="#">
                                      <i class="bi bi-calculator fw-icon me-2"></i>
                                      Currency converter
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* <!-- Card action END --> */}
                            </div>
                            <h4 class="text-white mt-4">**** **** **** 5620</h4>
                            <div class="d-flex justify-content-between text-white">
                              <span>Valid thru: 02/35</span>
                              <span>CVV: ***</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Add new card START --> */}
                    <div class="card border mt-4">
                      <div class="card-header border-bottom">
                        <h5 class="card-header-title">Add New Card</h5>
                      </div>

                      <div class="card-body">
                        <form class="row text-start g-4">
                          {/* <!-- Card number --> */}
                          <div class="col-12">
                            <label class="form-label">
                              Card Number<span class="text-danger">*</span>
                            </label>
                            <div class="position-relative">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="xxxx xxxx xxxx xxxx"
                              />
                              <img
                                src={img3}
                                class="w-40px position-absolute top-50 end-0 translate-middle-y me-2 d-none d-sm-block"
                                alt=""
                              />
                            </div>
                          </div>
                          {/* <!-- Expiration Date --> */}
                          <div class="col-md-6">
                            <label class="form-label">
                              Expiration Date<span class="text-danger">*</span>
                            </label>
                            <div class="input-group">
                              <input
                                type="text"
                                class="form-control"
                                maxlength="2"
                                placeholder="Month"
                              />
                              <input
                                type="text"
                                class="form-control"
                                maxlength="4"
                                placeholder="Year"
                              />
                            </div>
                          </div>
                          {/* <!-- Cvv code  --> */}
                          <div class="col-md-6">
                            <label class="form-label">
                              CVV / CVC<span class="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              maxlength="3"
                              placeholder="xxx"
                            />
                          </div>
                          {/* <!-- Card name --> */}
                          <div class="col-12">
                            <label class="form-label">
                              Name on Card<span class="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              aria-label="name of card holder"
                              placeholder="Enter name"
                            />
                          </div>
                          {/* <!-- Button --> */}
                          <div class="col-12">
                            <button class="btn btn-primary mb-0">
                              Add card
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* <!-- Add new card END --> */}
                  </div>
                  {/* <!-- Card body END --> */}
                </div>
                {/* <!-- Payment detail END --> */}
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

export default PaymentDetails;
