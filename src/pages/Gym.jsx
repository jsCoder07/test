import React from "react";
import SectionImgRight from "../components/SectionImgRight";
import HomeImg1 from "../images/optized/gym.jpg";

const Gym = () => {
  return (
    <SectionImgRight
      className="w-full bg-gray-800 text-gray-200"
      title="Our Gym"
      background={HomeImg1}
      bg="bg-zinc-900"
      content={
        "Our well-equipped gym is accessible to our in-house fit fam junkies, and comes with an available instructor. Access to the gym for outside guests are only available to members only.Opening Time: Monday – Sunday (7am – 8pm)\n\nKeep up with your fitness routine whilst you're away with our free hotel gym. Packed with cardio and resistance equipment and weights, you can unwind after a busy day in the crispan gyn and fitness centre\n\nAll guests over the age of 16 who visit the hotel are invited to use our in house hotel gym to exercise and unwind. With a mix of equipment and weights, our hotel gym centre will cater to you whether you want a cardio workout, or if you want to give your muscles some strenght training or toning exercises.Once you've worked up a sweat, cool down at the cafe for a healthy snack or a glass of juice and replenish your energy before you take on for the rest of the day."
      }
    />
  );
};

export default Gym;
