import React from "react";
import Hero from "../components/Hero";
import Test from "../components/Test";
import ThreeInages from "../components/ThreeImages";
import SectionImgLeft from "../components/SectionImgLeft";
import SectionImgRight from "../components/SectionImgRight";
import { motion } from "framer-motion";
import { SlideData } from "../data/SliderData";
import HomeImg1 from "../images/optized/home5.jpg";
import HomeImg2 from "../images/optized/home6.jpg";
import Img1 from "../images/optized/home2.jpg";
import Img2 from "../images/optized/home3.jpg";
import Img3 from "../images/optized/home4.jpg";
import FourCards from "../components/FourCards";

const svVariant = {
  hidden: { opacity: 0, top: "100vh" },
  visible: {
    top: 0,
    opacity: 1,
    transition: {
      duration: 4,
      ease: "easeInOut",
    },
  },
};
const Home = () => {
  return (
    <>
      <motion.div variants={svVariant} initial="hidden" animate="visible">
        <Hero slides={SlideData} />
      </motion.div>

      <Test />
      <ThreeInages backgroundl={Img1} backgroundm={Img2} backgroundr={Img3} />
      <SectionImgLeft
        className="w-full bg-gray-800 text-gray-200"
        title="Welcome to Wab"
        background={HomeImg1}
        bg="bg-zinc-900"
        content={
          "More than a mere hotel, Wab is an experience all on its own. Luxury convention facilities and gracious accommodations make both workdays and downtime unforgettable.\n\nAll rooms and suites in our hotel feature handcrafted  furniture, original works of art, complimentary wi-fi, and large bathrooms. Floor-to-ceiling windows showcase breathtaking views of our beautifully landscaped gardens.\n\nYes, convenience and charm are our secret weapons. Attendees rave about the rooms and amenities at Wab. You’ll find our stunning facilities are incredibly meeting-friendly, able to accommodate corporate functions of every size and purpose."
        }
      />
      <FourCards />
      <SectionImgRight
        className="w-full bg-zinc-900 text-gray-200"
        title="Our Pool side Bar"
        background={HomeImg2}
        bg="bg-zinc-900"
        content={
          "For your outdoor pleasure, we have a choice of a tropical swimming pools with a swim-up bar to ensure that you stay hydrated while soaking up the sun. Don’t miss your free second cocktail special offer with every alcoholic drink purchased at one of our pool bars.\n\nDive into your holiday and commence relaxation mode as you lounge poolside. Take advantage of the hotel swim-up pool bar and cool off with a cocktail, spritz or rosé as you enjoy light bites in the sun-drenched lagoon pool.\n\nA day spent soaking up the sun at Wabs pool bar gives a sense of true indulgence, enjoying local and imported beers, fresh smoothies and original cocktails. The thick cover above helps to keep the poolside cool, leaving guests free to relax in peace. Truly a tonic for the soul."
        }
      />
    </>
  );
};

export default Home;
