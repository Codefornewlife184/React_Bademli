import React from "react";
import { useTranslation } from "react-i18next";
import Portfolio from "../Components/portfolio/Portfolio";
import PageHeader from "../Components/common/PageHeader";
import Spacer2 from "../Components/common/Spacer2";
// import Spacer2 from "../Components/common/Spacer2";

function PortfolioPage() {
  const { t } = useTranslation();
  return (
    <>
      <Spacer2 />
      <Portfolio />
    </>
  );
}

export default PortfolioPage;
