"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import timeoLogo from "./LogoTransparent.png";
import eveilImg from "./eveil.png";
import developImg from "./aura.png";
import transImg from "./tranfo.png";
import Image from "next/image";
import clsx from "clsx";
import { Content } from "@prismicio/client";

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
            repeat: -1,
            defaults: { ease: "power2.inOut" },
        });

        tl.to(".pulsing-logo", {
            keyframes: [
                {
                    filter: "brightness(2)",
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.in",
                },
                {
                    filter: "brightness(1)",
                    opacity: 0.7,
                    duration: 0.9,
                },
            ],
        });

        tl.to(
            ".signal-line",
            {
                keyframes: [
                    { backgroundPosition: "0% 0%" },
                    {
                        backgroundPosition: "100% 100%",
                        stagger: {
                            from: "center",
                            each: 0.3,
                            duration: 1,
                        },
                    },
                ],
            },
            "-=1.4"
        );

        tl.to(
            ".pulsin-icon",
            {
                keyframes: [
                    {
                        opacity: 1,
                        stagger: {
                            from: "center",
                            each: 0.3,
                        },
                        duration: 1,
                    },
                    {
                        opacity: 0.4,
                        stagger: {
                            from: "center",
                            each: 0.3,
                        },
                        duration: 1,
                    },
                ],
            },
            "-=2"
        );
    }, { scope: container });

    return (
        <div
            ref={container}
            className="flex flex-col items-center md:flex-row justify-center"
        >
            {slice.items.map((item, index) => (
                <React.Fragment key={index}>
                        <div
                            className={clsx(
                                "pulsin-icon flex aspect-square shrink-0 items-center justify-center rounded-full",
                                "border border-blue-50/30 bg-blue-50/25 p-3 opacity-40",
                                index === 0 ? "w-[120px] h-[120px]" : "w-20 h-20"
                            )}
                        >
                            {item.icon && <Image src={icons[item.icon]} alt="" className="" />}
                        </div>
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
