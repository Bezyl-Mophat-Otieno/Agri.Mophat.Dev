import React from "react";
import img from "../../assets/images/element/error.svg";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      {/* <!-- **************** MAIN CONTENT START **************** --> */}
      <main>
        {/* <!-- ======================= */}
        {/* Main banner START --> */}
        <section>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-10 text-center mx-auto">
                {/* <!-- Image --> */}
                <img src={img} class="h-lg-400px mb-4" alt="" />
                {/* <!-- Title --> */}
                <h1 class="display-1 text-primary mb-0">404</h1>
                {/* <!-- Subtitle --> */}
                <h2>Oh no, something went wrong!</h2>
                {/* <!-- info --> */}
                <p class="mb-4">
                  Either something went wrong or this page doesn't exist
                  anymore.
                </p>
                {/* <!-- Button --> */}
                <Link to="/" class="btn btn-light mb-0">
                  Take me to Homepage
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ======================= */}
        {/* Main banner START --> */}
      </main>
      {/* <!-- **************** MAIN CONTENT END **************** --> */}
    </>
  );
}

export default Error;
