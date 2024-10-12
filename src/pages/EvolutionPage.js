import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Evolution from "../Components/development/Evolution";
import Spacer2 from "../Components/common/Spacer2";
// import Spacer2 from "../Components/common/Spacer2";

function EvolutionPage() {
  const { t } = useTranslation();
  return (
    <>
      <Spacer2 />
      <Evolution />
    </>
  );
}

export default EvolutionPage;
