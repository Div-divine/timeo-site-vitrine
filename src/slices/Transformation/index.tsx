import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import ButtonLink from "@/components/PageBtnLink";
import { Proza_Libre, Cormorant } from "next/font/google";
import VideoPlayer from "../Developpement/VideoLeader";

const proza_libre = Proza_Libre({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400", "700"],
  variable: '--font-proza_libre',
});

const cormorant = Cormorant({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400", "700"],
  variable: '--font-cormorant',
});


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
      className="bg-[#051920] w-full h-auto py-14"
    >
      <div className={`${cormorant.className} text-balance font-semibold text-4xl lg:text-5xl text-center bg-[#b2efdb] bg-clip-text text-transparent
          w-fit m-auto pb-1`}>
        <PrismicRichText field={slice.primary.etape} />
      </div>
      <div id="section-transformation"></div>
      <div className="w-fit mx-auto">
        <p className={`${proza_libre.className} text-center text-slate-200 max-w-xl md:max-w-2xl
          m-auto mt-3 md:mt-4`}>{slice.primary.description}</p>
      </div>
      <div className="flex flex-col justify-center items-center mt-3 md:mt-5">
        {slice.primary.button_nous_contacter.map((item, index) => (
          <ButtonLink field={item.lien_vers_la_page} key={index} className={`${cormorant.className} bg-blue-200/10`}>
            {item.placeholder}
          </ButtonLink>
        ))}
      </div>
      <div className="w-[70%] mx-auto md:grid grid-cols-2 gap-4 my-4">
        <VideoPlayer htmlContent={slice.primary.video_explicative.html} />
        <div className="w-fit flex flex-col justify-center items-center mt-5 md:mt-0">
          <p className={`${proza_libre.className} text-slate-200`}><PrismicRichText
            field={slice.primary.text_temoignage_decathlon}
          /></p>
          <div className="flex flex-col justify-center items-center mt-3 md:mt-5">
        {slice.primary.button_transformation.map((item, index) => (
          <ButtonLink field={item.lien_vers_la_page} key={index} className={`${cormorant.className} bg-blue-200/10`}>
            {item.placeholder_button}
          </ButtonLink>
        ))}
      </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
