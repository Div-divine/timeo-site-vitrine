"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import timeoLogo from "./logo-bleu-clair.png";
import eveilImg from "./eveil.png";
import developImg from "./aura.png";
import transImg from "./tranfo.png";
import Image from "next/image";
import clsx from "clsx";
import { Content } from "@prismicio/client";
import { Proza_Libre } from "next/font/google";
import Link from "next/link";

const proza_libre = Proza_Libre({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400", "700"],
  variable: '--font-proza_libre'
})

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


export default function AnimatedContent({
  slice,
}: {
  slice: Content.ParcoursTimeoSlice;
}) {
  const icons = {
    Timeo: timeoLogo,
    eveil: eveilImg,
    developpement: developImg,
    transformation: transImg,
  };

  const container = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: -1, // Repeat infinitely
      defaults: { ease: "power1.inOut" }, // Smoother easing
    });

    // Animate the pulsing brightness and opacity with a slower effect
    tl.to(".pulsin-icon", {
      filter: "brightness(2)", // Increase brightness
      opacity: 1, // Fully visible
      duration: 1.8, // Slower duration (1.2 seconds)
      stagger: {
        from: "start", // Start from the first item
        each: 0.8, // Slower stagger (0.8 seconds between each item)
      },
    })
      .to(".pulsin-icon", {
        filter: "brightness(1)", // Reset brightness to normal
        opacity: 0.9, // Slightly reduce opacity
        duration: 1.8, // Match the slower duration
        stagger: {
          from: "start", // Maintain left to right sequence
          each: 0.8, // Keep the stagger delay consistent
        },
      });

    // Animate the signal-line between items (slightly slower)
    tl.to(".signal-line", {
      backgroundPosition: "100% 0%", // Animate the background position
      stagger: {
        from: "start", // Animate left to right
        each: 0.5, // Slightly slower stagger for signal line
      },
      duration: 1.5, // Slow down the animation for the signal line
    }, "-=1.8"); // Overlap with the previous animation
  }, { scope: container });



  return (
    <div
      ref={container}
      className="flex flex-col items-center md:flex-row justify-between mt-5 md:mt-8 lg:mt-12 max-w-6xl m-auto"
    >
      {slice.items.map((item, index) => (
        <React.Fragment key={index}>
          {/* Container for icon and etape text */}
          {/* For the first item (index === 0), no link */}
          {index === 0 ? (
            <Link
              className="flex flex-col items-center md:flex-row md:items-center"
              href={sectionLinks[0]?.href} // Adjust the index by -1 for the 3 links
            >
              <div
                className={clsx(
                  "pulsin-icon flex aspect-square shrink-0 items-center justify-center rounded-full",
                  "border border-blue-50/30 bg-blue-50/25 p-3 opacity-40",
                  "w-20 h-20"
                )}
              >
                {item.icon && <Image src={icons[item.icon]} alt="" className="" />}
              </div>
              {item.etape && <div className={`${proza_libre.className} flex md:hidden text-slate-200`}>{item.etape}</div>}
            </Link>
          ) : (
            /* For the other items, use sectionLinks for href */
            <Link
              className="flex flex-col items-center md:flex-row md:items-center"
              href={sectionLinks[index]?.href} // Adjust the index by -1 for the 3 links
            >
              <div
                className={clsx(
                  "pulsin-icon flex aspect-square shrink-0 items-center justify-center rounded-full",
                  "border border-blue-50/30 bg-blue-50/25 p-3 opacity-40",
                  "w-20 h-20"
                )}
              >
                {item.icon && <Image src={icons[item.icon]} alt="" className="" />}
              </div>
              {item.etape && <div className={`${proza_libre.className} flex md:hidden text-slate-200 w-[70%] text-center`}>{item.etape}</div>}
            </Link>
          )}
          {index !== slice.items.length - 1 && (
            <div
              className={clsx(
                "signal-line h-[1px] bg-slate-200 flex-grow",
                "opacity-40 transition-opacity duration-500"
              )}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
