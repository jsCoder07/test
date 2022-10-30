import React from "react";
import SectionImgRight from "../components/SectionImgRight";
import HomeImg1 from "../images/optized/kitchen.jpg";

const Kitchen = () => {
  return (
    <SectionImgRight
      className="w-full bg-gray-800 text-gray-200"
      title="Our Kitchen"
      background={HomeImg1}
      bg="bg-zinc-900"
      content={
        "When it comes to our food, we take inspiration from traditional AFrican dishes, staying true to the timeless flavours, whilst adding a modern twist. In essence, our cuisine is hearty, healthy homecooking showcasing fresh seasonal produce from our own garden & the local markets.\nOur tranquil art nouveau gardens are a wonderful place to enjoy the delights of our menu.\n\nFrom a leisurely breakfast in the morning sunshine to lazy lunches under the dappled shade of our beautiful lime trees, our deceptively simple food aims to satisfy your soul. In summer we embrace casual dining outdoors, in the rainy season we can offer a warm welcome by a roaring fire."
      }
    />
  );
};

export default Kitchen;
