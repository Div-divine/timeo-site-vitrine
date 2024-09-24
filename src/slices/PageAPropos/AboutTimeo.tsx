"use client";
import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { useState } from "react";

type Content = {
    content: RichTextField
}

export default function AboutTimeo({ content }: Content) {
    const [contentClicked, setContentClicked] = useState(false);
    return (
        <div className={`${contentClicked ? '' : 'multi-line-ellipsis'} text-slate-200 mx-3 md:mx-[15%] lg:mx-[21%] 
        mt-5 text-sm sm:text-base text-justify`} onClick={()=>setContentClicked(!contentClicked)}>
            <PrismicRichText field={content} />
        </div>
    )
}
