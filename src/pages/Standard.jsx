import React from "react";
import SectionImgRight from "../components/SectionImgRight";
import HomeImg2 from "../images/optized/standard.jpg";
const Standard = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <SectionImgRight
        className="w-full bg-zinc-900 text-gray-200"
        title="Standard Rooms"
        background={HomeImg2}
        bg="bg-zinc-900"
        content={
          "Standard rooms are modern, decorated and can accommodate up to 2 persons, totally soundproofed and equipped with high tech comforts such as high speed internet access, USB ports , smart TV and room cleaning touch system."
        }
      />
    </div>
  );
};

export default Standard;
