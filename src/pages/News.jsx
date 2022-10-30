import React from "react";
import { SlideData } from "../data/NewsData";
import NewsHero from "../components/NewsHero";
import { motion } from "framer-motion";
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
const News = () => {
  return (
    <>
      <motion.div variants={svVariant} initial="hidden" animate="visible">
        <NewsHero slides={SlideData} />
      </motion.div>
    </>
  );
};

export default News;
