import React from "react";
import "./About.css";
import Footer from "../../components/footer/Footer";
import img from "../../assets/images/element/06.svg";
import img1 from "../../assets/images/element/07.svg";
import img2 from "../../assets/images/element/08.svg";
import img3 from "../../assets/images/about/14.jpg";
import img4 from "../../assets/images/about/15.jpg";
import img5 from "../../assets/images/about/16.jpg";
import img6 from "../../assets/images/team/03.jpg";
import img7 from "../../assets/images/team/04.jpg";
import img8 from "../../assets/images/team/05.jpg";
import img9 from "../../assets/images/team/06.jpg";
import AboutNav from "../../components/about-nav/About-Nav";

function About() {
  return (
    <>
      <AboutNav />
      <main>
        {/* <!-- ======================= */}
        {/* Main banner START --> */}
        <section>
          <div class="container">
            <div class="row mb-5">
              <div class="col-xl-10 mx-auto text-center">
                {/* <!-- Title --> */}
                <h1>
                  Unveiling the Flavors of the Earth, Fresh From Our Fields!
                </h1>

                {/* <!-- Meta --> */}
                <div class="hstack gap-3 flex-wrap justify-content-center">
                  {/* <!-- Item --> */}
                  <h6 class="bg-mode shadow rounded-2 fw-normal d-inline-block py-2 px-4">
                    <img src={img} class="h-20px me-2" alt="" />
                    14K+ Global Customers
                  </h6>

                  {/* <!-- Item --> */}
                  <h6 class="bg-mode shadow rounded-2 fw-normal d-inline-block py-2 px-4">
                    <img src={img1} class="h-20px me-2" alt="" />
                    10K+ Happy Customers
                  </h6>

                  {/* <!-- Item --> */}
                  <h6 class="bg-mode shadow rounded-2 fw-normal d-inline-block py-2 px-4">
                    <img src={img2} class="h-20px me-2" alt="" />
                    1M+ Subscribers
                  </h6>
                </div>
              </div>
              {/* </div> <!-- Row END --> */}

              {/* <!-- Image START --> */}
              <div class="row g-4 align-items-center">
                {/* <!-- Image --> */}
                <div class="col-md-6">
                  <img src={img3} class="rounded-3" alt="" />
                </div>

                <div class="col-md-6">
                  <div class="row g-4">
                    {/* <!-- Image --> */}
                    <div class="col-md-8">
                      <img src={img4} class="rounded-3" alt="" />
                    </div>

                    {/* <!-- Image --> */}
                    <div class="col-12">
                      <img src={img5} class="rounded-3" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Image END --> */}
            </div>
          </div>
        </section>
        {/* <!-- ======================= */}
        {/* Main banner START --> */}

        {/* <!-- ======================= */}
        {/* About content START --> */}
        <section class="pt-0 pt-lg-5">
          <div class="container">
            {/* <!-- Content START --> */}
            <div class="row mb-4 mb-md-5">
              <div class="col-md-10 mx-auto">
                <h3 class="mb-4">Our Story</h3>
                <p class="fw-bold">
                  Established in 2023, our journey began with a deep-rooted
                  passion for fostering a connection between the essence of the
                  fields and the comfort of your home. Driven by a commitment to
                  empower both farmers and consumers, our platform has since
                  blossomed into a digital marketplace dedicated to providing
                  easy access to a diverse array of farm-fresh products. With
                  every step forward, we remain dedicated to sowing the seeds of
                  sustainable agriculture and nurturing a community of mindful
                  consumers and conscientious farmers. Welcome to our story of
                  growth, nourishment, and a shared love for the land.
                </p>
                <p class="mb-0">
                  Rooted in a passion for wholesome, farm-fresh produce and a
                  vision to bridge the gap between farmers and consumers, our
                  agricultural e-commerce platform sprouted from a collective
                  dream to redefine the way we access and appreciate nature's
                  bounty. Driven by the desire to promote sustainable farming
                  practices and empower local agricultural communities, our
                  journey began with a commitment to bring the essence of the
                  fields directly to your doorstep. With every seed sown and
                  every connection cultivated, we continue to nurture this
                  vision, fostering a digital marketplace that not only offers a
                  diverse selection of premium produce but also cultivates a
                  deeper appreciation for the roots of our nourishment. Join us
                  in celebrating the richness of the land and the vibrant
                  tapestry of agricultural excellence.
                </p>
              </div>
            </div>
            {/* <!-- Content END --> */}

            {/* <!-- Services START --> */}
            <div class="row g-4">
              {/* <!-- Service item --> */}
              <div class="col-sm-6 col-lg-3">
                <div class="icon-lg bg-orange bg-opacity-10 text-orange rounded-2">
                  <i class="fa-solid fa-hotel fs-5"></i>
                </div>
                <h5 class="mt-2">Hotel Booking</h5>
                <p class="mb-0">
                  A pleasure exertion if believed provided to. All led out world
                  this music while asked.
                </p>
              </div>

              {/* <!-- Service item --> */}
              <div class="col-sm-6 col-lg-3">
                <div class="icon-lg bg-success bg-opacity-10 text-success rounded-2">
                  <i class="fa-solid fa-plane fs-5"></i>
                </div>
                <h5 class="mt-2">Flight Booking</h5>
                <p class="mb-0">
                  Warrant private blushes removed an in equally totally
                  Objection do Mr prevailed.
                </p>
              </div>

              {/* <!-- Service item --> */}
              <div class="col-sm-6 col-lg-3">
                <div class="icon-lg bg-primary bg-opacity-10 text-primary rounded-2">
                  <i class="fa-solid fa-globe-americas fs-5"></i>
                </div>
                <h5 class="mt-2">Tour Booking</h5>
                <p class="mb-0">
                  Dashwood does provide stronger is. But discretion frequently
                  sir she instruments.
                </p>
              </div>

              {/* <!-- Service item --> */}
              <div class="col-sm-6 col-lg-3">
                <div class="icon-lg bg-info bg-opacity-10 text-info rounded-2">
                  <i class="fa-solid fa-car fs-5"></i>
                </div>
                <h5 class="mt-2">Cab Booking</h5>
                <p class="mb-0">
                  Imprudence attachment him his for sympathize. Large above be
                  to means.
                </p>
              </div>
            </div>
            {/* <!-- Services END --> */}
          </div>
        </section>
        {/* <!-- ======================= */}
        {/* About content END --> */}

        {/* <!-- ======================= */}
        {/* Team START --> */}
        <section class="pt-0">
          <div class="container">
            {/* <!-- Title --> */}
            <div class="row mb-4">
              <div class="col-12">
                <h2 class="mb-0">Our Team</h2>
              </div>
            </div>

            {/* <!-- Team START --> */}
            <div class="row g-4">
              {/* <!-- Team item START --> */}
              <div class="col-sm-6 col-lg-3">
                <div class="card card-element-hover bg-transparent">
                  <div class="position-relative">
                    {/* <!-- Image --> */}
                    <img src={img6} class="card-img" alt="" />

                    <div class="card-img-overlay hover-element d-flex p-3">
                      {/* <!-- Category --> */}
                      <div class="btn-group mt-auto">
                        <a href="#" class="btn btn-white mb-0">
                          <i class="fa-brands fa-facebook-f text-facebook"></i>
                        </a>
                        <a href="#" class="btn btn-white mb-0">
                          <i class="fa-brands fa-instagram text-instagram"></i>
                        </a>
                        <a href="#" class="btn btn-white mb-0">
                          <i class="fa-brands fa-twitter text-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Card body --> */}
                  <div class="card-body px-2 pb-0">
                    <h5 class="card-title">
                      <a href="#">Larry Lawson</a>
                    </h5>
                    <span>Editor in Chief</span>
                  </div>
                </div>
              </div>
              {/* <!-- Team item END --> */}

              {/* <!-- Team item START --> */}
              <div class="col-sm-6 col-lg-3">
                <div class="card card-element-hover bg-transparent">
                  <div class="position-relative">
                    {/* <!-- Image --> */}
                    <img src={img7} class="card-img" alt="" />

                    <div class="card-img-overlay hover-element d-flex p-3">
                      {/* <!-- Category --> */}
                      <div class="btn-group mt-auto">
                        <a href="#" class="btn btn-white mb-0">
                          <i class="fa-brands fa-facebook-f text-facebook"></i>
                        </a>
                        <a href="#" class="btn btn-white mb-0">
                          <i class="fa-brands fa-instagram text-instagram"></i>
                        </a>
                        <a href="#" class="btn btn-white mb-0">
                          <i class="fa-brands fa-twitter text-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Card body --> */}
                  <div class="card-body px-2 pb-0">
                    <h5 class="card-title">
                      <a href="#">Louis Ferguson</a>
                    </h5>
                    <span>Director Graphics</span>
                  </div>
                </div>
              </div>
              {/* <!-- Team item END --> */}

              {/* <!-- Team item START --> */}
              <div class="col-sm-6 col-lg-3">
                <div class="card card-element-hover bg-transparent">
                  <div class="position-relative">
                    {/* <!-- Image --> */}
                    <img src={img8} class="card-img" alt="" />

                    <div class="card-img-overlay hover-element d-flex p-3">
                      {/* <!-- Category --> */}
                      <div class="btn-group mt-auto">
                        <a href="#" class="btn btn-white mb-0">
                          <i class="fa-brands fa-facebook-f text-facebook"></i>
                        </a>
                        <a href="#" class="btn btn-white mb-0">
                          <i class="fa-brands fa-instagram text-instagram"></i>
                        </a>
                        <a href="#" class="btn btn-white mb-0">
                          <i class="fa-brands fa-twitter text-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Card body --> */}
                  <div class="card-body px-2 pb-0">
                    <h5 class="card-title">
                      <a href="#">Louis Crawford</a>
                    </h5>
                    <span>Editor, Coverage</span>
                  </div>
                </div>
              </div>
              {/* <!-- Team item END --> */}

              {/* <!-- Team item START --> */}
              <div class="col-sm-6 col-lg-3">
                <div class="card card-element-hover bg-transparent">
                  <div class="position-relative">
                    {/* <!-- Image --> */}
                    <img src={img9} class="card-img" alt="" />

                    <div class="card-img-overlay hover-element d-flex p-3">
                      {/* <!-- Category --> */}
                      <div class="btn-group mt-auto">
                        <a href="#" class="btn btn-white mb-0">
                          <i class="fa-brands fa-facebook-f text-facebook"></i>
                        </a>
                        <a href="#" class="btn btn-white mb-0">
                          <i class="fa-brands fa-instagram text-instagram"></i>
                        </a>
                        <a href="#" class="btn btn-white mb-0">
                          <i class="fa-brands fa-twitter text-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Card body --> */}
                  <div class="card-body px-2 pb-0">
                    <h5 class="card-title">
                      <a href="#">Frances Guerrero</a>
                    </h5>
                    <span>CEO, Coverage</span>
                  </div>
                </div>
              </div>
              {/* <!-- Team item END --> */}
            </div>
            {/* <!-- Team END --> */}
          </div>
        </section>
        {/* <!-- ======================= */}
        {/* Team END --> */}
      </main>
    </>
  );
}

export default About;
