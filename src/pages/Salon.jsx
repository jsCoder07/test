import React from "react";
import SectionImgLeft from "../components/SectionImgLeft";
import HomeImg2 from "../images/optized/salon.jpg";

const Salon = () => {
  return (
    <SectionImgLeft
      className="w-full bg-zinc-900 text-gray-200"
      title="Our Salon"
      background={HomeImg2}
      bg="bg-zinc-900"
      content={
        "You are invited to experience a variety of relaxing wellness treatment, from massages to getting your hair and nails done. These pampering sessions guarantee a memorable stay with us.\n\nEvery session is designed to address your specific needs, leaving you refreshed, relaxed and radiant. Our skilled and exceptionally professional therapists will apply themselves to ensure that your spa experience is memorable and rejuvenating for your mind and body. \n\nLadies as well as men can choose from a wide array of services and treatments, which include a vast variety of hair treatments such as haircuts, hair styling with blow dry, straightening and tong treatments. If you want a quick change in your looks, you can opt for either a dramatic or subtle change in the color of your hair - in this case you could go in for pre-lightening, coloring and highlights. Don't forget to pamper yourself with a manicure, pedicure or facial for that perfectly groomed look. And while you're about it, you could go in for a relaxing head massage too!"
      }
    />
  );
};

export default Salon;
