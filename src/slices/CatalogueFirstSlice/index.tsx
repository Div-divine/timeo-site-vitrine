import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import ButtonLink from "@/components/PageBtnLink";
import clsx from "clsx";
import CustomRichText from "@/components/StyleFirstWord";

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
      className="bg-gradient-to-b from-[#03171E] to-[#356A78] py-10"
    >
      <div className="h-auto w-full bg-cover bg-center flex flex-col 
      justify-center pb-4 sm:pb-2 lg:pb-0 md:pt-20">
        {/* Content */}
        <div className="ml-0 text-center md:text-start md:ml-[10%] lg:ml-[15%] text-slate-200 text-2xl md:text-3xl 
         lg:text-4xl text-balance font-bold">
          <CustomRichText field={slice.primary.titre} />
        </div>
        <div className="h-auto text-white">
          <div className="text-slate-200 mx-3 md:mx-[15%] lg:mx-[21%] mt-5 text-sm sm:text-lg lg:text-xl text-justify">
            {slice.primary.description}
          </div>
          <div className="w-[80%] m-auto mt-8 block sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {slice.primary.les_offres_timeo.map((item, index) => (
              <div key={index} className={clsx("px-2 pt-3 pb-1 bg-blue-200/10 rounded-2xl",
                index != 0 ? 'mt-2 sm:mt-0' : ''
              )}>
                <div className="text-[#60c1c8] text-xl font-bold text-center"><PrismicRichText field={item.titre} /></div>
                <div className="text-center text-slate-200 mt-2 text-sm sm:text-base">{item.description}</div>
              </div>
            )
            )}
          </div>
          {slice.primary.button_nous_contacter.map((item, index) => (
            <div key={index} className="w-fit font-semibold shadow-2xl m-auto mt-3 sm:mt-4">
              <ButtonLink field={item.lien_vers_la_page} className="bg-blue-200/10
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
