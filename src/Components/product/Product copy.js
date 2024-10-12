import React from "react";

const Product = () => {
  return (
    <>
      <div className="container-fluid event py-6">
        <div className="container">
          <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
              Faaliyetlerimiz
            </small>
            <h1 className="display-5 mb-5">
              Faaliyetlerimiz ve Çalışma Alanlarımız
            </h1>
          </div>
          <div className="tab-class text-center">
            <ul
              className="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp"
              data-wow-delay="0.1s"
            >
              <li className="nav-item p-2">
                <a
                  className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill active"
                  data-bs-toggle="pill"
                  href="#tab-1"
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    Tümü
                  </span>
                </a>
              </li>
              <li className="nav-item p-2">
                <a
                  className="d-flex py-2 mx-2 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#tab-2"
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    Endüstriyel
                  </span>
                </a>
              </li>
              <li className="nav-item p-2">
                <a
                  className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#tab-3"
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    Tekstil-Giyim
                  </span>
                </a>
              </li>
              <li className="nav-item p-2">
                <a
                  className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#tab-4"
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    Gıda
                  </span>
                </a>
              </li>
              <li className="nav-item p-2">
                <a
                  className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#tab-5"
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    İçecek
                  </span>
                </a>
              </li>
              <li className="nav-item p-2">
                <a
                  className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#tab-6"
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    Hediye
                  </span>
                </a>
              </li>
              <li className="nav-item p-2">
                <a
                  className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#tab-7"
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    Broşür
                  </span>
                </a>
              </li>
              <li className="nav-item p-2">
                <a
                  className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#tab-8"
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    Etiket
                  </span>
                </a>
              </li>
              <li className="nav-item p-2">
                <a
                  className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#tab-9"
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    Katalog Dergi
                  </span>
                </a>
              </li>
              <li className="nav-item p-2">
                <a
                  className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#tab-10"
                >
                  <span className="text-dark" style={{ width: "150px" }}>
                    Davetiye
                  </span>
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <div
                        className="col-md-6 col-lg-3 wow bounceInUp"
                        data-wow-delay="0.1s"
                      >
                        <div className="event-img position-relative">
                          <img
                            className="img-fluid rounded w-100"
                            src="assets/img/1.webp"
                            alt=""
                          />
                          <div className="event-overlay d-flex flex-column p-4">
                            <h4 className="me-auto">Endüstriyel</h4>
                            <a
                              href="assets/img/1.webp"
                              data-lightbox="1"
                              className="my-auto"
                            >
                              <i className="fas fa-search-plus text-dark fa-2x"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-md-6 col-lg-3 wow bounceInUp"
                        data-wow-delay="0.3s"
                      >
                        <div className="event-img position-relative">
                          <img
                            className="img-fluid rounded w-100"
                            src="assets/img/2.webp"
                            alt=""
                          />
                          <div className="event-overlay d-flex flex-column p-4">
                            <h4 className="me-auto">Tekstil-Giyim</h4>
                            <a
                              href="assets/img/2.webp"
                              data-lightbox="2"
                              className="my-auto"
                            >
                              <i className="fas fa-search-plus text-dark fa-2x"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-md-6 col-lg-3 wow bounceInUp"
                        data-wow-delay="0.5s"
                      >
                        <div className="event-img position-relative">
                          <img
                            className="img-fluid rounded w-100"
                            src="assets/img/3.webp"
                            alt=""
                          />
                          <div className="event-overlay d-flex flex-column p-4">
                            <h4 className="me-auto">Etiket</h4>
                            <a
                              href="assets/img/3.webp"
                              data-lightbox="3"
                              className="my-auto"
                            >
                              <i className="fas fa-search-plus text-dark fa-2x"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-md-6 col-lg-3 wow bounceInUp"
                        data-wow-delay="0.7s"
                      >
                        <div className="event-img position-relative">
                          <img
                            className="img-fluid rounded w-100"
                            src="assets/img/4.webp"
                            alt=""
                          />
                          <div className="event-overlay d-flex flex-column p-4">
                            <h4 className="me-auto">Broşür</h4>
                            <a
                              href="assets/img/4.webp"
                              data-lightbox="4"
                              className="my-auto"
                            >
                              <i className="fas fa-search-plus text-dark fa-2x"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-md-6 col-lg-3 wow bounceInUp"
                        data-wow-delay="0.1s"
                      >
                        <div className="event-img position-relative">
                          <img
                            className="img-fluid rounded w-100"
                            src="assets/img/5.webp"
                            alt=""
                          />
                          <div className="event-overlay d-flex flex-column p-4">
                            <h4 className="me-auto">Katalog</h4>
                            <a
                              href="assets/img/5.webp"
                              data-lightbox="5"
                              className="my-auto"
                            >
                              <i className="fas fa-search-plus text-dark fa-2x"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-md-6 col-lg-3 wow bounceInUp"
                        data-wow-delay="0.3s"
                      >
                        <div className="event-img position-relative">
                          <img
                            className="img-fluid rounded w-100"
                            src="assets/img/6.webp"
                            alt=""
                          />
                          <div className="event-overlay d-flex flex-column p-4">
                            <h4 className="me-auto">Davetiye</h4>
                            <a
                              href="assets/img/6.webp"
                              data-lightbox="6"
                              className="my-auto"
                            >
                              <i className="fas fa-search-plus text-dark fa-2x"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-md-6 col-lg-3 wow bounceInUp"
                        data-wow-delay="0.5s"
                      >
                        <div className="event-img position-relative">
                          <img
                            className="img-fluid rounded w-100"
                            src="assets/img/7.webp"
                            alt=""
                          />
                          <div className="event-overlay d-flex flex-column p-4">
                            <h4 className="me-auto">İçecek</h4>
                            <a
                              href="assets/img/7.webp"
                              data-lightbox="7"
                              className="my-auto"
                            >
                              <i className="fas fa-search-plus text-dark fa-2x"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-md-6 col-lg-3 wow bounceInUp"
                        data-wow-delay="0.7s"
                      >
                        <div className="event-img position-relative">
                          <img
                            className="img-fluid rounded w-100"
                            src="assets/img/8.webp"
                            alt=""
                          />
                          <div className="event-overlay d-flex flex-column p-4">
                            <h4 className="me-auto">Gıda</h4>
                            <a
                              href="assets/img/8.webp"
                              data-lightbox="17"
                              className="my-auto"
                            >
                              <i className="fas fa-search-plus text-dark fa-2x"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-2" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-3">
                        <div className="event-img position-relative">
                          <img
                            className="img-fluid rounded w-100"
                            src="assets/img/1.webp"
                            alt=""
                          />
                          <div className="event-overlay d-flex flex-column p-4">
                            <h4 className="me-auto">Endüstriyel</h4>
                            <a
                              href="assets/img/1.webp"
                              data-lightbox="8"
                              className="my-auto"
                            >
                              <i className="fas fa-search-plus text-dark fa-2x"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-3" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-3">
                        <div className="event-img position-relative">
                          <img
                            className="img-fluid rounded w-100"
                            src="assets/img/2.webp"
                            alt=""
                          />
                          <div className="event-overlay d-flex flex-column p-4">
                            <h4 className="me-auto">Tekstil-Giyim</h4>
                            <a
                              href="assets/img/02.webp"
                              data-lightbox="event-9"
                              className="my-auto"
                            >
                              <i className="fas fa-search-plus text-dark fa-2x"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-4" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-3">
                        <div className="event-img position-relative">
                          <img
                            className="img-fluid rounded w-100"
                            src="assets/img/8.webp"
                            alt=""
                          />
                          <div className="event-overlay d-flex flex-column p-4">
                            <h4 className="me-auto">Gıda</h4>
                            <a
                              href="assets/img/8.webp"
                              data-lightbox="10"
                              className="my-auto"
                            >
                              <i className="fas fa-search-plus text-dark fa-2x"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-5" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-3">
                        <div className="event-img position-relative">
                          <img
                            className="img-fluid rounded w-100"
                            src="assets/img/7.webp"
                            alt=""
                          />
                          <div className="event-overlay d-flex flex-column p-4">
                            <h4 className="me-auto">İçecek</h4>
                            <a
                              href="assets/img/7.webp"
                              data-lightbox="12"
                              className="my-auto"
                            >
                              <i className="fas fa-search-plus text-dark fa-2x"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-6" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-3">
                        <div className="event-img position-relative">
                          <img
                            className="img-fluid rounded w-100"
                            src="assets/img/9.webp"
                            alt=""
                          />
                          <div className="event-overlay d-flex flex-column p-4">
                            <h4 className="me-auto">Hediye</h4>
                            <a
                              href="assets/img/9.webp"
                              data-lightbox="14"
                              className="my-auto"
                            >
                              <i className="fas fa-search-plus text-dark fa-2x"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-7" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-3">
                        <div className="event-img position-relative">
                          <img
                            className="img-fluid rounded w-100"
                            src="assets/img/4.webp"
                            alt=""
                          />
                          <div className="event-overlay d-flex flex-column p-4">
                            <h4 className="me-auto">Broşür</h4>
                            <a
                              href="assets/img/4.webp"
                              data-lightbox="14"
                              className="my-auto"
                            >
                              <i className="fas fa-search-plus text-dark fa-2x"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-8" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-3">
                        <div className="event-img position-relative">
                          <img
                            className="img-fluid rounded w-100"
                            src="assets/img/3.webp"
                            alt=""
                          />
                          <div className="event-overlay d-flex flex-column p-4">
                            <h4 className="me-auto">Etiket</h4>
                            <a
                              href="assets/img/3.webp"
                              data-lightbox="14"
                              className="my-auto"
                            >
                              <i className="fas fa-search-plus text-dark fa-2x"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-9" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-3">
                        <div className="event-img position-relative">
                          <img
                            className="img-fluid rounded w-100"
                            src="assets/img/5.webp"
                            alt=""
                          />
                          <div className="event-overlay d-flex flex-column p-4">
                            <h4 className="me-auto">Katalog</h4>
                            <a
                              href="assets/img/5.webp"
                              data-lightbox="14"
                              className="my-auto"
                            >
                              <i className="fas fa-search-plus text-dark fa-2x"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-10" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-3">
                        <div className="event-img position-relative">
                          <img
                            className="img-fluid rounded w-100"
                            src="assets/img/6.webp"
                            alt=""
                          />
                          <div className="event-overlay d-flex flex-column p-4">
                            <h4 className="me-auto">Davetiye</h4>
                            <a
                              href="assets/img/6.webp"
                              data-lightbox="14"
                              className="my-auto"
                            >
                              <i className="fas fa-search-plus text-dark fa-2x"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
