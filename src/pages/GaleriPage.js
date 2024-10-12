import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Galeri from "../galeri/Galeri";
import Spacer2 from "../Components/common/Spacer2";
// import Spacer2 from "../Components/common/Spacer2";

function GaleriPage() {
  const { t } = useTranslation();
  return (
    <>
      <Spacer2 />
      <Galeri />
    </>
  );
}

export default GaleriPage;