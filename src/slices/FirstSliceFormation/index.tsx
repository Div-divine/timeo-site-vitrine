import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import ButtonLink from "@/components/PageBtnLink";
import innovationImg from './innovation.png';
import group from './group-unity.png';
import self_disvovery from './self-discovery.png';
import trophy from './trophy.png';
import Image from "next/image";
import clsx from "clsx";
import { Amaranth } from "next/font/google";



const amaranth = Amaranth({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400", "700"],
  variable: '--font-amaranth'
})



/**
 * Props for `FirstSliceFormation`.
 */
export type FirstSliceFormationProps =
  SliceComponentProps<Content.FirstSliceFormationSlice>;

/**
 * Component for "FirstSliceFormation" Slices.
 */
const FirstSliceFormation = ({
  slice,
}: FirstSliceFormationProps): JSX.Element => {

  const Img = [
    innovationImg,
    group,
    trophy,
    self_disvovery,
  ];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#e4faee]"
    >
      <div className="relative h-[500px] w-full bg-cover bg-center flex flex-col justify-center" style={{
        backgroundImage: `url(${slice.primary.image_de_fond.url})`,
      }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80 bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 h-auto text-slate-300 w-[90%] sm:w-[60%] m-auto">
          <div className="text-lg sm:text-3xl text-center font-bold pb-4">
            <PrismicRichText field={slice.primary.titre} />
          </div>
          <div className={`sm:text-xl text-justify text-slate-300`}>
            <PrismicRichText field={slice.primary.sous_titre} />
          </div>
          {slice.primary.button_nous_contacter.map((item, index) => (
            <div key={index} className="w-fit font-semibold shadow-2xl m-auto mt-3 sm:mt-4">
              <ButtonLink field={item.lien_vers_la_page_contacter} className="bg-[#366b7a]">
                {item.text_button}
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>

      {/* Grid of items positioned 30% on top of the previous div */}
      <div className="relative -mt-[15%] sm:-mt-[5%] pb-[5%] z-20 block sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-2 m-auto w-[80%]">
        {slice.primary.description_outils_timeo.map((item, index) => (
          <div key={index} className={clsx(index == 2 || index == 3 ? 'my-0 sm:my-10 lg:my-0' : '')}>
            <div className="w-[30%] m-auto rounded-t-full bg-[#366b7a] px-[8%] pt-[2%] border-t-2 border-slate-200">
              <Image src={Img[index]} alt={`Image for ${item.titre}`} className="w-full" />
            </div>
            <div className="bg-[#366b7a] text-black/100 h-full flex flex-col justify-center items-center px-2 rounded-2xl
            shadow-footerMenuShadow border-t-2 border-slate-200">
              <div className="font-bold text-center max-sm:mt-4">
                <PrismicRichText field={item.titre} />
              </div>
              <div className="mt-2">
                <p className="text-center text-slate-200">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>


    </section>
  );
};

export default FirstSliceFormation;
