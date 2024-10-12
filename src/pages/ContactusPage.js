import React from "react";
import Contactus from "../Components/contact/Contactus";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Spacer2 from "../Components/common/Spacer2";

function ContactusPage() {
  const { t } = useTranslation();
  return (
    <>
      <Spacer2 />
      <Contactus />
    </>
  );
}

export default ContactusPage;
