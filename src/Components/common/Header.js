/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [showSubMenu, setShowSubMenu] = useState(false); // Alt menünün görünürlüğünü saklar

  const handleMouseEnter = () => {
    setShowSubMenu(true); // Mouse üstüne geldiğinde alt menüyü göster
  };

  const handleMouseLeave = () => {
    setShowSubMenu(false); // Mouse menünün üstünden çıktığında alt menüyü gizle
  };

  return (
    <>
      <div
        className="topbar fixed-top sticky-top mb-0"
        style={{ padding: "7px", backgroundColor: "#de3f92" }}
      >
        <Container className="topbar fixed-top sticky-top mb-0">
          <div className="d-flex justify-content-between align-items-center">
            <div
              className="d-flex align-items-center"
              style={{ color: "#df2818" }}
            >
              <span className="topbar__wrapper">
                <ul
                  className="list-unstyled topbar__list"
                  style={{
                    color: "#3db1f5",
                    paddingTop: "0px",
                    margin: "3px",
                  }}
                >
                  <li>
                    <span className="fas fa-mobile"></span>
                    <a
                      href="tel:+905442601190"
                      style={{
                        color: "#fff",
                        fontSize: "13px",
                        fontFamily: "Madimi One, curseve",
                      }}
                      onClick={handleClick}
                    >
                      {" "}
                      &nbsp; 0544 260 1190
                    </a>
                  </li>
                </ul>
              </span>
            </div>
            <div className="d-flex">
              <Button
                className="btn-primaries"
                style={{
                  backgroundColor: "#3db1f5",
                  color: "#fff",
                  padding: "3px 7px 3px 7px",
                  fontSize: "13px",
                  fontFamily: "Madimi One, curseve",
                }}
                onClick={() => changeLanguage("tr")}
              >
                {t("TR")}
              </Button>
              &nbsp;
              <Button
                className="btn-primaries"
                style={{
                  backgroundColor: "#3db1f5",
                  color: "#fff",
                  padding: "3px 7px 3px 7px",
                  fontSize: "13px",
                  fontFamily: "Madimi One, curseve",
                }}
                onClick={() => changeLanguage("en")}
              >
                {t("EN")}
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div
          className="topbar mb-0"
          style={{ padding: "7px", backgroundColor: "#fff" }}
        >
          <Container>
            <div className="d-flex justify-content-between align-items-center">
              <div
                className="d-flex align-items-center"
                style={{ color: "#df2818" }}
              >
                <img
                  src="assets/img/top-bottom/t-1.webp"
                  className="text-align-start"
                  alt="Logo 2"
                />
              </div>

              <div className="d-flex justify-content-center align-items-center">
                {/* style={{backgroundColor: "#fff",marginright: "1rem" }} */}
                <Link to="/" className="main-menu__logo" onClick={handleClick}>
                  <img src="assets/img/top-bottom/m-11.webp" alt="Logo" />
                  {/* style={{ marginTop: "2rem" }} */}
                </Link>
              </div>

              <div className="d-flex">
                <img
                  src="assets/img/top-bottom/ata.webp"
                  className="text-align-start"
                  alt="Logo 2"
                />
              </div>
            </div>
          </Container>
          <hr className="mb-0" />
        </div>
      </Container>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-white fixed-top sticky-top"
          style={{ paddingRight: "2rem", paddingLeft: "2rem" }}
        >
          <Container>
            <Navbar.Brand>
              <Link to="/" className="main-menu__logo" onClick={handleClick}>
                <img src="assets/img/logo/logom.webp" alt="Logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={() => setExpanded(!expanded)} // Toggle düğmesine tıklandığında menünün açılmasını/kapanmasını sağla
            />

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={expanded} // Expanded durumuna bağlı olarak Offcanvas'ı göster
              onHide={() => setExpanded(false)} // Offcanvas dışına tıklandığında kapanmasını sağla
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <span
                    style={{
                      color: "#de3f92",
                      fontFamily: "Madimi One, curseve",
                    }}
                  >
                    {t("Özel Bademli Anaokulu")}
                  </span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link
                    as={Link}
                    to="/"
                    onClick={() => {
                      handleClick();
                      setExpanded(false);
                    }}
                    className="nav-item nav-link active"
                    style={{
                      color: "#de3f92",
                      fontFamily: "Madimi One, curseve",
                    }}
                  >
                    {t("Anasayfa")}
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/hakkimizda"
                    className="nav-item nav-link"
                    onClick={() => {
                      handleClick();
                      setExpanded(false);
                    }}
                    style={{
                      color: "#4c99d3",
                      fontFamily: "Madimi One, curseve",
                    }}
                  >
                    {t("Hakkımızda")}
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/gelisim-alanlarimiz"
                    className="nav-item nav-link"
                    onClick={() => {
                      handleClick();
                      setExpanded(false);
                    }}
                    style={{
                      color: "#f3d54c",
                      fontFamily: "Madimi One, curseve",
                    }}
                  >
                    {t("Gelişim Alanlarımız")}
                  </Nav.Link>
                  <NavDropdown
                    className="renk"
                    as={Link}
                    to="/etkinliklerimiz"
                    title={
                      <span
                        style={{
                          color: "#acd049",
                          fontFamily: "Madimi One, curseve",
                        }}
                      >
                        {t("Etkinliklerimiz")}
                      </span>
                    }
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/etkinliklerimiz"
                      onClick={() => {
                        handleClick();
                        setExpanded(false);
                      }}
                      style={{
                        color: "#f3d54c",
                        fontFamily: "Madimi One, curseve",
                      }}
                    >
                      {t("Kids English")}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/etkinliklerimiz"
                      onClick={() => {
                        handleClick();
                        setExpanded(false);
                      }}
                      style={{
                        color: "#4c99d3",
                        fontFamily: "Madimi One, curseve",
                      }}
                    >
                      {t("Stem - Maker")}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/etkinliklerimiz"
                      onClick={() => {
                        handleClick();
                        setExpanded(false);
                      }}
                      style={{
                        color: "#acd049",
                        fontFamily: "Madimi One, curseve",
                      }}
                    >
                      {t("Robotik Kodlama")}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/etkinliklerimiz"
                      onClick={() => {
                        handleClick();
                        setExpanded(false);
                      }}
                      style={{
                        color: "#4c99d3",
                        fontFamily: "Madimi One, curseve",
                      }}
                    >
                      {t("Kids Cross-fit / Jimnastik")}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/etkinliklerimiz"
                      onClick={() => {
                        handleClick();
                        setExpanded(false);
                      }}
                      style={{
                        color: "#f3d54c",
                        fontFamily: "Madimi One, curseve",
                      }}
                    >
                      {t("Müzik / Orff Suzuki")}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/etkinliklerimiz"
                      onClick={() => {
                        handleClick();
                        setExpanded(false);
                      }}
                      style={{
                        color: "#f78787",
                        fontFamily: "Madimi One, curseve",
                      }}
                    >
                      {t("Yaratıcı Drama")}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/etkinliklerimiz"
                      onClick={() => {
                        handleClick();
                        setExpanded(false);
                      }}
                      style={{
                        color: "#acd049",
                        fontFamily: "Madimi One, curseve",
                      }}
                    >
                      {t("Bale")}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/etkinliklerimiz"
                      onClick={() => {
                        handleClick();
                        setExpanded(false);
                      }}
                      style={{
                        color: "#ac9dfb",
                        fontFamily: "Madimi One, curseve",
                      }}
                    >
                      {t("Binicilik")}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/etkinliklerimiz"
                      onClick={() => {
                        handleClick();
                        setExpanded(false);
                      }}
                      style={{
                        color: "#f78787",
                        fontFamily: "Madimi One, curseve",
                      }}
                    >
                      {t("Jogging Trekking")}
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link
                    style={{
                      color: "#f78787",
                      fontFamily: "Madimi One, curseve",
                    }}
                    as={Link}
                    to="/dinamiklerimiz"
                    className="nav-item nav-link"
                    onClick={() => {
                      handleClick();
                      setExpanded(false);
                    }}
                  >
                    {t("Dinamiklerimiz")}
                  </Nav.Link>
                  <Nav.Link
                    style={{
                      color: "#acd049",
                      fontFamily: "Madimi One, curseve",
                    }}
                    as={Link}
                    to="/kazanimlarimiz"
                    className="nav-item nav-link"
                    onClick={() => {
                      handleClick();
                      setExpanded(false);
                    }}
                  >
                    {t("Kazanımlarımız")}
                  </Nav.Link>
                  <Nav.Link
                    style={{
                      color: "#e6377c",
                      fontFamily: "Madimi One, curseve",
                    }}
                    as={Link}
                    to="/ailemiz"
                    className="nav-item nav-link"
                    onClick={() => {
                      handleClick();
                      setExpanded(false);
                    }}
                  >
                    {t("Ailemiz")}
                  </Nav.Link>
                  <Nav.Link
                    style={{
                      color: "#ac9dfb",
                      fontFamily: "Madimi One, curseve",
                    }}
                    as={Link}
                    to="/galeri"
                    className="nav-item nav-link"
                    onClick={() => {
                      handleClick();
                      setExpanded(false);
                    }}
                  >
                    {t("Galeri")}
                  </Nav.Link>

                  <Nav.Link
                    style={{
                      color: "#f3d54c",
                      fontFamily: "Madimi One, curseve",
                    }}
                    as={Link}
                    to="/iletisim"
                    className="nav-item nav-link"
                    onClick={() => {
                      handleClick();
                      setExpanded(false);
                    }}
                  >
                    {t("İletişim")}
                  </Nav.Link>
                </Nav>
                <div className="footer-icon d-flex">
                  <a
                    className="btn btn-primary btn-sm-square me-2 rounded-circle"
                    href="https://m.facebook.com/anaokulubademli/"
                    target="_blank"
                    onClick={handleClick}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square me-2 rounded-circle"
                    href="https://www.instagram.com/bademlianaokulu/"
                    target="_blank"
                    onClick={handleClick}
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square me-2 rounded-circle"
                    href="https://www.youtube.com/channel/UCOkNdIr0-eXsBjgNaABL3TQ"
                    target="_blank"
                    onClick={handleClick}
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a
                    href="tel:+90(224)5492349"
                    className="btn btn-primary btn-sm-square rounded-circle"
                    onClick={handleClick}
                  >
                    <i className="fas fa-mobile-alt"></i>
                  </a>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
