import React from "react";
import Aboutus from "../Components/about/Aboutus";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Spacer2 from "../Components/common/Spacer2";
// import Spacer2 from "../Components/common/Spacer2";

function AboutPage() {
  const { t } = useTranslation();
  return (
    <>
      <Spacer2 />
      <Aboutus />
    </>
  );
}

export default AboutPage;
