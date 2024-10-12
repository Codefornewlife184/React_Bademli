import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { SRLWrapper } from "simple-react-lightbox";

const Dynamic = () => {
  const pageDescription = "";
  const pageKeywords = "";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://bademlianaokulu.com/dinamiklerimiz";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);
  return (
    <>
      <Helmet>
        <title>{t("Dinamiklerimiz")}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>

      <SRLWrapper>
        <section id="about" className="about-03 mb-0">
          <div className="container">
            <div className="resume-01">
              <div className="container text-center">
                <div
                  className="text-center wow bounceInUp fonti"
                  data-wow-delay="0.1s"
                >
                  <small
                    className="d-inline-block fw-bold text-dark text-uppercase bg-warning border border-warning rounded-pill px-5 py-3 mb-3"
                    style={{ color: "#f78787" }}
                  >
                    {t("DİNAMİKLERİMİZ")}
                  </small>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-md-6 p-4">
                  <div className="timeline-boxes">
                    <div className="timeline-boxe">
                      <div className="timeline-contents wow bounceInUp">
                        <div className="time-line-header">
                          <div className="icon rounded-circle overflow-hidden">
                            <img
                              src="assets/img/dynamic/1.webp"
                              className="img-fluid w-100"
                              alt=""
                            />
                          </div>
                          <h6 className="timeline-title">{t("Yabancı Dil")}</h6>
                          <p className="timeline-year">{t("I Speak Better")}</p>
                        </div>
                        <div className="timeline-content">
                          <p className="mb-0">
                            {t("Bizler okulumuzda haftanın her günü native speaker İngilizce öğretmenimizle İngilizce'yi edinim sürecini büyük bir hassasiyetle işliyoruz.")}<br />
                            {t("Devamında ise akşamları evimizde bizim için tanımlanmış I Speak Better platformu öğretmenlerimizle online pratikler yapıyoruz.")}
                            <br />
                            <br />
                            <br />
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="timeline-boxe">
                      <div className="timeline-contents wow bounceInUp">
                        <div className="time-line-header">
                          <div className="icon rounded-circle overflow-hidden">
                            <img
                              src="assets/img/dynamic/3.webp"
                              className="img-fluid w-100"
                              alt=""
                            />
                          </div>
                          <h6 className="timeline-title">
                            {t("Elektronik Cihazlara Yer Yok")}
                          </h6>
                          <p className="timeline-year">
                            {t("Cihazlardan Uzak Bir Eğitim")}
                          </p>
                        </div>
                        <div className="timeline-content">
                          <p className="mb-0">
                            {t("Çocuk gelişiminde zihinsel ve fiziksel gelişime olumsuz etki eden akıllı tahta, dokunmatik ekran, tablet vb. cihazların esiri olmuyoruz.")} <br />
                            {t("Gelişim sürecinde bizler, ince kaslar ve buna bağlı becerilerde ilerleme sağlayacak eğitim ve edinim sürecinde çocuğu merkez alarak onu tüm aktivitelere ve etkinliklere dahil ediyoruz.")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 p-4">
                  <div className="timeline-boxes">
                    <div className="timeline-boxe">
                      <div className="timeline-contents wow bounceInUp">
                        <div className="time-line-header">
                          <div className="icon rounded-circle overflow-hidden">
                            <img
                              src="assets/img/dynamic/2.webp"
                              className="img-fluid w-100"
                              alt=""
                            />
                          </div>
                          <h6 className="timeline-title">{t("Aileniz Kadar Güvenli")}</h6>
                          <p className="timeline-year">{t("7/24 Gözlem")}</p>
                        </div>
                        <div className="timeline-content">
                          <p className="mb-0">
                            {t("Özel Bademli Anaokulu gerek fiziksel şartları gerek ilgi ve alakasıyla son derece titiz bir ilgi süreci yürütür.")} <br />
                            {t("Butik bir okulun tüm avantajlarını mümkün kılarak çocuklarımızın kampüs kalabalıklarında kaybolmalarına meydan vermeyecek şekilde bireysel ve yoğun bir ilgi politikası izler.")}
                            <br />
                            {t("Hem binamız hem de bahçemiz yani tüm yaşam alanlarınız ise 7/24 gözlem altında ve ciddi bir seçici geçirgenlik hassasiyetiyle izlenmektedir.")}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="timeline-boxe">
                      <div className="timeline-contents wow bounceInUp">
                        <div className="time-line-header">
                          <div className="icon rounded-circle overflow-hidden">
                            <img
                              src="assets/img/dynamic/4.webp"
                              className="img-fluid w-100"
                              alt=""
                            />
                          </div>
                          <h6 className="timeline-title">
                            {t("Çoklu Zeka Kuramı ile Çocuklarımızı Çok İyi Şekilde Keşfediyoruz")}
                          </h6>
                          <p className="timeline-year">{t("Multiple Intelligence")}</p>
                        </div>
                        <div className="timeline-content">
                          <p className="mb-0">
                            {t("Çoklu Zeka kuramı ilkelerini sınıflarımızda kullandığımız metot, yöntem ve stratejilerle ilişkilendirmek başlıca görevlerimizdendir.")} <br />
                            {t("Çoklu Zeka kuramının ilkelerini dikkate alarak çocuğun öğrenme sürecinde daha aktif rol almasını sağlamak ve onların keyif alabileceği şekilde yaparak mutlu olmalarını destekliyoruz.")} <br />
                            {t("Tüm zeka alanlarına seslenen şekilde etkinlik hazırlamak ve çocukların tüm zekalarını kullanarak bilgi, beceri, tutum ve değerler kazandırmak için çalışmalar yapıyoruz.")} <br />
                            {t("Çocukların bireysel farklılıklarının farkında olarak öğrenme sürecinde onlara rehberlik etmek, bilişsel destek vermek, zekalarının hepsini önemseyerek çeşitli etkinlikler hazırlamak, öğrencileri yaratıcı ve eleştirel düşünceyi geliştirmeye yöneltmek için çalışıyoruz.")}
                            <br />
                            {t("“Yaşam matematiksel ve sözel etkinliklerle sınırlandırılamayacak kadar renkli ve zengindir. Unutulmaması gereken çok önemli bir nokta vardır, o da; insanların kesinlikle bir zeka bölümü ile etiketlenmemesi gerçeğidir. Çünkü Çoklu Zeka Teorisinin en önemli ilkelerinden biri; zekaların sürekli bir gelişim dinamizmine sahip olduklarıdır.”")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SRLWrapper>
    </>
  );
};

export default Dynamic;
