import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import ButtonLink from "@/components/PageBtnLink";

/**
 * Props for `CatalogueSecondSlice`.
 */
export type CatalogueSecondSliceProps =
  SliceComponentProps<Content.CatalogueSecondSliceSlice>;

/**
 * Component for "CatalogueSecondSlice" Slices.
 */
const CatalogueSecondSlice = ({
  slice,
}: CatalogueSecondSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#e4faee] py-4"
    >
      <div className="w-full h-auto ">
        <div className="font-bold text-lg sm:text-2xl text-center py-4 mx-3 sm:mx-0">
          <PrismicRichText field={slice.primary.titre} />
        </div>
        <div className="bg-white w-[85%] sm:[60%] md:w-[40%] m-auto shadow-footerMenuShadow">
          <div className="sm:text-xl font-bold text-center bg-[#366b79] text-slate-200 py-4">
            <PrismicRichText
              field={slice.primary.titre_prix_par_coffret}
            />
          </div>
          <ul className="list-none py-4 px-2">
            {slice.primary.detail_de_contenus_de_coffret.map(
              (item, index) => (
                <li key={index} className="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-green-500
                before:font-bold text-xl">
                  {item.detail}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      {slice.primary.button_demander_un_devis.map((item, index) => (
            <div key={index} className="w-fit font-semibold shadow-2xl m-auto mt-3 sm:mt-4">
              <ButtonLink field={item.lien_vers_la_page} className="bg-[#366b79] shadow-footerMenuShadow">
                {item.placeholder}
              </ButtonLink>
            </div>
          ))}
    </section>
  );
};

export default CatalogueSecondSlice;
