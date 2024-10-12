import React from "react";
import { useTranslation } from "react-i18next";
import OtherPage from "../Components/portfolio/OtherPage";
import PageHeader from "../Components/common/PageHeader";
// import Spacer2 from "../Components/common/Spacer2";

function OtherPagePage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Veli Yorumları")} />
      <OtherPage />
    </>
  );
}

export default OtherPagePage;
