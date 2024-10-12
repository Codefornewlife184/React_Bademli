import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Education from "../Components/education/Education";
import Spacer2 from "../Components/common/Spacer2";
// import Spacer2 from "../Components/common/Spacer2";

function EducationPage() {
  const { t } = useTranslation();
  return (
    <>
      <Spacer2 />
      <Education />
    </>
  );
}

export default EducationPage;