"use client";
import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { useState } from "react";

type Content = {
    content: RichTextField;
};

export default function AboutTimeo({ content }: Content) {
    const [contentClicked, setContentClicked] = useState(false);

    return (
        <div
            className={`text-slate-200 mx-3 md:mx-[15%] lg:mx-[21%] 
        mt-5 text-sm sm:text-base text-center sm:text-justify`}
        >
            <PrismicRichText
                field={content}
                components={{
                    // Custom rendering for <p> tags, adding <br> after each paragraph
                    paragraph: ({ children }) => (
                        <>
                            <p>{children}</p>
                            <br />
                        </>
                    ),
                    // Custom rendering for <ul> (unordered list)
                    list: ({ children }) => (
                        <ul className="list-none pl-5">{children}</ul>
                    ),
                    // Custom rendering for <ol> (ordered list)
                    oList: ({ children }) => (
                        <ol className="list-decimal pl-5">{children}</ol>
                    ),
                    // Custom rendering for <li> (list items)
                    listItem: ({ children }) => (
                        <li className="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-green-500
                before:font-bold mb-2">{children}</li>
                    ),
                }}
            />
        </div>
    );
}
