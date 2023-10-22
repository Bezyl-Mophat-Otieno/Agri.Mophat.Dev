import React from "react";

function AddProduct() {
  return (
    <>
      {/* <!-- Step 3 content START --> */}
      <div
        id="step-3"
        role="tabpanel"
        class="content "
        aria-labelledby="steppertrigger3"
      >
        <div class="vstack gap-4">
          {/* <!-- Title --> */}
          <h4 class="mb-0">Price & Policy</h4>

          {/* <!-- Listing price START --> */}
          <div class="card shadow">
            {/* <!-- Card header --> */}
            <div class="card-header border-bottom">
              <h5 class="mb-0">Listing Price</h5>
            </div>

            {/* <!-- Card body START --> */}
            <div class="card-body">
              <div class="row g-4">
                {/* <!-- Currency --> */}
                <div class="col-md-6">
                  <label class="form-label">Currency</label>
                  <select class="form-select js-choice border-0 z-index-9 bg-transparent">
                    <option value="">Select item</option>
                    <option>USD</option>
                    <option>EURRO</option>
                    <option>VND</option>
                  </select>
                </div>

                {/* <!-- Base Price --> */}
                <div class="col-md-6">
                  <label class="form-label">Base Price *</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter price"
                  />
                </div>

                {/* <!-- Discount --> */}
                <div class="col-md-6">
                  <label class="form-label">Discount *</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter discount"
                  />
                </div>

                {/* <!-- Rating --> */}
                <div class="col-md-6">
                  <label class="form-label">Rating</label>
                  <select class="form-select js-choice border-0 z-index-9 bg-transparent">
                    <option value="">Select item</option>
                    <option>★★★★★</option>
                    <option>★★★★☆</option>
                    <option>★★★☆☆</option>
                    <option>★★☆☆☆</option>
                    <option>★☆☆☆☆</option>
                  </select>
                </div>
              </div>
            </div>
            {/* <!-- Card body END --> */}
          </div>
          {/* <!-- Listing price END --> */}
        </div>
      </div>
      {/* <!-- Upload image START --> */}
      <div class="card shadow">
        {/* <!-- Card header --> */}
        <div class="card-header border-bottom">
          {/* <!-- Title --> */}
          <h5 class="mb-0">Upload Images</h5>
        </div>

        {/* <!-- Card body START --> */}
        <div class="card-body">
          <div class="row g-3">
            {/* <!-- Thumbnail image --> */}
            <div class="col-12">
              <label class="form-label">Upload thumbnail image *</label>
              <input
                class="form-control"
                type="file"
                name="my-image"
                id="image"
                accept="image/gif, image/jpeg, image/png"
              />
              <p class="small mb-0 mt-2">
                <b>Note:</b> Only JPG, JPEG, and PNG. Our suggested dimensions
                are 600px * 450px. The larger image will be cropped to 4:3 to
                fit our thumbnails/previews.
              </p>
            </div>

            {/* <!-- Image Gallery --> */}
            <div class="col-12">
              <label class="form-label">Upload image gallery *</label>
              <div
                class="dropzone dropzone-custom"
                data-dropzone='{"maxFiles": 5, "addRemoveLinks": false}'
              >
                <div class="dz-message needsclick">
                  <i class="bi bi-upload display-3"></i>
                  <p>Drop files here or click to upload.</p>
                </div>
                <div class="dz-preview row g-4">
                  <div class="col-xl-2 col-md-4 col-sm-6">
                    <div class="card p-2 mb-0 shadow-none border position-relative h-100">
                      {/* <!-- Image --> */}
                      <img
                        data-dz-thumbnail
                        src="#"
                        class="rounded bg-light"
                        alt=""
                      />
                      {/* <!-- info --> */}
                      <div class="mt-2">
                        <a
                          href="javascript:void(0);"
                          class="text-muted fw-bold"
                          data-dz-name
                        ></a>
                        <p class="mb-0 small" data-dz-size></p>
                      </div>
                      {/* <!-- Close btn --> */}
                      <div class="position-absolute top-0 start-100 translate-middle">
                        <a
                          href="#!"
                          class="btn btn-danger rounded-circle icon-sm p-0"
                          data-dz-remove
                        >
                          <i class="fas fa-times"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p class="small mb-0 mt-2">
                <b>Note:</b> Only JPG, JPEG, and PNG. Our suggested dimensions
                are 600px * 450px. The larger image will be cropped to 4:3 to
                fit our thumbnails/previews.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- Card body END --> */}
      </div>
      {/* <!-- Upload image END --> */}
      {/* <!-- Step 3 button --> */}
      <div class="d-flex justify-content-between">
        <a href="listing-added.html" class="btn btn-success mb-0">
          Add Product
        </a>
      </div>
    </>
  );
}

export default AddProduct;
