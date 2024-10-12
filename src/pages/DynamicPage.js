import React from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../Components/common/PageHeader";
import Dynamic from "../Components/dynamic/Dynamic";
import Spacer2 from "../Components/common/Spacer2";
// import Spacer2 from "../Components/common/Spacer2";

function DynamicPage() {
  const { t } = useTranslation();
  return (
    <>
      <Spacer2 />
      <Dynamic />
    </>
  );
}

export default DynamicPage;
