import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import ButtonLink from "@/components/PageBtnLink";

/**
 * Props for `Transformation`.
 */
export type TransformationProps =
  SliceComponentProps<Content.TransformationSlice>;

/**
 * Component for "Transformation" Slices.
 */
const Transformation = ({ slice }: TransformationProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#051920] w-full h-auto py-14 mt-5 md:mt-10 lg:mt-12"
    >
      <div className="arima-font text-balance font-medium text-4xl lg:text-5xl text-center bg-[#b2efdb] bg-clip-text text-transparent
          w-fit m-auto pb-1">
        <PrismicRichText field={slice.primary.etape} />
      </div>
      <div>
        <p className=" amaranth-font text-center font-light md:text-lg text-slate-200 max-w-xl md:max-w-2xl
          m-auto mt-3 md:mt-4">{slice.primary.description}</p>
      </div>
      <div className="flex flex-col justify-center items-center mt-3 md:mt-5">
        <>
          {slice.primary.button_transformation.map((item, index) => (
            <ButtonLink field={item.lien_vers_la_page} key={index} className="arima-font bg-blue-200/10">
              {item.placeholder_button}
            </ButtonLink>
          ))}
        </>
      </div>
    </section>
  );
};

export default Transformation;
