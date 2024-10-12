import React from "react";

const Counter = () => {
  return (
    <>
      <div className="container-fluid faqt py-6">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-12">
              <div className="row g-4">
                <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.3s">
                  <div className="faqt-item bg-primary rounded p-4 text-center">
                    <i className="fas fa-users fa-4x mb-4 text-white"></i>
                    <h1 className="display-4 fw-bold text-primary" data-toggle="counter-up">
                      689
                    </h1>
                    <p className="text-dark text-uppercase fw-bold mb-0">
                      Mezun Öğrenci
                    </p>
                  </div>
                </div>
                <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.5s">
                  <div className="faqt-item bg-primary rounded p-4 text-center">
                    <i className="fas fa-users-cog fa-4x mb-4 text-white"></i>
                    <h1 className="display-4 fw-bold" data-toggle="counter-up">
                      1050
                    </h1>
                    <p className="text-dark text-uppercase fw-bold mb-0">
                      Mutlu Aile
                    </p>
                  </div>
                </div>
                <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.7s">
                  <div className="faqt-item bg-primary rounded p-4 text-center">
                    <i className="fas fa-check fa-4x mb-4 text-white"></i>
                    <h1 className="display-4 fw-bold text-primary" data-toggle="counter-up">
                      253
                    </h1>
                    <p className="text-dark text-uppercase fw-bold mb-0">
                      Sosyal Faaliyet
                    </p>
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

export default Counter;
