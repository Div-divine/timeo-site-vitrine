import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import CustomCarousel from "./Slider";
import { Arima, Amaranth } from 'next/font/google';

const arima = Arima({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-arima',
})

const amaranth = Amaranth({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400", "700"],
  variable: '--font-amaranth'
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
      className="w-full h-auto bg-[#e4faee] px-4 md:px-4 pt-2 "
    >
      <div className={`text-balance font-medium text-4xl lg:text-5xl text-center text-[#113a2c]
          w-fit m-auto mt-10`}>
        <PrismicRichText field={slice.primary.titre} />
      </div>
      <div className={`${amaranth.className} max-md:text-balance text-center font-light md:text-lg max-w-xl md:w-full m-auto
      mt-3`}>
        <PrismicRichText field={slice.primary.sous_titre} />
      </div>
      <CustomCarousel content={carouselContent} button_catalogue={button}/>
    </section>
  );
}; 

export default EveilIndividuel;
