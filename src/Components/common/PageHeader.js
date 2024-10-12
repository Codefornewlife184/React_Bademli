/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function PageHeader(props) {
  const { t } = useTranslation();

  const headerStyle = {
    backgroundColor: `#3db1f5`, // Arka plan resmi için yolunuzu belirtin
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative', // Eklenen opaklık için position özelliğini belirtin
  };

  const overlayStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Siyah renkte ve %50 opaklıkta bir overlay
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  };

  return (
    <>
      <div style={headerStyle} className="container-fluid bg-light py-6 my-6 mt-0">
        <div style={overlayStyle}></div>
        <div className="container text-center animated bounceInDown">
          <h1 className=" pageh1 display-1 mb-4">{props.title}</h1>
          <ol className="breadcrumb justify-content-center mb-0 animated bounceInDown">
            <li className="breadcrumb-item">
              <Link as={Link} to="/" className="text-darks">
                {t("Anasayfa")}
              </Link>
            </li>
            <li className="breadcrumb-item pageh1" aria-current="page">
              {props.title}
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default PageHeader;
