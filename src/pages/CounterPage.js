import React from "react";
import { useTranslation } from "react-i18next";
import Counter from "../Components/counter/Counter";
// import Spacer2 from "../Components/common/Spacer2";

function CounterPage() {
  const { t } = useTranslation();
  return (
    <>
      <Counter />
    </>
  );
}

export default CounterPage;