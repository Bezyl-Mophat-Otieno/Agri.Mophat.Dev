import React from "react";
import img from "../../assets/images/avatar/01.jpg";
import img1 from "../../assets/images/category/hotel/4by3/10.jpg";
import img2 from "../../assets/images/category/hotel/4by3/11.jpg";

function Wishlist() {
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
                            <a
                              class="nav-link active"
                              href="account-wishlist.html"
                            >
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

                {/* <!-- Wishlist START --> */}
                <div class="card border bg-transparent">
                  {/* <!-- Card header --> */}
                  <div class="card-header bg-transparent border-bottom">
                    <h4 class="card-header-title">My Wishlist</h4>
                  </div>

                  {/* <!-- Card body START --> */}
                  <div class="card-body vstack gap-4">
                    {/* <!-- Select and button --> */}
                    <form class="d-flex justify-content-between">
                      <div class="col-6 col-xl-3">
                        <select class="form-select form-select-sm js-choice border-0">
                          <option value="">Sort by</option>
                          <option>Recently search</option>
                          <option>Most popular</option>
                          <option>Top rated</option>
                        </select>
                      </div>
                      {/* <!-- Button --> */}
                      <button class="btn btn-danger-soft mb-0">
                        <i class="fas fa-trash me-2"></i>Remove all
                      </button>
                    </form>

                    {/* <!-- Wishlist item START --> */}
                    <div class="card shadow p-2">
                      <div class="row g-0">
                        {/* <!-- Card img --> */}
                        <div class="col-md-3">
                          <img
                            src={img1}
                            class="card-img rounded-2"
                            alt="Card image"
                          />
                        </div>

                        {/* <!-- Card body --> */}
                        <div class="col-md-9">
                          <div class="card-body py-md-2 d-flex flex-column h-100">
                            {/* <!-- Rating and buttons --> */}
                            <div class="d-flex justify-content-between align-items-center">
                              <ul class="list-inline small mb-0">
                                <li class="list-inline-item me-0">
                                  <i class="fa-solid fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item me-0">
                                  <i class="fa-solid fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item me-0">
                                  <i class="fa-solid fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item me-0">
                                  <i class="fa-solid fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fa-solid fa-star-half-alt text-warning"></i>
                                </li>
                              </ul>

                              <ul class="list-inline mb-0">
                                {/* <!-- Heart icon --> */}
                                <li class="list-inline-item">
                                  <a
                                    href="#"
                                    class="btn btn-sm btn-round btn-danger mb-0"
                                  >
                                    <i class="fa-solid fa-fw fa-heart"></i>
                                  </a>
                                </li>
                                {/* <!-- Share icon --> */}
                                <li class="list-inline-item dropdown">
                                  {/* <!-- Share button --> */}
                                  <a
                                    href="#"
                                    class="btn btn-sm btn-round btn-light mb-0"
                                    role="button"
                                    id="dropdownShare2"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i class="fa-solid fa-fw fa-share-alt"></i>
                                  </a>
                                  {/* <!-- dropdown button --> */}
                                  <ul
                                    class="dropdown-menu dropdown-menu-end min-w-auto shadow rounded"
                                    aria-labelledby="dropdownShare2"
                                  >
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        <i class="fab fa-twitter-square me-2"></i>
                                        Twitter
                                      </a>
                                    </li>
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        <i class="fab fa-facebook-square me-2"></i>
                                        Facebook
                                      </a>
                                    </li>
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        <i class="fab fa-linkedin me-2"></i>
                                        LinkedIn
                                      </a>
                                    </li>
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        <i class="fa-solid fa-copy me-2"></i>
                                        Copy link
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>

                            {/* <!-- Title --> */}
                            <h5 class="card-title mb-1">
                              <a href="hotel-detail.html">
                                Pride moon Village Resort & Spa
                              </a>
                            </h5>
                            <small>
                              <i class="bi bi-geo-alt me-2"></i>31J W Spark
                              Street, California - 24578
                            </small>

                            {/* <!-- Price and Button --> */}
                            <div class="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
                              {/* <!-- Button --> */}
                              <div class="d-flex align-items-center">
                                <h5 class="fw-bold mb-0 me-1">$980</h5>
                                <span class="mb-0 me-2">/day</span>
                              </div>
                              {/* <!-- Price --> */}
                              <div class="mt-3 mt-sm-0">
                                <a
                                  href="hotel-detail.html"
                                  class="btn btn-sm btn-dark w-100 mb-0"
                                >
                                  View hotel
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Wishlist item END --> */}

                    {/* <!-- Wishlist item START --> */}
                    <div class="card shadow p-2">
                      <div class="row g-0">
                        {/* <!-- Card img --> */}
                        <div class="col-md-3">
                          <img
                            src={img2}
                            class="card-img rounded-2"
                            alt="Card image"
                          />
                        </div>

                        {/* <!-- Card body --> */}
                        <div class="col-md-9">
                          <div class="card-body d-flex flex-column h-100 py-md-2">
                            {/* <!-- Rating and buttons --> */}
                            <div class="d-flex justify-content-between align-items-center">
                              <ul class="list-inline small mb-0">
                                <li class="list-inline-item me-0">
                                  <i class="fa-solid fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item me-0">
                                  <i class="fa-solid fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item me-0">
                                  <i class="fa-solid fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item me-0">
                                  <i class="fa-solid fa-star text-warning"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fa-solid fa-star-half-alt text-warning"></i>
                                </li>
                              </ul>

                              <ul class="list-inline mb-0">
                                {/* <!-- Heart icon --> */}
                                <li class="list-inline-item">
                                  <a
                                    href="#"
                                    class="btn btn-sm btn-round btn-danger mb-0"
                                  >
                                    <i class="fa-solid fa-fw fa-heart"></i>
                                  </a>
                                </li>
                                {/* <!-- Share icon --> */}
                                <li class="list-inline-item dropdown">
                                  <a
                                    href="#"
                                    class="btn btn-sm btn-round btn-light mb-0"
                                    role="button"
                                    id="dropdownShare3"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i class="fa-solid fa-fw fa-share-alt"></i>
                                  </a>
                                  {/* <!-- dropdown button --> */}
                                  <ul
                                    class="dropdown-menu dropdown-menu-end min-w-auto shadow rounded"
                                    aria-labelledby="dropdownShare3"
                                  >
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        <i class="fab fa-twitter-square me-2"></i>
                                        Twitter
                                      </a>
                                    </li>
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        <i class="fab fa-facebook-square me-2"></i>
                                        Facebook
                                      </a>
                                    </li>
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        <i class="fab fa-linkedin me-2"></i>
                                        LinkedIn
                                      </a>
                                    </li>
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        <i class="fa-solid fa-copy me-2"></i>
                                        Copy link
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>

                            {/* <!-- Title --> */}
                            <h5 class="card-title mb-1">
                              <a href="hotel-detail.html">Royal Beach Resort</a>
                            </h5>
                            <small>
                              <i class="bi bi-geo-alt me-2"></i>Manhattan
                              street, London - 24578
                            </small>

                            {/* <!-- Price and Button --> */}
                            <div class="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
                              {/* <!-- Button --> */}
                              <div class="d-flex align-items-center">
                                <h5 class="fw-bold mb-0 me-1">$540</h5>
                                <span class="mb-0 me-2">/day</span>
                              </div>
                              {/* <!-- Price --> */}
                              <div class="mt-3 mt-sm-0">
                                <a
                                  href="hotel-detail.html"
                                  class="btn btn-sm btn-dark w-100 mb-0"
                                >
                                  View hotel
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Wishlist item END --> */}
                  </div>
                  {/* <!-- Card body END --> */}
                </div>
                {/* <!-- Wishlist END --> */}
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

export default Wishlist;
