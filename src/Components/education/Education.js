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
    const dynamicCanonicalUrl = "https://bademlianaokulu.com/kazanimlarimiz";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);
  return (
    <>
      <Helmet>
        <title>{t("Kazanımlarımız")}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
      <SRLWrapper>
        <div className="container-fluid blog">
          <div className="container">
            <div className="text-center wow bounceInUp fonti" data-wow-delay="0.1s">
              <small className="d-inline-block fw-bold text-dark text-uppercase bg-warning border border-warning rounded-pill px-5 py-3 mb-3">
                {t("KAZANIMLARIMIZ")}
              </small>
            </div>
            <section id="pricing" className="pricing sections-bg mt-5">
              <div className="container" data-aos="fade-up">
                <div
                  className="row g-4 py-lg-5"
                  data-aos="zoom-out"
                  data-aos-delay="100"
                >
                  <div className="col-lg-3 wow bounceInUp">
                    <div className="pricing-item">
                      <h3>
                        {t(
                          "Özel Bademli Anaokulu’nda okul öncesi eğitim öğretim programını tamamlayan bir çocuk ;"
                        )}
                      </h3>
                      <div className="icon rounded-circle overflow-hidden">
                        <img
                          src="assets/img/education/1.webp"
                          className="img-fluid w-100"
                          alt=""
                        />
                      </div>

                      <ul>
                        <li>
                          <i className="bi bi-check"></i> {t("Sosyal beceriye sahip birey haline gelir.")}
                        </li>
                        <li>
                          <i className="bi bi-check"></i>{t("Yetişkinler ve akranlarıyla etkili iletişim kurar.")}
                        </li>
                        <li>
                          <i className="bi bi-check"></i> {t("Kendini ifade etme yollarını öğrenir.")}
                        </li>
                        <li>
                          <i className="bi bi-check"></i> {t("Türkçeyi doğru ve güzel konuşur.")}
                        </li>
                        <li>
                          <i className="bi bi-check"></i> {t("İnsan, hayvan ve doğa sevgisi kazanır.")}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-3 wow bounceInUp">
                    <div className="pricing-item featured">
                      <h3>
                        {t(
                          "Özel Bademli Anaokulu’nda okul öncesi eğitim öğretim programını tamamlayan bir çocuk ;"
                        )}
                      </h3>
                      <div className="icon rounded-circle overflow-hidden">
                        <img
                          src="assets/img/education/2.webp"
                          className="img-fluid w-100"
                          alt=""
                        />
                      </div>

                      <ul>
                        <li>
                          <i className="bi bi-check"></i> {t("Çevreye ve doğaya saygılı bir birey haline gelir.")}
                        </li>
                        <li>
                          <i className="bi bi-check"></i> {t("Psikomotor becerileri edinir ve spor yapma alışkanlığı kazanır.")}
                        </li>
                        <li>
                          <i className="bi bi-check"></i> {t("Kişisel sınırlarını bilir ve öz bakım becerilerini edinir.")}
                        </li>
                        <li>
                          <i className="bi bi-check"></i> {t("Sağlıklı ve düzenli beslenme alışkanlığı kazanır.")}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="pricing-item featured wow bounceInUp">
                      <h3>
                        {t(
                          "Özel Bademli Anaokulu’nda okul öncesi eğitim öğretim programını tamamlayan bir çocuk ;"
                        )}
                      </h3>
                      <div className="icon rounded-circle overflow-hidden">
                        <img
                          src="assets/img/education/3.webp"
                          className="img-fluid w-100"
                          alt=""
                        />
                      </div>

                      <ul>
                        <li>
                          <i className="bi bi-check"></i> {t("İlgi ve yeteneklerini keşfeder.")}
                        </li>
                        <li>
                          <i className="bi bi-check"></i> {t("Motor refleks yetisini geliştirir.")}
                        </li>
                        <li>
                          <i className="bi bi-check"></i> {t("Sınıflama, sıralama, nesneleri farklılık ve benzerliklerine göre gruplamayı öğrenir.")}
                        </li>
                        <li>
                          <i className="bi bi-check"></i> {t("Anlama, algılama, yordama ve yorumlama kabiliyetleri kazanır.")}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="pricing-item wow bounceInUp">
                      <h3>
                        {t(
                          "Özel Bademli Anaokulu’nda okul öncesi eğitim öğretim programını tamamlayan bir çocuk ;"
                        )}
                      </h3>
                      <div className="icon rounded-circle overflow-hidden">
                        <img
                          src="assets/img/education/4.webp"
                          className="img-fluid w-100"
                          alt=""
                        />
                      </div>

                      <ul>
                        <li>
                          <i className="bi bi-check"></i> {t("Paylaşmanın ve hoşgörülü olmanın değerini anlar.")}
                        </li>
                        <li>
                          <i className="bi bi-check"></i> {t("Saygı ve sevginin önemini kavrar.")}
                        </li>
                        <li>
                          <i className="bi bi-check"></i> {t("Kendini ifade etme yollarını öğrenir.")}
                        </li>
                        <li>
                          <i className="bi bi-check"></i> {t("Liderlik ve problem çözme yetisi kazanır.")}
                        </li>
                        <li>
                          <i className="bi bi-check"></i> {t("Atatürk’ün önemini bilir ve Atatürk sevgisi kazanır.")}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </SRLWrapper>
    </>
  );
};

export default Education;
