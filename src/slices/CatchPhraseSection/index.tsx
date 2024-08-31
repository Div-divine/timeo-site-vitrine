import SectionWrap from "@/components/SectionWrap";
import { Content, isFilled } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { Arima, Amaranth } from 'next/font/google';
import { PrismicNextImage } from "@prismicio/next";
import ButtonLink from "@/components/PageBtnLink";

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
      className="bg-gradient-to-b from-[#03171E] to-[#356A78]"
    >
      <SectionWrap className="py-0 md:py-0 lg:py-0 pb-0 md:pb-0 lg:pb-0">
        {isFilled.richText(slice.primary.titre) &&
          <h1 className={`${arima.className} text-balance font-medium text-4xl lg:text-5xl text-center text-slate-200 
          w-full mt-10 md:mt-20 lg:mt-24`}>
            <PrismicText field={slice.primary.titre} />
          </h1>}
        {isFilled.richText(slice.primary.sous_titre) &&
          <h2 className={`${amaranth.className} text-center font-light md:text-lg bg-[#b2efdb] bg-clip-text text-transparent max-w-xl md:max-w-2xl
          m-auto`}>
            <PrismicText field={slice.primary.sous_titre} />
          </h2>
        }
        <div className="sm:grid sm:grid-cols-3 sm:gap-5 w-[70%] h-fit sm:w-[100%] md:w-[80%] lg:w-[70%] m-auto mt-5 
        max-sm:flex max-sm:flex-col">
          <div className="flex flex-wrap justify-center items-center max-sm:order-2">
            <PrismicNextImage field={slice.primary.photo_mobile} quality={100} />
          </div>
          <div className="mt-5 max-sm:mt-0 flex flex-wrap flex-col justify-between max-sm:order-1 
          max-sm:justify-center max-sm:items-center">
            {slice.primary.button_a_propos.map((item, index) => {
              return <div key={index} className={`${arima.className} w-fit font-semibold shadow-2xl`}>
                <ButtonLink field={item.lien} className={`${arima.className} bg-blue-200/10`}>
                  {item.label}
                </ButtonLink>
              </div>
            })}
            <div className="flex flex-wrap justify-between pb-5  max-sm:mt-6 max-sm:-mr-10">
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
                      <div className={`${amaranth.className} absolute bottom-0 right-0 transform translate-x-3/4 
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
          <div className={`${amaranth.className} text-balance flex flex-wrap flex-col justify-end pb-8 -ml-4
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
