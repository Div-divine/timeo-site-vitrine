"use client"; // This must be the first line in the file

import React, { useEffect, useRef, useState } from "react"; // Import React
import { motion, useScroll, useSpring } from "framer-motion";
import { SliceZone } from "@prismicio/react";

type ScrollContainerProps = {
  slices: any[]; // Adjust based on your slice structure
  components: {
    [key: string]: React.ComponentType<any>; // Generic type for slice components
  };
};

const PageScroll = ({ slices, components }: ScrollContainerProps) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      {/* Render the progress bar outside of the slices map */}
      <motion.div className="progress-bar" style={{ scaleX }} />

      {/* Render Slices */}
      {slices.map((slice, index) => {
        return (
          <SliceZone key={index} slices={slice} components={components} />
        );
      })}
    </div>
  );
};

export default PageScroll;
