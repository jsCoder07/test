import React from "react";
import SectionImgLeft from "../components/SectionImgLeft";
import HomeImg2 from "../images/optized/nkem.jpg";

const Nkem = () => {
  return (
    <SectionImgLeft
      className="w-full bg-zinc-900 text-gray-200"
      title="Nkem Ogban"
      background={HomeImg2}
      bg="bg-zinc-900"
      content={
        "Join Nkem every Thursday on youtube as she talks about self love, hapiness and living a life filled to the brim with your maximum potential."
      }
    />
  );
};

export default Nkem;
