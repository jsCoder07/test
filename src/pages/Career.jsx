import React from "react";
import SectionImgLeft from "../components/SectionImgLeft";
import HomeImg1 from "../images/optized/career.jpg";

const Career = () => {
  return (
    <SectionImgLeft
      className="w-full bg-gray-800 text-gray-200"
      background={HomeImg1}
      bg="bg-zinc-900"
      title="Careers"
      content={
        "Wab is looking for passionate people to join our teams in Lagos.\n\nBy joining Wab Hotels, you will become a part of one of the country’s leading groups. Offering attractive staff benefits, competitive salary and opportunities for development and career progression, Wab Hotels is a well-established, stable employer, with a passion for discovering, training and championing emerging talent within the hospitality industry.\n\nWab Hotels is actively hiring across all venues and teams. To apply for an advertised position, or simply to have a chat about opportunities with Wab Hotels, please send your resume to us at careers@wabhotels.com.ng."
      }
    />
  );
};

export default Career;
