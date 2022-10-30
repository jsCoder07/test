import React from "react";
import SectionImgRight from "../components/SectionImgRight";
import HomeImg2 from "../images/optized/home6.jpg";

const About = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <SectionImgRight
        className="w-full bg-zinc-900 text-gray-200"
        title="About Wab Hotels"
        background={HomeImg2}
        bg="bg-zinc-900"
        content={
          "More than a mere hotel, Wab is an experience all on its own. Luxury convention facilities and gracious accommodations make both workdays and downtime unforgettable.\n\nAll rooms and suites in our hotel feature handcrafted  furniture, original works of art, complimentary wi-fi, and large bathrooms. Floor-to-ceiling windows showcase breathtaking views of our beautifully landscaped gardens.\n\nYes, convenience and charm are our secret weapons. Attendees rave about the rooms and amenities at Wab. You’ll find our stunning facilities are incredibly meeting-friendly, able to accommodate corporate functions of every size and purpose."
        }
      />
    </div>
  );
};

export default About;
