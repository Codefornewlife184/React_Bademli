/* eslint-disable no-unused-vars */
import { Button, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const TopBar = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div
      className="topbar mb-0"
      style={{ padding: "7px", backgroundColor: "#de3f92" }}
    >
      <Container>
        <div className="d-flex justify-content-center align-items-center">
          <div
            className="d-flex align-items-center"
            style={{ color: "#de3f92" }}
          >
            <span className="topbar__wrapper">
              <ul
                className="list-unstyled topbar__list"
                style={{
                  color: "#fff",
                  paddingTop: "0px",
                  margin: "3px",
                  fontSize: "35px",
                  
                  fontFamily:"Love Ya Like A Sister, curseve"
                }}
              >
                <li className="text-center">{t("“En Önemlisi Sensin, Kalabalıklarda Kaybolma!”")}</li>
              </ul>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;

//* d-none d-md-inline yapma nedenimiz küçük ekranda
//* kaybolsunlar diye ve block olursa aşağı iner diye inline yaptık

//? d-none d-md-block yapma nedenimiz küçük ekranda kaybolsunlar diye yapmış olduk...