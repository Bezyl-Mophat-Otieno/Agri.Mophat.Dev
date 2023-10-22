import React from "react";
import img from "../../assets/images/bg/22.jpg";
import AboutNav from "../../components/about-nav/About-Nav";

function OrderConfirm() {
  return (
    <div>
      {/* <!-- **************** MAIN CONTENT START **************** --> */}
      <AboutNav />
      <main>
        {/* <!-- ======================= */}
        {/* Main content START --> */}
        <section class="pt-4">
          <div class="container">
            <div class="row">
              <div class="col-md-10 col-xl-8 mx-auto">
                <div class="card shadow">
                  {/* <!-- Image --> */}
                  <img src={img} class="rounded-top" alt="" />

                  {/* <!-- Card body --> */}
                  <div class="card-body text-center p-4">
                    {/* <!-- Title --> */}
                    <h1 class="card-title fs-3">
                      🎊 Congratulations on your purchase! 🎊
                    </h1>
                    <p class="lead mb-3">
                      Your order has been successfully placed.
                    </p>

                    {/* <!-- List --> */}
                    <div class="row justify-content-between text-start mb-4">
                      <div class="col-lg-5">
                        <ul class="list-group list-group-borderless">
                          <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                            <span class="mb-0">
                              <i class="bi bi-vr fa-fw me-2"></i>Order ID:
                            </span>
                            <span class="h6 fw-normal mb-0">BS-58678</span>
                          </li>
                          <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                            <span class="mb-0">
                              <i class="bi bi-person fa-fw me-2"></i>Order by:
                            </span>
                            <span class="h6 fw-normal mb-0">
                              Frances Guerrero
                            </span>
                          </li>
                          <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                            <span class="mb-0">
                              <i class="bi bi-wallet2 fa-fw me-2"></i>Payment
                              Method:
                            </span>
                            <span class="h6 fw-normal mb-0">Credit card</span>
                          </li>
                          <li class="list-group-item d-sm-flex justify-content-between align-items-center">
                            <span class="mb-0">
                              <i class="bi bi-currency-dollar fa-fw me-2"></i>
                              Total Price:
                            </span>
                            <span class="h6 fw-normal mb-0">Ksh.1350</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* <!-- Button --> */}
                    <div class="d-sm-flex justify-content-sm-end d-grid">
                      {/* <!-- Share button with dropdown --> */}
                      <div class="dropdown me-sm-2 mb-2 mb-sm-0">
                        <a
                          href="#"
                          class="btn btn-light mb-0 w-100"
                          role="button"
                          id="dropdownShare"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i class="bi bi-share me-2"></i>Share
                        </a>
                        {/* <!-- dropdown button --> */}
                        <ul
                          class="dropdown-menu dropdown-menu-end min-w-auto shadow rounded"
                          aria-labelledby="dropdownShare"
                        >
                          <li>
                            <a class="dropdown-item" href="#">
                              <i class="fab fa-twitter-square me-2"></i>Twitter
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
                              <i class="fab fa-linkedin me-2"></i>LinkedIn
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              <i class="fas fa-copy me-2"></i>Copy link
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Download button --> */}
                      <a href="#" class="btn btn-primary mb-0">
                        <i class="bi bi-file-pdf me-2"></i>Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ======================= */}
        {/* Main content START --> */}
      </main>
    </div>
    // {/* <!-- **************** MAIN CONTENT END **************** --></div> */}
  );
}

export default OrderConfirm;
