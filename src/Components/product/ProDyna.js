import React from "react";

const ProDyna = () => {
  return <>
     <section id="features" className="features section-bg">
        <div className="container" data-aos="fade-up">
          <ul className="nav nav-tabs row  g-2 d-flex">
            <li className="nav-item col-3">
              <a
                className="nav-link active show"
                data-bs-toggle="tab"
                data-bs-target="#tab-1"
              >
                <h4>Yabancı Dil</h4>
              </a>
            </li>

            <li className="nav-item col-3">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                <h4>Elektronik Cihazlara Yer Yok</h4>
              </a>
            </li>
            <li className="nav-item col-3">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                <h4>Aileniz Kadar Güvenli</h4>
              </a>
            </li>

            <li className="nav-item col-3">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
                <h4>Çoklu Zeka Kuramı</h4>
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div className="tab-pane active show" id="tab-1">
              <div className="row">
                <div
                  className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h3>Voluptatem dignissimos provident</h3>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                      aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i> Duis aute irure dolor in
                      reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate trideta storacalaperda mastiro
                      dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                </div>
                <div
                  className="col-lg-6 order-1 order-lg-2 text-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <img
                    src="assets/img/features-1.webp"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>

            <div className="tab-pane" id="tab-2">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Neque exercitationem debitis</h3>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                      aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i> Duis aute irure dolor in
                      reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i> Provident mollitia neque
                      rerum asperiores dolores quos qui a. Ipsum neque dolor
                      voluptate nisi sed.
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate trideta storacalaperda mastiro
                      dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img
                    src="assets/img/features-2.webp"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>

            <div className="tab-pane" id="tab-3">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Voluptatibus commodi accusamu</h3>
                  <ul>
                    <li>
                      <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                      aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i> Duis aute irure dolor in
                      reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i> Provident mollitia neque
                      rerum asperiores dolores quos qui a. Ipsum neque dolor
                      voluptate nisi sed.
                    </li>
                  </ul>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img
                    src="assets/img/features-3.webp"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>

            <div className="tab-pane" id="tab-4">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Omnis fugiat ea explicabo sunt</h3>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                      aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i> Duis aute irure dolor in
                      reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate trideta storacalaperda mastiro
                      dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img
                    src="assets/img/features-4.webp"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </>;
};

export default ProDyna;
