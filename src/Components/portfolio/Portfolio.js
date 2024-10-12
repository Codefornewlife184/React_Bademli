/* eslint-disable jsx-a11y/anchor-is-valid */
import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { SRLWrapper } from "simple-react-lightbox";

const Portfolio = () => {
  const pageDescription = "";
  const pageKeywords = "";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://bademlianaokulu.com/ailemiz";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);
  return (
    <>
      <Helmet>
        <title>{t("Ailemiz")}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
      <SRLWrapper>
        <div className="container-fluid team">
          <div className="container">
            <div
              className="text-center wow bounceInUp fonti"
              data-wow-delay="0.1s"
            >
              <small className="d-inline-block fw-bold text-dark text-uppercase bg-info border border-info rounded-pill px-5 py-3 mb-3">
                {t("AİLEMİZ")}
              </small>
            </div>
          </div>
        </div>

        <section id="team" className="team mt-4">
          <div className="container" data-aos="fade-up">
            <div className="row gy-2">

              <div
                className="col-xl-3 col-md-6 d-flex p-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="member">
                  <img
                    src="assets/img/team/1.webp"
                    className="img-fluid"
                    alt=""
                  />
                  <h4>Sinem ALTINTAŞ KAYA</h4>
                  <span>{t("Okul Kurucu Müdürü")}</span>
                  <br />
                  <span>{t("Karadeniz Teknik Üniversitesi")}</span>
                  <span>{t("Fatih Eğitim Fakültesi")}</span>
                  <span>{t("Sosyal Bilgiler Öğretmenliği")}</span>
                  <span>{t("Türkçe Öğretmenliği")}</span>
                  <br />
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex p-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="member">
                  <img
                    src="assets/img/team/2.webp"
                    className="img-fluid"
                    alt=""
                  />
                  <h4>Serenay ERTÜRK</h4>
                  <span>{t("Müdür Yardımcısı ve PDR Servisi")}</span>
                  <br />
                  <span>{t("Girne Amerikan Üniversitesi")} </span>
                  <span>{t("Psikoloji")}</span>
                  <span className="text-white">...</span>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex p-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="member">
                  <img
                    src="assets/img/team/3.webp"
                    className="img-fluid"
                    alt=""
                  />
                  <h4>Merve HEMİTLİ</h4>
                  <span>{t("Koord. Öğretmen - Sınıf Öğretmeni")}</span>
                  <br />
                  <span>{t("İstanbul Üniversitesi")}</span>
                  <span>{t("Çocuk Gelişimi ve Eğitimi")}</span>
                  <span className="text-white">...</span>
                  <span className="text-white">...</span>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex p-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="member">
                  <img
                    src="assets/img/team/4.webp"
                    className="img-fluid"
                    alt=""
                  />
                  <h4>Emine OLGUN</h4>
                  <span>{t("Sınıf Öğretmeni")}</span>
                  <br />
                  <span>{t("Karabük Üniversitesi")}</span>
                  <span>{t("Çocuk Gelişimi")}</span>
                  <span className="text-white">...</span>
                  <span className="text-white">...</span>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex p-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="member">
                  <img
                    src="assets/img/team/5.webp"
                    className="img-fluid"
                    alt=""
                  />
                  <h4>{t("Gizem SELVİ")}</h4>
                  <span>{t("Sınıf Öğretmeni")}</span>
                  <br />
                  <span>{t("Atatürk Üniversitesi")}</span>
                  <span>{t("Çocuk Gelişimi")}</span>
                  <span className="text-white">...</span>
                  <span className="text-white">...</span>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex p-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="member">
                  <img
                    src="assets/img/team/6.webp"
                    className="img-fluid"
                    alt=""
                  />
                  <h4>Ecem DÜRÜ</h4>
                  <span>{t("Sınıf Öğretmeni")}</span>
                  <br />
                  <span>{t("Giresun Üniversitesi")}</span>
                  <span>{t("Çocuk Gelişimi")}</span>
                  <span className="text-white">...</span>
                  <span className="text-white">...</span>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex p-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="member">
                  <img
                    src="assets/img/team/7.webp"
                    className="img-fluid"
                    alt=""
                  />
                  <h4>Selin BULUT</h4>
                  <span>{t("Sınıf Öğretmeni")}</span>
                  <br />
                  <span>{t("Uludağ Üniversitesi")}</span>
                  <span>{t("Çocuk Gelişimi")}</span>
                  <span className="text-white">...</span>
                  <span className="text-white">...</span>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex p-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="member">
                  <img
                    src="assets/img/team/10.webp"
                    className="img-fluid"
                    alt=""
                  />
                  <h4>Ellie Guljahan ATABAEVA</h4>
                  <span>{t("İngilizce Öğretmeni")}</span>
                  <br />
                  <span>Mogilev State A. Kuleshov University</span>
                  <span>{t("İngiliz Filoloji ve Öğretmenliği")}</span>
                  <span>{t("Fransız Dili Öğretmenliği")}</span>
                  <span className="text-white">...</span>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex p-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="member">
                  <img
                    src="assets/img/team/8.webp"
                    className="img-fluid"
                    alt=""
                  />
                  <h4>{t("Hümeyra KARAKUŞ DİNDAR")}</h4>
                  <span>{t("Yardımcı Öğretmen")}</span>
                  <br />
                  <span>{t("Balıkesir Üniversitesi")}</span>
                  <span>{t("Çocuk Gelişimi")}</span>
                  <span className="text-white">...</span>
                  <span className="text-white">...</span>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex p-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="member">
                  <img
                    src="assets/img/team/9.webp"
                    className="img-fluid"
                    alt=""
                  />
                  <h4>Elif GEZMİŞ</h4>
                  <span>{t("Yardımcı Öğretmen")}</span>
                  <br />
                  <span>{t("Dumlupınar Üniversitesi")}</span>
                  <span>{t("Çocuk Gelişimi")}</span>
                  <span className="text-white">...</span>
                  <span className="text-white">...</span>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex p-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="member">
                  <img
                    src="assets/img/team/13.webp"
                    className="img-fluid"
                    alt=""
                  />
                  <h4>Begüm ERİM</h4>
                  <span>{t("Bale Öğretmeni")} </span>
                  <br />
                  <span>{t("Vaganova Bale Eğitmenliği Eğitimi")}</span>
                  <span className="text-white">...</span>
                  <span className="text-white">...</span>
                  <span className="text-white">...</span>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex p-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="member">
                  <img
                    src="assets/img/team/11.webp"
                    className="img-fluid"
                    alt=""
                  />
                  <h4>Saynur EREN</h4>
                  <span>{t("Müzik Öğretmeni")}</span>
                  <br />
                  <span>{t("Uludağ Üniversitesi")}</span>
                  <span>{t("Müzik Öğretmenliği")}</span>
                  <span className="text-white">...</span>
                  <span className="text-white">...</span>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex p-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="member">
                  <img
                    src="assets/img/team/14.webp"
                    className="img-fluid"
                    alt=""
                  />
                  <h4>Kübra HAKSAL</h4>
                  <span>{t("Drama Becerileri Öğretmeni")}</span>
                  <br />
                  <span>{t("Yaratıcı Drama Eğitmen Eğitimi")}</span>
                  <span className="text-white">...</span>
                  <span className="text-white">...</span>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex p-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="member">
                  <img
                    src="assets/img/team/12.webp"
                    className="img-fluid"
                    alt=""
                  />
                  <h4>Yeliz KOÇ</h4>
                  <span>{t("Beden Eğitimi ve Jimnastik Öğretmeni")} </span>
                  <br />
                  <span>{t("Uludağ Üniversitesi")}</span>
                  <span>{t("Beden Eğitimi ve Spor Öğretmenliği")}</span>
                  <span className="text-white">...</span>
                  <span className="text-white">...</span>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex p-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="member">
                  <img
                    src="assets/img/team/15.webp"
                    className="img-fluid"
                    alt=""
                  />
                  <h4>Merve Fatma YENER</h4>
                  <span>{t("Mutfak Teyzemiz")}</span>
                  <br />
                  <span className="text-white">...</span>
                  <span className="text-white">...</span>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex p-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="member">
                  <img
                    src="assets/img/team/16.webp"
                    className="img-fluid"
                    alt=""
                  />
                  <h4>Esra YALNIZ</h4>
                  <span>{t("Okul Hijyen Teyzemiz")}</span>
                  <br />
                  <span className="text-white">...</span>
                  <span className="text-white">...</span>
                  <span className="text-white">...</span>
                </div>
              </div>

              <div
                className="col-xl-3 col-md-6 d-flex p-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="member">
                  <img
                    src="assets/img/team/17.webp"
                    className="img-fluid"
                    alt=""
                  />
                  <h4>Arif Emrah KAYA</h4>
                  <span>{t("Kurucu Öğretmen")}</span>
                  <br />
                  <span>{t("Arifiye Anadolu Öğretmen Lisesi")}</span>
                  <span>{t("Uludağ Üniversitesi")}</span>
                  <span>{t("Eğitim Fakültesi")}</span>
                  <span>{t("İngilizce Öğretmenliği")}</span>
                  <br />
                  <h4>&</h4>
                  <br />
                  <h4>Şila</h4>
                  <span>{t("Oyun Arkadaşımız")}</span>
                </div>
              </div>

            </div>
          </div>
        </section>
      </SRLWrapper>
    </>
  );
};

export default Portfolio;
