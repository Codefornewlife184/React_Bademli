import React from "react";
import ProductDetails from "../Components/product/ProductDetails";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";

function ProductDetailsPage() {
  const { t } = useTranslation();
  return (
    <>
    <PageHeader title={t("Detay")} />
      <ProductDetails />  
    </>
  );
}

export default ProductDetailsPage;
