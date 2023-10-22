import React from "react";
import img from "../../assets/images/gallery/13.jpg";
import img1 from "../../assets/images/bg/22.jpg";
import img2 from "../../assets/images/products/04.jpg";
import { Link } from "react-router-dom";
import AboutNav from "../../components/about-nav/About-Nav";

function Product() {
  return (
    // <div><!-- **************** MAIN CONTENT START **************** -->
    <main>
      {/* <!-- ======================= */}
      <AboutNav />
      {/* Main Banner START --> */}
      <section class="pt-4">
        <div class="container">
          {/* <!-- Title --> */}
          <div class="row">
            <div class="col-12 mb-4">
              <h1 class="fs-3">My Cart</h1>
              {/* <!-- Location --> */}
              <p class="fw-bold mb-0">
                <i class="bi bi-cart me-2"></i>Fill your cart with joy, for
                every purchase is a step towards a happier you..
              </p>
            </div>
          </div>

          {/* <!-- Slider START --> */}
          <div class="tiny-slider arrow-round arrow-blur">
            <div
              class="tiny-slider-inner"
              data-autoplay="true"
              data-arrow="true"
              data-edge="0"
              data-dots="false"
              data-items="2"
              data-items-sm="1"
            >
              {/* <!-- Slider item --> */}
              <div>
                <a
                  class="w-100 h-100"
                  data-glightbox
                  data-gallery="gallery"
                  href={img}
                ></a>
              </div>
            </div>
          </div>
          {/* <!-- Slider START --> */}
        </div>
      </section>
      {/* <!-- ======================= */}
      {/* Main Banner END --> */}

      {/* <!-- ======================= */}
      {/* Room detail START --> */}
      <section class="pt-0">
        <div class="container">
          <div class="row">
            {/* <!-- Detail START --> */}
            <div class="col-xl-7">
              <div class="card bg-transparent p-0">
                {/* <!-- Card header --> */}
                <div class="card-header bg-transparent border-bottom d-sm-flex justify-content-sm-between align-items-center p-0 pb-3">
                  <h4 class="mb-2 mb-sm-0">Other Suggestions</h4>

                  <div class="col-sm-4">
                    <form class="form-control-bg-light">
                      <select class="form-select form-select-sm js-choice border-0">
                        <option value="">Select Option</option>
                        <option>Recently search</option>
                        <option>Most popular</option>
                        <option>Top rated</option>
                      </select>
                    </form>
                  </div>
                </div>

                {/* <!-- Card body START --> */}
                <div class="card-body p-0 pt-3">
                  <div class="vstack gap-5">
                    {/* <!-- Room item START --> */}

                    {/* <!-- Room item START --> */}
                    <div class="card border bg-transparent p-3">
                      <div class="row g-3 g-md-4">
                        {/* <!-- Image and content --> */}
                        <div class="col-md-4">
                          {/* <!-- Image --> */}
                          <div class="position-relative">
                            <img src={img2} class="card-img" alt="" />
                          </div>
                        </div>

                        {/* <!-- Room detail START --> */}
                        <div class="col-md-8">
                          <div class="card-body d-flex flex-column h-100 p-0">
                            {/* <!-- Title --> */}
                            <h5 class="card-title">Red Cabbage</h5>

                            {/* <!-- List --> */}
                            <ul class="nav small nav-divider mb-0">
                              <li class="nav-item mb-0">
                                <i class="fa-regular fa-square me-1"></i>
                                Calories: 25 kcal
                              </li>
                              <li class="nav-item mb-0">
                                <i class="fa-solid fa-table-cells-large me-1"></i>
                                Carbohydrates: 5.8 grams
                              </li>
                              <li class="nav-item mb-0">
                                <i class="fa-solid fa-bed me-1"></i>Protein: 1.3
                                grams
                              </li>
                              <li class="nav-item mb-0">
                                <i class="fa-solid fa-bed me-1"></i>Fat: 0.1
                                grams
                              </li>
                            </ul>

                            {/* <!-- Price and button --> */}
                            <div class="d-flex justify-content-between align-items-center mt-2 mt-md-auto">
                              <div class="d-flex text-success">
                                <h6 class="h5 mb-0 text-success">Ksh.300</h6>
                              </div>
                              <a href="#" class="btn btn-sm btn-dark mb-0">
                                Remove from Cart
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Room detail START --> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Card body END --> */}
              </div>
            </div>
            {/* <!-- Detail END --> */}

            {/* <!-- Right side content START --> */}
            <aside class="col-xl-5 d-none d-xl-block">
              <div class="card bg-transparent border">
                {/* <!-- Card header START --> */}
                <div class="card-header bg-transparent border-bottom">
                  {/* <!-- Title --> */}
                  <h4 class="card-title mb-0">Price Summary</h4>
                </div>
                {/* <!-- Card header END --> */}

                {/* <!-- Card body START --> */}
                <div class="card-body">
                  {/* <!-- List --> */}
                  <ul class="list-group list-group-borderless mb-3">
                    <li class="list-group-item px-2 d-flex justify-content-between">
                      <span class="h6 fw-light mb-0">
                        10% campaign discount
                      </span>
                      <span class="h6 fw-light mb-0">Ksh.-500</span>
                    </li>
                    <li class="list-group-item px-2 d-flex justify-content-between">
                      <span class="h6 fw-light mb-0">Services Fee</span>
                      <span class="h6 fw-light mb-0">Ksh.100</span>
                    </li>
                    <li class="list-group-item bg-light d-flex justify-content-between rounded-2 px-2 mt-2">
                      <span class="h5 fw-normal mb-0 ps-1">Total</span>
                      <span class="h5 fw-normal mb-0">Ksh.1350</span>
                    </li>
                  </ul>

                  {/* <!-- Button --> */}
                  <div class="d-grid gap-2">
                    <Link to="/confirmation" class="btn btn-dark mb-0">
                      Continue To Purchase
                    </Link>
                  </div>
                </div>
                {/* <!-- Card body END --> */}
              </div>
            </aside>
            {/* <!-- Right side content END --> */}
          </div>
        </div>
      </section>
      {/* <!-- ======================= */}
      {/* Room detail END --> */}
    </main>
    // {/* <!-- **************** MAIN CONTENT END **************** --> */}
  );
}

export default Product;
