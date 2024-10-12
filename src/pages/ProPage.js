import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Pro from "../Components/product/Pro";
import Spacer2 from "../Components/common/Spacer2";
// import Spacer2 from "../Components/common/Spacer2";

function ProPage() {
  const { t } = useTranslation();
  return (
    <>
      <Spacer2 />
      <Pro />
    </>
  );
}

export default ProPage;