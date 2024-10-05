import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import CustomCarousel from "./Slider";
import { Cormorant, Proza_Libre } from 'next/font/google';

const cormorant = Cormorant({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400", "700"],
  variable: '--font-cormorant',
})

const proza_libre = Proza_Libre({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400", "700"],
  variable: '--font-proza_libre'
})


/**
 * Props for `EveilIndividuel`.
 */
export type EveilIndividuelProps =
  SliceComponentProps<Content.EveilIndividuelSlice>;

/**
 * Component for "EveilIndividuel" Slices.
 */
const EveilIndividuel = ({ slice }: EveilIndividuelProps): JSX.Element => {
  const carouselContent = slice.primary.image_et_description;
  const button = slice.primary.button_catalogue;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full h-auto px-4 md:px-4 pt-2 bg-[#e4faee]"
    >
      <div id="section-eveil"></div>
      <div className={`${cormorant.className} text-balance font-semibold text-4xl lg:text-5xl text-center text-[#113a2c]
          w-fit m-auto mt-10`}>
        <PrismicRichText field={slice.primary.titre} />
      </div>
      <div className={`${proza_libre.className} max-md:text-balance text-center  md:w-[60%] mx-auto
      my-5 `}>
        <PrismicRichText field={slice.primary.sous_titre} />
      </div>
      <CustomCarousel content={carouselContent} button_catalogue={button}/>
    </section>
  );
}; 

export default EveilIndividuel;
