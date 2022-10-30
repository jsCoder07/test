import React from "react";
import SectionImgLeft from "../components/SectionImgLeft";
import HomeImg1 from "../images/optized/laundry.jpg";

const Laundry = () => {
  return (
    <SectionImgLeft
      className="w-full bg-gray-800 text-gray-200"
      title="Hotel Laundry"
      background={HomeImg1}
      bg="bg-zinc-900"
      content={
        "We runs a 24 hour laundry and dry cleaning service with experience in dry cleaning, laundry, ironing, stitching, and stain removal services . The laundry is fully equipped with state of the art machines to serve you and give your fabrics that crisp finish you desire.\n\nOur home cleaning services are designed to give you the peace of mind you deserve and the time you need to enjoy your life and loved ones.\n\nWe use the latest machines and standardized chemicals to give the best treatment to your clothes. We do free pick up and deliver back to your hotel room on scheduled time once the cleaning is done. Since our business is to make you look good, there won't be any compromise whatsoever on finishing touches. "
      }
    />
  );
};

export default Laundry;
