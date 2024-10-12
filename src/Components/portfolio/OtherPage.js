import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Other from "./Other";
import { Helmet } from "react-helmet";
import { t } from "i18next";

export default function SimpleSlider() {
  const pageDescription = "";
  const pageKeywords = "";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://bademlianaokulu.com/hakkimizda";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <Helmet>
        <title>{t("Bademli Anaokulu")}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
      <Other />
      <div className="testimonials">
        <Slider {...settings}>
          
          <div>
            <section id="testimonials" className="testimonials">
              <div className="container">
                <div
                  className="testimonials-slider swiper"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <div style={{ top: "40px", right: "20px" }}>
                            <i className="fa fa-quote-right fa-2x text-danger"></i>
                          </div>
                          <h3>Gezen *</h3>
                          <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            İyi ki oğlumuzun okul öncesi eğitiminde 2 yıl sizi
                            tercih ettik, çok verimli ve yararlı bir zamandı,
                            Arif öğretmenimiz, Okul müdiresi Sinem öğretmenimiz
                            ve o çok değerli kadrolarına sonsuz teşekkürler,
                            başarılarınız daim olsun. Sevgiler saygılar...
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <section id="testimonials" className="testimonials">
              <div className="container">
                <div
                  className="testimonials-slider swiper"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <div style={{ top: "40px", right: "20px" }}>
                            <i className="fa fa-quote-right fa-2x text-danger"></i>
                          </div>
                          <h3>Semih Çağlı</h3>
                          <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Tecrübeli ve dinamik kadrosu ile son derece
                            güvenilir şeffaf yapıya sahip özel bademli
                            anaokulundan çok memnununuz. Gönül rahatlığı ile
                            çocuğumuzu teslim edebiliyoruz. Eğitimci bir çiftin
                            oluşturduğu müthiş bir aile ortamı.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <section id="testimonials" className="testimonials">
              <div className="container">
                <div
                  className="testimonials-slider swiper"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <div style={{ top: "40px", right: "20px" }}>
                            <i className="fa fa-quote-right fa-2x text-danger"></i>
                          </div>
                          <h3>Tuğçe Bayraktar</h3>
                          <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Özel Bademli Anaokulu okuldan çok daha öte bir yuva
                            oldu bizim için. 2 yılı devirdik birlikte ve
                            yolumuza devam ediyoruz cok mutluyuz sizlerle
                            oldugumuz icin. Bursanin bizce bir numarali anaokulu... <br/><br/>
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <section id="testimonials" className="testimonials">
              <div className="container">
                <div
                  className="testimonials-slider swiper"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <div style={{ top: "40px", right: "20px" }}>
                            <i className="fa fa-quote-right fa-2x text-danger"></i>
                          </div>
                          <h3>Gamze Karadağ</h3>
                          <p style={{ fontSize: "11px" }}>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Kızımın ilk okul deneyiminde birlikte olduğumuz
                            canım okulumuz.Kızımı bu kadar mutlu ettikleri için
                            gerekli eğitimi verdikleri için kendi benligini
                            bulmasına yardımcı oldukları ve aileleri de duygu
                            dostu okul-veli programına dahil ederek sürekli
                            bilinç kazanıp yeni deneyimlere şahit ettikleri için
                            kendilerine ne kadar teşekkür etsek azdır.Bu sene de
                            birlikte geçireceğimiz doğaya uyumlu sosyal
                            etkinliklerin içinde ki günleri sabırsızlıkla
                            bekliyoruz 👌Bursamıza böyle bir eğitim kurumu
                            kattıkları için Sinem hanım ve Arif beye sonsuz
                            teşekkürler 💞
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <section id="testimonials" className="testimonials">
              <div className="container">
                <div
                  className="testimonials-slider swiper"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <div style={{ top: "40px", right: "20px" }}>
                            <i className="fa fa-quote-right fa-2x text-danger"></i>
                          </div>
                          <h3>Burcu Ergin</h3>
                          <p style={{ fontSize: "11px" }}>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Şu an 3,5 yaşında bir oğlum var ve Bademli
                            Anaokulunda 1 yılımız bitti nasıl geçti bizlerde
                            anlamadık anne şefkati ile başlıyan serüvenimiz
                            öğrenme eğlenme olarak devam etti bu bir tavsiye
                            midir bilmiyorum fakat Bir anne olarak hiç gözüm
                            arkada kalmadı sonsuz teşekkür ederiz ilk okula
                            kadar birlikteyiz ❤️❤️<br/><br/><br/>
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <section id="testimonials" className="testimonials">
              <div className="container">
                <div
                  className="testimonials-slider swiper"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <div style={{ top: "40px", right: "20px" }}>
                            <i className="fa fa-quote-right fa-2x text-danger"></i>
                          </div>
                          <h3>Dilek Çamıkorur *</h3>
                          <p style={{ fontSize: "11px" }}>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Oğlumu daha önce başka bir okula vermiştim ve çok
                            kötü şeyler yaşadım sonra araştırmalarım sonucu
                            bademli anaokulu nu buldum. İyi ki bulmuşum o kadar
                            memnunum ki öncelikle Arif Bey ve Sinem Hanım dan
                            sonra öğretmenlerinden yardımcı ablalara ve şoför
                            bey e kadar hepsi bu kadar güleryüzlü ve ilgili mi
                            olur. Çok çok teşekkür ederim tüm okul personeli ve
                            çalışanlarına.. Gözünüz arkada kalmadan
                            çocuklarınızı gönderebilirsiniz.<br/><br/>
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <section id="testimonials" className="testimonials">
              <div className="container">
                <div
                  className="testimonials-slider swiper"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <div style={{ top: "40px", right: "20px" }}>
                            <i className="fa fa-quote-right fa-2x text-danger"></i>
                          </div>
                          <h3>Burçin Seki</h3>

                          <p style={{ fontSize: "10.5px" }}>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Kızım için okul araştırması yaparken, arkadaşım
                            vasıtasıyla Bademli Anaokulu Sinem Hanım ile
                            tanıştım. İyi ki de tanışmışız, oğlumun gittiği
                            anaokulu ile ilgili yaşadığım kötü tecrübelerin
                            üzerini çizdiler. Kızım çok küçük alışacak mı
                            derken, okula koşarak giden, mutlulukla çıkan bir
                            çocuk oldu. Sinem Hanım ve Arif Bey her türlü
                            iletişime açıklar, ne maddi ne manevi konularda bizi
                            hiç üzmediler. Canımız Gizem öğretmenim ve
                            okulumuzun tüm öğretmenleri sevgiyle yaklaştılar
                            çocuğumuza, işlerini mutlulukla yaptıkları, güzel
                            bir ortamda çalıştıklarını her karşılaşmamızda
                            hissettik. Çocuğunuzu güvenle bırakabileceğiniz bir
                            anaokulu. Sinem Hanım’a, Arif Bey’e, tüm okul
                            öğretmen ve çalışanlarına çok teşekkür ediyoruz.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <section id="testimonials" className="testimonials">
              <div className="container">
                <div
                  className="testimonials-slider swiper"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <div style={{ top: "40px", right: "20px" }}>
                            <i className="fa fa-quote-right fa-2x text-danger"></i>
                          </div>
                          <h3>Elif Özdamar</h3>

                          <p style={{ fontSize: "11.7px" }}>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Oğlum için okul arayışındayken tesadüf eseri bulmuş
                            olduğum okulun kapısından görüşmeye girerken
                            hissettim doğru yere geldiğimizi, Arif Hocam, Sinem
                            Hocam iyiki yollarımız kesişmiş. İlk okul
                            deneyimimiz ve bir çok ilki birlikte yaşadık. Bu
                            süreçte pandemi gibi bir süreci büyük bir
                            titizlikle, sorunsuz atlattık sayenizde. Dolu dolu
                            2.5 yıl bize ışık oldunuz. Gizem öğretmenim siz hep
                            sevgi dolu sevkatli harika bir öğretmen oldunuz.
                            Artık büyüdük, yollarımız ayrıldı, ama sizi çok
                            seviyoruz. Emekleriniz, bize kattiklariniz için
                            sonsuz teşekkürler
                            <br />
                            <br />
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </section>
          </div>
        </Slider>
      </div>
    </>
  );
}
