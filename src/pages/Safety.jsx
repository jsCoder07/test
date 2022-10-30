import React from "react";
import SectionImgLeft from "../components/SectionImgLeft";

import Covid from "../images/optized/covid.jpg";
const Safety = () => {
  return (
    <SectionImgLeft
      className="w-full bg-gray-800 text-gray-200"
      background={Covid}
      bg="bg-zinc-900"
      title="Covid-Safe House Policy"
      content="As a group, Wab Hotels is taking every possible preventative measure to ensure that guests, staff and suppliers of Wab, are protected from potential transmission of COVID-19."
    />
  );
};

export default Safety;
