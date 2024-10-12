import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { SRLWrapper } from "simple-react-lightbox";

const Galeri = () => {
  const pageDescription = "";
  const pageKeywords = "";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://bademlianaokulu.com/galeri";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);

  // Resimlerin yolunu içeren bir dizi
  const galeriImages = [
    "assets/img/galeri/1.webp",
    "assets/img/galeri/2.webp",
    "assets/img/galeri/3.webp",
    "assets/img/galeri/4.webp",
    "assets/img/galeri/5.webp",
    "assets/img/galeri/6.webp",
    "assets/img/galeri/7.webp",
    "assets/img/galeri/8.webp",
    "assets/img/galeri/9.webp",
    "assets/img/galeri/10.webp",
    "assets/img/galeri/11.webp",
    "assets/img/galeri/12.webp",
    "assets/img/galeri/13.webp",
    "assets/img/galeri/14.webp",
    "assets/img/galeri/15.webp",
    "assets/img/galeri/16.webp",
    "assets/img/galeri/17.webp",
    "assets/img/galeri/18.webp",

    // Diğer resim yolları buraya eklenebilir
  ];

  return (
    <>
      <Helmet>
        <title>{t("Galeri")}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
      <SRLWrapper>
        <div className="container-fluid blog">
          <div className="container">
            <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
              <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-5 py-3 mb-3 fonti">
              {t("Galeri")}
              </small>
            </div>
            <div className="row gx-4 justify-content-center">
              {/* Resimler için map fonksiyonu kullanılıyor */}
              {galeriImages.map((image, index) => (
                <div
                  key={index}
                  className="col-md-6 col-lg-3 wow bounceInUp mt-3"
                  data-wow-delay={`${0.1 * (index + 1)}s`}
                >
                  <div className="blog-item">
                    <div className="overflow-hidden rounded">
                      <img
                        src={image}
                        className="img-fluid w-100"
                        style={{ borderRadius: "10px" }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SRLWrapper>
    </>
  );
};

export default Galeri;
