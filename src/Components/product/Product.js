/* eslint-disable no-lone-blocks */
import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Product = () => {
  const pageDescription = "";
  const pageKeywords = "";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://bademlianaokulu.com/hakkimizda";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);

  const doctors = [
    {
      id: 1,
      frontContent: (
        <div>
          <div className="service-content-icon text-center">
            <i className="fas fa-language fa-7x text-secondary mb-4"></i>

            <h4 className="mt-3 text-info">Yabancı Dil</h4>
          </div>{" "}
          I Speak Better
        </div>
      ),
      backContent: (
        <div>
          Bizler okulumuzda haftanın her günü ve native speaker İngilizce
          öğretmenimizle İngilizce'yi edinim sürecini büyük bir hassasiyetle
          işliyoruz. <br />
          Devamında ise akşamları evimizde bizim çin tanımlanış I Speak Better
          platformu öğretmenlerimizle online pratikler yapıyoruz.
        </div>
      ),
    },
    {
      id: 2,
      frontContent: (
        <div>
          <div className="service-content-icon text-center">
            <i className="fas fa-phone fa-7x text-secondary mb-4"></i>

            <h4 className="mt-3 text-info">Elektronik Cihazlara Yer Yok</h4>
          </div>{" "}
        </div>
      ),

      backContent: (
        <div>
          Çocuk gelişiminde zihinsel ve fiziksel gelişiminde olumsuz etki eden
          akıllı tahta, dokunmatik ekren, tablet vb. cihazların esiri olmuyoruz.{" "}
          <br />
          Gelişim sürecinde bizler, inca kaslar ve buna bağlı becerilerde
          ilerleme sağlayacak eğitim ve edinim sürecinde çocuğu merkez alarak
          onu tüm aktivitelere ve etkinliklere dahil ediyoruz.
        </div>
      ),
    },

    {
      id: 3,
      frontContent: (
        <div>
          <div className="service-content-icon text-center">
          <img src="/assets/img/3.webp" alt="Aileniz Kadar Güvenli" className="img-fluid mb-4" />

            <h4 className="mt-3 text-info">Aileniz Kadar Güvenli</h4>
          </div>{" "}
        </div>
      ),

      backContent: (
        <div>
          Özel Bademli Anaokulu gerek fiziksel şartları gerek ilgi ve alakasıyla
          son derece titiz bir ilgi süreci yürütür. <br />
          Butik bir okulun tüm avantajlarını mümkün kılarak çocuklarımızn kampüs
          kalabalıklarında kaybolmalarına meydan vermeyecek şekilde bireysel ve
          yoğun bir ilgi ve izlenim politikası izler.
          <br />
          Hem binamız hem de bahçemiz yani tüm yaşam alanlarınız ise 7/24 gözlem
          altında ve ciddi bir seçici geçirgenlik hassasiyetiyle izlenmektedir.
        </div>
      ),
    },
    {
      id: 4,
      frontContent:
        "Çoklu Zeka Kuramı ile Çocuklarımızı Çok İyi Şekilde Keşfediyoruz",
      backContent: (
        <div style={{ fontSize: "9px" }}>
          Çoklu Zeka kuramı ilkelerini sınıflarımızda kullandığımız metot,
          yöntem ve stratejilerle ilişkilendirmek başlıca görevlerimizdendir.{" "}
          <br />
          Çoklu Zeka kuramının ilkelerini dikkate alarak çocuğun öğrenme
          sürecinde daha aktif rol almasını sağlamak ve onların keyif
          alabileceği şekilde yaparak mutlu olmalarını desteklemek. <br />
          Tüm zeka alanlarına seslenen şekilde etkinlik hazırlamak ve çocukların
          tüm zekalarını kullanarak bilgi, beceri, tutum ve değerler kazandırmak
          için çalışmalar yapmak. <br />
          Çocukların bireysel farklılıklarının farkında olarak öğrenme sürecinde
          onlara rehberlik etmek, bilişsel destek vermek, zekalarının hepsini
          önemseyerek çeşitli etkinlikler hazırlamak, öğrencileri yaratıcı ve
          eleştirel düşünceyi geliştirmeye yöneltmek ve cesaretlendirmek. <br />
          “Yaşam matematiksel ve sözel etkinliklerle sınırlandırılamayacak kadar
          renkli ve zengindir. Unutulmaması gereken çok önemli bir nokta vardır.
          O da insanların kesinlikle bir zeka bölümü ile etkilenmemesi
          gerçeğidir. Çünkü Çoklu Zeka Teorisinin en önemli ilkelerinden biri;
          zekaların sürekli bir gelişim dinamizmine sahip olduklarıdır.”
        </div>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("Bademli Anaokulu")}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>

      <section id="doctors" className="doctors mt-5">
        <div className="container">
          <div className="row g-4">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="cards col-lg-3 col-md-6 col-sm-12 wow bounceInUp"
                data-wow-delay="0.1s"
              >
                <div className="card-inner">
                  <div className="card-front text-center">
                    <p>{doctor.frontContent}</p>
                  </div>
                  <div className="card-back">
                    <p>{doctor.backContent}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;

{
  /* <section id="doctors" className="doctors mt-5">
        <div className="container">
          <div className="row g-4">
            <div className="card col-md-6 col-lg-4 mt-lg-0">
              <div className=" d-flex align-items-center">
                <div className="card-content">
                  <i className="fas fa-language fa-7x text-primary mb-4"></i>
                  <h2>
                    Yabancı Dil
                    <br />I Speak Better
                  </h2>
                </div>
              </div>
            </div>

            <div className="card col-md-6 col-lg-4 mt-lg-0">
              <div className=" d-flex align-items-center">
                <div className="card-content">
                  <i className="fas fa-language fa-7x text-primary mb-4"></i>
                  <h2>
                    Yabancı Dil
                    <br />I Speak Better
                  </h2>
                </div>
              </div>
            </div>

            <div className="card col-md-6 col-lg-4 mt-lg-0">
              <div className=" d-flex align-items-center">
                <div className="card-content">
                  <i className="fas fa-language fa-7x text-primary mb-4"></i>
                  <h2>
                    Yabancı Dil
                    <br />I Speak Better
                  </h2>
                </div>
              </div>
            </div>
            <div className="card col-md-6 col-lg-4 mt-lg-0">
              <div className=" d-flex align-items-center">
                <div className="card-content">
                  <i className="fas fa-language fa-7x text-primary mb-4"></i>
                  <h2>
                    Yabancı Dil
                    <br />I Speak Better
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */
}
