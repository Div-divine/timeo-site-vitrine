import * as motion from "framer-motion/client"
import { SliceZone } from "@prismicio/react";

type ScrollContainerProps = {
  slices: any[]; // Adjust based on your slice structure
  components: {
    [key: string]: React.ComponentType<any>; // Generic type for slice components
  };
};

const SliceTransition = ({ slices, components }: ScrollContainerProps) => {
    return (
        <div>
          {slices.map((slice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }} // Start off-screen
              whileInView={{ opacity: 1, y: 0 }} // Animate to final position when in view
              exit={{ opacity: 0, y: -20 }} // Animate out
              transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
              viewport={{ once: false }} // Allow multiple animations on scroll
              style={{ position: "relative", zIndex: index }} // Ensure stacking context for overlaps
            >
              <SliceZone slices={[slice]} components={components} />
            </motion.div>
          ))}
        </div>
      );
};

export default SliceTransition;
