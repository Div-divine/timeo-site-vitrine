import { Content, isFilled } from "@prismicio/client";
import AnimatedContent from "./AnimatedContent";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import React from "react";
import Bounded from "./Bounded";
import clsx from "clsx";
import { Arima, Amaranth } from 'next/font/google';

const arima = Arima({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-arima',
});

const amaranth = Amaranth({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400", "700"],
  variable: '--font-amaranth',
});

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
      className="relative overflow-hidden bg-[#082a34] w-full"
    >
      <div className="relative w-full">
        {isFilled.richText(slice.primary.titre) && (
          <h2
            className={`${arima.className} text-balance font-medium text-4xl lg:text-5xl text-center text-[#b1efda] w-full`}
          >
            <PrismicText field={slice.primary.titre} />
          </h2>
        )}
        <AnimatedContent slice={slice} />
      </div>

      {/* Align item.etape with the icon containers */}
      <div className={`${amaranth.className} w-full max-w-7xl m-auto hidden md:flex justify-between`}>
        {slice.items.map((item, index) => (
          <div key={index} className={clsx("text-slate-300 text-center font-light md:text-lg",
            index === 0 ? "w-56" : "w-40"
          )}>
            {item.etape}
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default ParcoursTimeo;
