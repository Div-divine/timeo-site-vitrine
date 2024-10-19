"use client";
import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

type Content = {
    content: RichTextField;
};

export default function AboutTimeo({ content }: Content) {

    // Initialize an array to hold oEmbed elements
    const oEmbedElements: JSX.Element[] = [];

    return (
        <div
            className={`parent-container text-slate-200 mx-3 md:mx-[15%] lg:mx-[21%] 
            mt-5 text-sm sm:text-base text-center sm:text-justify`}
        >
            <div>
                <PrismicRichText
                    field={content}
                    components={{
                        // Custom rendering for <p> tags
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
                            <li className="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold mb-2">
                                {children}
                            </li>
                        ),
                        // Custom rendering for oEmbed elements
                        embed: ({ node }) => {
                            // Assuming the node contains the necessary oEmbed information
                            if (node.oembed) {
                                oEmbedElements.push(
                                    <div className="oembed-container" key={node.oembed.embed_url}>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: node.oembed.html || "",
                                            }}
                                        />
                                    </div>
                                );
                            }
                            return null; // Return null if no oEmbed
                        },
                    }}
                />

            </div>

        </div>
    );
}
