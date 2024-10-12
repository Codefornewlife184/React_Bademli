/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
      <div className="container-fluid nav-bar sticky-top p-0">
        <div
          className="topbar fixed-top sticky-top mb-0"
          style={{ padding: "7px", backgroundColor: "#de3f92" }}
        >
          <Container>
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
                      <span className="fas fa-envelope"></span>
                      <a
                        href="mailto:info@bademlianaokulu.com"
                        style={{
                          color: "#fff",
                          fontSize: "12px",
                        }}
                      >
                        &nbsp; info@bademlianaokulu.com
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
                  }}
                  onClick={() => changeLanguage("en")}
                >
                  {t("EN")}
                </Button>
              </div>
            </div>
          </Container>
        </div>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="navbar navbar-expand-lg"
          expanded={expanded}
        >
          <Container>
            <Navbar.Brand>
              <Link to="/" className="main-menu__logo" onClick={handleClick}>
                <img src="assets/img/logom.webp" alt="Logo" />
              </Link>
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls="navbarCollapse"
              onClick={() => setExpanded(!expanded)}
              class="navbar-toggler py-2 px-3"
            />
            <Navbar.Collapse
              expanded={expanded}
              className="collapse navbar-collapse"
              id="navbarCollapse"
            >
              <Nav className="navbar-nav mx-auto">
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={handleClick}
                  className="nav-item nav-link active"
                >
                  {t("Anasayfa")}
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/hakkimizda"
                  className="nav-item nav-link"
                  onClick={handleClick}
                  style={{ color: "#4c99d3" }}
                >
                  {t("Hakkımızda")}
                </Nav.Link>

                <NavDropdown
                  className="renk"
                  as={Link} to="/etkinliklerimiz"
                  title={
                    <span style={{ color: "#acd049" }}>
                      {t("Etkinliklerimiz")}
                    </span>
                  }
                  id="basic-nav-dropdown"
                  onMouseEnter={handleMouseEnter} // Mouse üstüne gelince alt menüyü göster
                  onMouseLeave={handleMouseLeave} // Mouse menünün üstünden çıkınca alt menüyü gizle
                  show={showSubMenu}
                >
                  <NavDropdown.Item as={Link} to="/etkinliklerimiz" onClick={handleClick}>
                    {t("Kids English")}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/etkinliklerimiz" onClick={handleClick}>
                    {t("Stem - Maker")}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/etkinliklerimiz" onClick={handleClick}>
                    {t("Robotik Kodlama")}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/etkinliklerimiz" onClick={handleClick}>
                    {t("Kids Cross-fit / Jimnastik")}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/etkinliklerimiz" onClick={handleClick}>
                    {t("Müzik / Orff Suzuki")}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/etkinliklerimiz" onClick={handleClick}>
                    {t("Yaratıcı Drama")}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/etkinliklerimiz" onClick={handleClick}>
                    {t("Bale")}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/etkinliklerimiz" onClick={handleClick}>
                    {t("Jogging Trekking / Binicilik")}
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  style={{ color: "#ac9dfb" }}
                  as={Link}
                  to="/ailemiz"
                  className="nav-item nav-link"
                  onClick={handleClick}
                >
                  {t("Ailemiz")}
                </Nav.Link>
                <Nav.Link
                  style={{ color: "#17439a" }}
                  as={Link}
                  to="/iletisim"
                  className="nav-item nav-link"
                  onClick={handleClick}
                >
                  {t("İletişim")}
                </Nav.Link>
              </Nav>

              <div className="footer-icon d-flex">
                <a
                  className="btn btn-primary btn-sm-square me-2 rounded-circle"
                  href="https://m.facebook.com/anaokulubademli/"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-primary btn-sm-square me-2 rounded-circle"
                  href="https://www.instagram.com/bademlianaokulu/"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="btn btn-primary btn-sm-square me-2 rounded-circle"
                  href="https://www.youtube.com/channel/UCOkNdIr0-eXsBjgNaABL3TQ"
                  target="_blank"
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
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
