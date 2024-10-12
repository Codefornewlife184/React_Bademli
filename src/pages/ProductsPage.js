import React from "react";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";
import Products from "../Components/product/Products";

function ProductsPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("Etkinliklerimiz")} />
      <Products />
    </>
  );
}

export default ProductsPage;
