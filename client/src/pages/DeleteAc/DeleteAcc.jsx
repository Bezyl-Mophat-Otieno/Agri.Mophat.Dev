import React from "react";
import img from "../../assets/images/avatar/01.jpg";
import SideNavProfile from "../../components/SideNav/SideNavProfile";
import AboutNav from "../../components/about-nav/About-Nav";

function DeleteAcc() {
  return (
    <>
      {/* <!-- **************** MAIN CONTENT START **************** --> */}
      <AboutNav />
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
                  <SideNavProfile />
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
