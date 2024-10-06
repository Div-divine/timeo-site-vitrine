import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import ButtonLink from "@/components/PageBtnLink";
import clsx from "clsx";
import CustomRichText from "@/components/StyleFirstWord";
import { Proza_Libre, Cormorant  } from "next/font/google";



const proza_libre = Proza_Libre({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400", "700"],
  variable: '--font-proza_libre'
})

const cormorant = Cormorant({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400", "700"],
  variable: '--font-cormorant',
})

/**
 * Props for `CatalogueFirstSlice`.
 */
export type CatalogueFirstSliceProps =
  SliceComponentProps<Content.CatalogueFirstSliceSlice>;

/**
 * Component for "CatalogueFirstSlice" Slices.
 */
const CatalogueFirstSlice = ({
  slice,
}: CatalogueFirstSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className=" py-10 bg-[#193a45]"
    >
      <div className="h-auto w-full bg-cover bg-center flex flex-col 
      justify-center pb-4 sm:pb-2 lg:pb-0 md:pt-20">
        {/* Content */}
        <div className={`${cormorant.className} ml-0 text-center text-slate-200 text-2xl md:text-3xl 
         lg:text-4xl text-balance font-bold`}>
          <CustomRichText field={slice.primary.titre} />
        </div>
        <div className="h-auto text-white">
          <div className={`${proza_libre.className}
            text-slate-200 mx-3 md:mx-[15%] lg:mx-[21%] mt-5 text-sm sm:text-base text-justify`}>
            {slice.primary.description}
          </div>
          <div className="w-[80%] m-auto mt-8 block sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {slice.primary.les_offres_timeo.map((item, index) => (
              <div key={index} className={clsx("px-2 pt-3 pb-1 bg-blue-200/10 rounded-2xl",
                index != 0 ? 'mt-2 sm:mt-0' : ''
              )}>
                <div className={`${cormorant.className} text-[#60c1c8] text-xl font-bold text-center`}><PrismicRichText field={item.titre} /></div>
                <div className={`${proza_libre.className} text-center text-slate-200 mt-2 text-sm sm:text-base` }>{item.description}</div>
              </div>
            )
            )}
          </div>
          {slice.primary.button_nous_contacter.map((item, index) => (
            <div key={index} className={`${cormorant.className} w-fit font-semibold shadow-2xl m-auto mt-3 sm:mt-4`}>
              <ButtonLink field={item.lien_vers_la_page} className="bg-[#366b79]
              shadow-footerMenuShadow">
                {item.placeholder}
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogueFirstSlice;
