import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import AudioPlayer from "./DisplayAudio";

/**
 * Props for `Developpement`.
 */
export type DeveloppementProps =
  SliceComponentProps<Content.DeveloppementSlice>;

/**
 * Component for "Developpement" Slices.
 */
const Developpement = ({ slice }: DeveloppementProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      slice Developpement 
    </section >
  );
};

export default Developpement;
