import React from "react";
import SectionImgLeft from "../components/SectionImgLeft";
import HomeImg1 from "../images/optized/hompool.jpg";
const Pool = () => {
  return (
    <SectionImgLeft
      className="w-full bg-gray-800 text-gray-200"
      title="Our Swimming Pool"
      background={HomeImg1}
      bg="bg-zinc-900"
      content={
        "For your outdoor pleasure, we have a choice of a tropical swimming pools with a swim-up bar to ensure that you stay hydrated while soaking up the sun. Don’t miss your free second cocktail special offer with every alcoholic drink purchased at one of our pool bars.\n\nDive into your holiday and commence relaxation mode as you lounge poolside. Take advantage of the hotel swim-up pool bar and cool off with a cocktail, spritz or rosé as you enjoy light bites in the sun-drenched lagoon pool.\n\nA day spent soaking up the sun at Wabs pool bar gives a sense of true indulgence, enjoying local and imported beers, fresh smoothies and original cocktails. The thick cover above helps to keep the poolside cool, leaving guests free to relax in peace. Truly a tonic for the soul."
      }
    />
  );
};

export default Pool;
