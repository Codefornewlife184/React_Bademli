import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { SRLWrapper } from "simple-react-lightbox";

const Evolution = () => {
  const pageDescription = "";
  const pageKeywords = "";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl =
      "https://bademlianaokulu.com/gelisim-alanlarimiz";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);
  return (
    <>
      <Helmet>
        <title>{t("Gelişim Alanlarımız")}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
      <SRLWrapper>
        <section id="about" className="mySection">
          <div className="container">
            <div className="text-center mb-5 pb-3">
              <div className="col-12 text-center fonti">
                <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-5 py-3 mb-3">
                  {t("Gelişim Alanlarımız")}
                </small>
                {/* <h2>"BİRKAÇ YIL GEÇER BİR DE BAKTIN BÜYÜMÜŞÜZ"</h2> */}
              </div>
            </div>
            <ul className="timeline">
              <li className="wow bounceInUp">
                <div className="t-image">
                  <img
                    className="img-fluid rounded-circle"
                    src="assets/img/evolution/1.webp"
                    alt=".."
                  />
                </div>
                <div className="t-panel">
                  <div className="t-heading fonti">
                    <h4 className="subheading text-info">
                      {t("Bilişsel Gelişim Alanı")}
                    </h4>
                  </div>
                  <div className="t-body">
                    <p className="text-muted">
                      {t(
                        "Çocuğun çevresini ve dünyayı anlama yollarının etkili hale gelmesine yardımcı olan etkinlik ve aktivitelerimizdir."
                      )}
                      <br />
                      <span className="text-primary">{t("Fen ve Deney")}</span>
                      <br />
                      <span className="text-primary">{t("Kodlama")}</span>
                      <br />
                      <span className="text-primary">{t("Stem & Maker")}</span>
                      <br />
                      <span className="text-primary">
                        {t("Akıl ve Zekâ Oyunları")}
                      </span>
                    </p>
                  </div>
                </div>
              </li>
              <li className="t-inverted wow bounceInUp">
                <div className="t-image">
                  <img
                    className="img-fluid rounded-circle"
                    src="assets/img/evolution/2.webp"
                    alt=".."
                  />
                </div>
                <div className="t-panel">
                  <div className="t-heading fonti">
                    <h4 className="subheading text-info">
                      {t("Dil Gelişim Alanı")}
                    </h4>
                  </div>
                  <div className="t-body">
                    <p className="text-muted">
                      {t(
                        "Evrensel iletişim araçlarına sahip olabilmeye yardımcı etkinlik ve aktivitelerimizdir."
                      )}
                      <br />
                      <span className="text-primary">
                        {t("Türkçeyi Doğru ve Güzel Kullanma")}
                      </span>
                      <br />
                      <span className="text-primary">{t("İngilizce")}</span>
                    </p>
                  </div>
                </div>
              </li>
              <li className="wow bounceInUp">
                <div className="t-image">
                  <img
                    className="img-fluid rounded-circle"
                    src="assets/img/evolution/3.webp"
                    alt=".."
                  />
                </div>
                <div className="t-panel">
                  <div className="t-heading fonti">
                    <h4 className="subheading text-info">
                      {t("Psiko-Motor Gelişim Alanları")}
                    </h4>
                  </div>
                  <div className="t-body">
                    <p className="text-muted">
                      {t(
                        "Çocukların psiko-motor becerileri yapabilmesi, ilgili beden kısımları ve organlarının olgunlaşmasını destekleyen etkinlik ve aktivitelerimizdir."
                      )}
                      <br />
                      <span className="text-primary">{t("Cross-fit")} </span>
                      <br />
                      <span className="text-primary">{t("Bale")} </span>
                      <br />
                      <span className="text-primary">{t("Jimnastik")} </span>
                      <br />
                      <span className="text-primary">
                        {t("Beden Eğitimi ve Spor")}
                      </span>
                    </p>
                  </div>
                </div>
              </li>
              <li className="t-inverted wow bounceInUp">
                <div className="t-image">
                  <img
                    className="img-fluid rounded-circle"
                    src="assets/img/evolution/4.webp"
                    alt=".."
                  />
                </div>
                <div className="t-panel">
                  <div className="t-heading fonti">
                    <h4 className="subheading text-info">
                      {t("Sosyo-Duygusal Gelişim Alanı")}
                    </h4>
                  </div>
                  <div className="t-body">
                    <p className="text-muted">
                      {t(
                        "Çocukların sahip oldukları bilişsel potansiyellerini ortaya çıkarabilmesine yardımcı etkinlik ve aktivitelerimizdir."
                      )}
                      <br />
                      <span className="text-primary">
                        {t("Yaratıcı Drama")}
                      </span>
                      <br />
                      <span className="text-primary">
                        {t("Müzik Etkinlikleri")}
                      </span>
                      <br />
                      <span className="text-primary">
                        {t("Psikolojik Danışmanlık ve Rehberlik")}
                      </span>
                      <br />
                      <span className="text-primary">
                        {t("Envanter Çalışmaları")}
                      </span>
                      <br />
                      <span className="text-primary">
                        {t("Psiko-Drama Etkinlikleri")}
                      </span>
                    </p>
                  </div>
                </div>
              </li>
              <li className="wow bounceInUp">
                <div className="t-image">
                  <img
                    className="img-fluid rounded-circle"
                    src="assets/img/evolution/5.webp"
                    alt=".."
                  />
                </div>
                <div className="t-panel">
                  <div className="t-heading fonti">
                    <h4 className="subheading text-info">
                      {t("Öz Bakım Becerileri Alanları")}
                    </h4>
                  </div>
                  <div className="t-body">
                    <p className="text-muted">
                      {t(
                        "Çocukların genel yaşam kalitesini artıran ve düzenli bir yaşam biçimini benimsemelerine yardımcı etkinlik ve aktivitelerimizdir."
                      )}
                      <br />
                      <span className="text-primary">{t("Uyku Eğitimi")}</span>
                      <br />
                      <span className="text-primary">
                        {t("Tuvalet Eğitimi")}
                      </span>
                      <br />
                      <span className="text-primary">
                        {t("Günlük Yaşam Becerileri")}{" "}
                      </span>
                      <br />
                      <span className="text-primary">
                        {t("Bedensel Temizlik Becerileri")}
                      </span>
                      <br />
                      <span className="text-primary">
                        {t("Yeterli ve Dengeli Beslenme Becerileri")}
                      </span>
                      <br />
                      <span className="text-primary">
                        {t("Yaşam Alanlarını Düzenleme Becerileri")}
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </SRLWrapper>
    </>
  );
};

export default Evolution;
