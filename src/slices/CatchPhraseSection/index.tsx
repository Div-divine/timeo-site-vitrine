import SectionWrap from "@/components/SectionWrap";
import { Content, isFilled } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { Proza_Libre, Cormorant } from 'next/font/google';
import { PrismicNextImage } from "@prismicio/next";
import ButtonLink from "@/components/PageBtnLink";
import Link from "next/link";
import { asLink } from "@prismicio/client";

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
 * Props for `CatchPhraseSection`.
 */
export type CatchPhraseSectionProps =
  SliceComponentProps<Content.CatchPhraseSectionSlice>;

/**
 * Component for "CatchPhraseSection" Slices.
 */
const CatchPhraseSection = ({
  slice,
}: CatchPhraseSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#193a45]"
    >
      <SectionWrap className="py-0 md:py-0 lg:py-0 pb-0 md:pb-0 lg:pb-0">
        {isFilled.richText(slice.primary.titre) &&
          <h1 className={`${cormorant.className} text-balance font-semibold text-4xl lg:text-5xl text-center text-slate-200 
          w-full mt-10 `}>
            <PrismicText field={slice.primary.titre} />
          </h1>}
        {isFilled.richText(slice.primary.sous_titre) &&
          <h2 className={`${proza_libre.className} text-center font-light  bg-[#b2efdb] bg-clip-text text-transparent max-w-xl md:max-w-2xl
          m-auto my-4`}>
            <PrismicText field={slice.primary.sous_titre} />
          </h2>
        }
        <div className="sm:grid sm:grid-cols-3 sm:gap-5 w-[70%] h-fit sm:w-[100%] md:w-[80%] lg:w-[70%] m-auto mt-5 
        max-sm:flex max-sm:flex-col">
          <div className="flex flex-wrap justify-center items-center max-sm:order-2">
            <PrismicNextImage field={slice.primary.photo_mobile} quality={100} />
          </div>
          <div className="my-5 sm:my-0 flex flex-wrap flex-col justify-between max-sm:order-1 
          max-sm:justify-center max-sm:items-center">
            {slice.primary.button_a_propos.map((item, index) => {
               const href = asLink(item.lien) || "#";
              return <div key={index} className={`${cormorant.className} w-fit font-semibold shadow-2xl mb-5 sm:mb-0`}>
                <Link className="md:text-xl text-center h-fit w-fit rounded-2xl bg-[#a1daca] text-[#082a34] p-4" href={href}>{item.label}</Link>
              </div>
            })}
            <div className="flex flex-wrap justify-between pb-5 max-sm:mt-6 max-sm:-mr-10 ">
              {slice.primary.section_photo_personnes_ayant_teste.map((item, index) => (
                <div
                  key={index}
                  className={`w-[20%] lg:w-[19%] relative`}
                  style={{
                    zIndex: index,
                    position: 'relative', // Ensure proper positioning
                  }}
                >
                  <div
                    className={`relative`}
                    style={{
                      left: index !== 0 ? `-${index * 26}px` : '0px', // Adjust overlap
                    }}
                  >
                    <PrismicNextImage field={item.photo} className="rounded-full" />
                    {/* Conditionally render div only for the last item */}
                    {index === slice.primary.section_photo_personnes_ayant_teste.length - 1 && (
                      <div className={`${proza_libre.className} absolute bottom-0 right-0 transform translate-x-3/4 
                      translate-y-1/2 rounded-full bg-[#072A35] px-2 py-3 flex flex-col justify-center items-center 
                      mb-5 text-slate-300 font-medium`}>
                        {item.numbre_de_personnes_ayant_aimees}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`${proza_libre.className} text-balance flex flex-wrap flex-col justify-end pb-8 -ml-4
             text-slate-300 max-sm:hidden`}>
            <PrismicText
              field={slice.primary.phrase_des_personnes_qui_ont_testes}
            />
          </div>
        </div>
      </SectionWrap>
    </section>
  );
};

export default CatchPhraseSection;
