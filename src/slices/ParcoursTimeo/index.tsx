import { Content, isFilled } from "@prismicio/client";
import AnimatedContent from "./AnimatedContent";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import React from "react";
import Bounded from "./Bounded";
import clsx from "clsx";
import { Cormorant, Proza_Libre } from 'next/font/google';
import Link from "next/link";

const cormorant = Cormorant({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
});

const proza_libre = Proza_Libre({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400", "700"],
  variable: '--font-proza_libre',
});

const sectionLinks = [
  {
    href: "#section-eveil"
  },
  {
    href: "#section-developpement"
  },
  {
    href: "#section-transformation"
  },
];

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
      className=" bg-[#082a34] w-full"
    >
      <div className="w-full md:w-[70%]">
        {isFilled.richText(slice.primary.titre) && (
          <h2
            className={`${cormorant.className} text-balance font-medium text-4xl lg:text-5xl text-center text-[#b1efda] w-full`}
          >
            <PrismicText field={slice.primary.titre} />
          </h2>
        )}
        <AnimatedContent slice={slice} />
      </div>

      {/* Align item.etape with the icon containers */}
      <div className={`${proza_libre.className} w-full md:w-[75%] m-auto hidden md:flex justify-between`}>
        {slice.items.map((item, index) => (
          <div key={index} className={clsx("text-slate-300 text-center font-light mt-4",
            "w-40"
          )}>
            {<Link href={sectionLinks[index]?.href}>{index+1}. {item.etape}</Link>
            }
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default ParcoursTimeo;
