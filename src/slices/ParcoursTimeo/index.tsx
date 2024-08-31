import { Content } from "@prismicio/client";
import AnimatedContent from "./AnimatedContent";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import StarBackground from "./StarBackground";
import Image from "next/image";
import background from "./background.jpg";
import React from "react";
import Bounded from "./Bounded";

/**
 * Props for `ParcoursTimeo`.
 */
export type ParcoursTimeoProps =
  SliceComponentProps<Content.ParcoursTimeoSlice>;

/**
 * Component for "ParcoursTimeo" Slices.
 */
const ParcoursTimeo = ({ slice }: ParcoursTimeoProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden bg-[#356A78] w-full"
    >
      <div className="relative w-full">
        <h2 className="mx-auto max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
          <PrismicText field={slice.primary.titre} />
        </h2>
        <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
          <PrismicRichText field={slice.primary.titre} />
        </div>
        <AnimatedContent slice={slice} />
      </div>
    </Bounded>
  );
};

export default ParcoursTimeo;
