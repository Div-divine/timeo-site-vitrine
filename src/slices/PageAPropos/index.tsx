import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import AboutTimeo from "./AboutTimeo";

/**
 * Props for `PageAPropos`.
 */
export type PageAProposProps = SliceComponentProps<Content.PageAProposSlice>;

/**
 * Component for "PageAPropos" Slices.
 */
const PageAPropos = ({ slice }: PageAProposProps): JSX.Element => {

  const titleText = slice.primary.titre;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full h-auto bg-gradient-to-b from-[#03171E] to-[#356A78] pt-10 md:pt-20"
    >
      <div className="ml-0 text-center md:text-start md:ml-[10%] lg:ml-[15%] text-slate-200 text-2xl md:text-3xl 
      lg:text-4xl text-balance font-bold">
        <PrismicRichText field={slice.primary.titre} />
      </div>
      <AboutTimeo content={slice.primary.description_timeo}/>
    </section>
  );
};

export default PageAPropos;