/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { SRLWrapper } from "simple-react-lightbox";

const Education = () => {
  const pageDescription = "";
  const pageKeywords = "";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://bademlianaokulu.com/hakkimizda";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);
  return (
    <>
      <Helmet>
        <title>{t("Bademli Anaokulu")}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
      <SRLWrapper>
        <div className="container-fluid blog py-6">
          <div className="container">
            <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
              <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-5 py-3 mb-3">
                KAZANIMLARımız
              </small>
            </div>
            <div className="row gx-4 justify-content-center">
              <div
                className="col-md-6 col-lg-6 wow bounceInUp mt-3"
                data-wow-delay="0.1s"
              >
                <div className="blog-item">
                  <div className="overflow-hidden rounded">
                    <img
                      src="assets/img/1.webp"
                      className="img-fluid w-100"
                      alt=""
                    />
                  </div>
                  
                </div>
              </div>
              <div
                className="col-md-6 col-lg-6 wow bounceInUp mt-3"
                data-wow-delay="0.3s"
              >
                <div className="blog-item">
                  <div className="overflow-hidden rounded">
                    <img
                      src="assets/img/2.webp"
                      className="img-fluid w-100"
                      alt=""
                    />
                  </div>
                 
                </div>
              </div>
              <div
                className="col-md-6 col-lg-6 wow bounceInUp mt-3"
                data-wow-delay="0.5s"
              >
                <div className="blog-item">
                  <div className="overflow-hidden rounded">
                    <img
                      src="assets/img/3.webp"
                      className="img-fluid w-100"
                      alt=""
                    />
                  </div>
                  
                </div>
              </div>
              <div
                className="col-md-6 col-lg-6 wow bounceInUp mt-3"
                data-wow-delay="0.5s"
              >
                <div className="blog-item">
                  <div className="overflow-hidden rounded">
                    <img
                      src="assets/img/4.webp"
                      className="img-fluid w-100"
                      alt=""
                    />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </SRLWrapper>
    </>
  );
};

export default Education;
