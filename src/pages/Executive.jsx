import React from "react";
import SectionImgLeft from "../components/SectionImgLeft";
import HomeImg2 from "../images/optized/executive.jpg";

const Executive = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <SectionImgLeft
        className="w-full bg-zinc-900 text-gray-200"
        title="Executive Rooms"
        background={HomeImg2}
        bg="bg-zinc-900"
        content={
          "It is a luxurious and spacious suite, suitable for the traveller seeking ultimate comfort whilst away from home. Large Bathroom with Separate Walk-in Shower. Tastefully decorated with a King Size Bed and a separate lounge. The room features a kitchenette, Tea-Coffee Making Facilities, Iron & Board, Safe and a Mini-Bar. "
        }
      />
    </div>
  );
};

export default Executive;
