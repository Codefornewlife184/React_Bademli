import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Hero from "../Components/common/Hero";
// import Spacer2 from "../Components/common/Spacer2";

function HeroPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Galeri")} />
      <Hero />
    </>
  );
}

export default HeroPage;