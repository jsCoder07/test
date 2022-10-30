import React from "react";
import SectionImgRight from "../components/SectionImgRight";
import HomeImg2 from "../images/optized/presidential.jpg";
const Presidential = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <SectionImgRight
        className="w-full bg-zinc-900 text-gray-200"
        title="Presidential Suite"
        background={HomeImg2}
        bg="bg-zinc-900"
        content={
          "Beautiful suite because of its magnificent views of the beautiful city of Lagos. It has an exceptionally regal layout and is most suitable for hosting very important personalities. It is more than four times the size of a regular bedroom and has a bar area, Working / dining area, large screen TVs, hi-fi stereo system and luxurious bathroom with a Jacuzzi and shower. It can accommodate an extra bed. The suite comes with full complimentary bar and VIP gifts. "
        }
      />
    </div>
  );
};

export default Presidential;
