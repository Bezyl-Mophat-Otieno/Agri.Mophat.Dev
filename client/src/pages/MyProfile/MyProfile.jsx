import React from "react";
import img1 from "../../assets/images/avatar/01.jpg";
import { Link } from "react-router-dom";
import AboutNav from "../../components/about-nav/About-Nav";
import SideNavProfile from "../../components/SideNav/SideNavProfile";
import "./MyProfile.css";
function MyProfile() {
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
              <div class="col-lg-6 col-xl-3 d-flex justify-content-center">
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

                <div class="vstack gap-4">
                  {/* <!-- Personal info START --> */}
                  <div class="card border">
                    {/* <!-- Card header --> */}
                    <div class="card-header border-bottom">
                      <h4 class="card-header-title">Personal Information</h4>
                    </div>

                    {/* <!-- Card body START --> */}
                    <div class="card-body">
                      {/* <!-- Form START --> */}
                      <form class="row g-3">
                        {/* <!-- Profile photo --> */}
                        <div class="col-12">
                          <label class="form-label">
                            Upload your profile photo
                            <span class="text-danger">*</span>
                          </label>
                          <div class="d-flex align-items-center">
                            <label
                              class="position-relative me-4"
                              for="uploadfile-1"
                              title="Replace this pic"
                            >
                              {/* <!-- Avatar place holder --> */}
                              <span class="avatar avatar-xl">
                                <img
                                  id="uploadfile-1-preview"
                                  class="avatar-img rounded-circle border border-white border-3 shadow"
                                  src={img1}
                                  alt=""
                                />
                              </span>
                            </label>
                            {/* <!-- Upload button --> */}
                            <label
                              class="btn btn-sm btn-primary-soft mb-0"
                              for="uploadfile-1"
                            >
                              Change
                            </label>
                            <input
                              id="uploadfile-1"
                              class="form-control d-none"
                              type="file"
                            />
                          </div>
                        </div>

                        {/* <!-- Name --> */}
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter your full name"
                          />
                        </div>

                        {/* <!-- Email --> */}
                        <div class="col-md-6">
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Enter your email id"
                          />
                        </div>

                        {/* <!-- Mobile --> */}
                        <div class="col-md-6">
                          <label class="form-label"></label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter your mobile number"
                          />
                        </div>

                        {/* <!-- Nationality --> */}
                        <div class="col-md-6">
                          <select class="form-select js-choice">
                            <option value="">Select your country</option>
                            <option>USA</option>
                            <option selected>Paris</option>
                            <option>India</option>
                            <option>UK</option>
                          </select>
                        </div>

                        {/* <!-- Date of birth --> */}
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control flatpickr"
                            placeholder="Enter date of birth"
                            data-date-format="d M Y"
                          />
                        </div>

                        {/* <!-- Gender --> */}
                        <div class="col-md-6">
                          <div class="d-flex gap-4">
                            <div class="form-check radio-bg-light">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                checked=""
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault1"
                              >
                                Male
                              </label>
                            </div>
                            <div class="form-check radio-bg-light">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault2"
                              >
                                Female
                              </label>
                            </div>
                            <div class="form-check radio-bg-light">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault3"
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault3"
                              >
                                Others
                              </label>
                            </div>
                          </div>
                        </div>

                        {/* <!-- Address --> */}
                        <div class="col-12">
                          <label>Enter your Address</label>
                          <textarea
                            class="form-control"
                            rows="3"
                            spellcheck="false"
                          ></textarea>
                        </div>

                        {/* <!-- Button --> */}
                        <div class="col-12 text-end">
                          <a href="#" class="btn btn-primary mb-0">
                            Save Changes
                          </a>
                        </div>
                      </form>
                      {/* <!-- Form END --> */}
                    </div>
                    {/* <!-- Card body END --> */}
                  </div>
                  {/* <!-- Personal info END --> */}

                  {/* <!-- Update email START --> */}
                  <div class="card border">
                    {/* <!-- Card header --> */}
                    <div class="card-header border-bottom">
                      <h4 class="card-header-title">Update email</h4>
                      <p class="mb-0">
                        Your current email address is{" "}
                        <span class="text-primary">example@gmail.com</span>
                      </p>
                    </div>

                    {/* <!-- Card body START --> */}
                    <div class="card-body">
                      <form>
                        {/* <!-- Email --> */}

                        <input
                          type="email"
                          class="form-control"
                          placeholder="Enter your email id"
                        />

                        <div class="text-end mt-3">
                          <a href="#" class="btn btn-primary mb-0">
                            Save Email
                          </a>
                        </div>
                      </form>
                    </div>
                    {/* <!-- Card body END --> */}
                  </div>
                  {/* <!-- Update email END --> */}

                  {/* <!-- Update Password START --> */}
                  <div class="card border">
                    {/* <!-- Card header --> */}
                    <div class="card-header border-bottom">
                      <h4 class="card-header-title">Update Password</h4>
                      <p class="mb-0">
                        Your current email address is{" "}
                        <span class="text-primary">example@gmail.com</span>
                      </p>
                    </div>

                    {/* <!-- Card body START --> */}
                    <form class="card-body">
                      {/* <!-- Current password --> */}
                      <div class="mb-3">
                        <input
                          class="form-control"
                          type="password"
                          placeholder="Enter current password"
                        />
                      </div>
                      {/* <!-- New password --> */}
                      <div class="mb-3">
                        <div class="input-group">
                          <input
                            class="form-control fakepassword"
                            placeholder="Enter new password"
                            type="password"
                            id="psw-input"
                          />
                          <span class="input-group-text p-0 bg-transparent">
                            <i class="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
                          </span>
                        </div>
                      </div>
                      {/* <!-- Confirm --> */}
                      <div class="mb-3">
                        <input
                          class="form-control"
                          type="password"
                          placeholder="Confirm new password"
                        />
                      </div>

                      <div class="text-end">
                        <a href="#" class="btn btn-primary mb-0">
                          Change Password
                        </a>
                      </div>
                    </form>
                    {/* <!-- Card body END --> */}
                  </div>
                  {/* <!-- Update Password END --> */}
                </div>
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

export default MyProfile;
