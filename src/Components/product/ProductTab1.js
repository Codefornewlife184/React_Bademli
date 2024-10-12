import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

const Portfolio = () => {
  // Kartlar için örnek veri
  const doctors = [
    { id: 1, name: "Sinem ALTINTAŞ KAYA", profession: "Okul K. Müdürü", edu:"Türkçe Öğretmenliği", image: "assets/img/team/1.png" },
    { id: 2, name: "Serenay ERTÜRK", profession: "Müdür Yardımcısı ve PDR Servisi", edu:"Psikoloji Bölümü", image: "assets/img/team/2.png" },
    { id: 3, name: "Merve HEMİTLİ", profession: "Kord. Öğretmen", edu:"Sınıf Öğretmeni", image: "assets/img/team/3.png" },
    { id: 4, name: "Emine OLGUN", profession: "Sınıf Öğretmeni", edu:"", image: "assets/img/team/4.png" },
    { id: 5, name: "Gizem SELVİ", profession: "Sınıf Öğretmeni", edu:"", image: "assets/img/team/5.png" },
    { id: 6, name: "Ecem DÜRÜ", profession: "Sınıf Öğretmeni", edu:"", image: "assets/img/team/6.png" },
    { id: 7, name: "Selin BULUT", profession: "Sınıf Öğretmeni", edu:"", image: "assets/img/team/7.png" },
    { id: 8, name: "Hümeyra KARAKUŞ DİNDAR", profession: "Yardımcı Öğretmen", edu:"", image: "assets/img/team/8.png" },
    { id: 9, name: "Elif GEZMİŞ", profession: "Yardımcı Öğretmeni", edu:"", image: "assets/img/team/9.png" },
    { id: 10, name: "Ellie Guljahan ATABEYEVA", profession: "İngilizce Öğretmeni", edu:"", image: "assets/img/team/10.png" },
    { id: 11, name: "Saynur EREN", profession: "Müzik Öğretmeni", edu:"", image: "assets/img/team/11.png" },
    { id: 12, name: "Yeliz KOÇ", profession: "Beden Eğitimi ve Jimnastik Öğretmeni", edu:"", image: "assets/img/team/12.png" },
    { id: 13, name: "Begüm ERİM", profession: "Bale Öğretmeni", edu:"", image: "assets/img/team/13.png" },
    { id: 14, name: "Kübra HAKSAL", profession: "Drama Becerileri Öğretmeni", edu:"", image: "assets/img/team/14.png" },
    { id: 15, name: "Fatma Merve YENER", profession: "Mutfak Teyzemiz", edu:"", image: "assets/img/team/15.png" },
    { id: 16, name: "Esra YALNIZ", profession: "Okul Hijyen Teyzemiz", edu:"", image: "assets/img/team/16.png" },
    
  ];

  return (
    <>
      <SRLWrapper>
        <div className="container-fluid team">
          <div className="container">
            <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
              <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-5 py-3 mb-3">
                Ailemiz
              </small>
            </div>
          </div>
        </div>

        <section id="doctors" className="doctors mt-5">
          <div className="container">
            <div className="row">
              {/* Doktor kartlarını oluşturmak için map fonksiyonu kullanılıyor */}
              {doctors.map((doctor) => (
                <div className="col-lg-4 g-5" key={doctor.id}>
                  <div className="member d-flex align-items-center">
                    <div className="pic">
                      <img src={doctor.image} className="img-fluid" alt="" />
                    </div>
                    <div className="member-info">
                      <h6>{doctor.name}</h6>
                      <span>{doctor.profession}</span>
                      <span>{doctor.edu}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SRLWrapper>
    </>
  );
};

export default Portfolio;
