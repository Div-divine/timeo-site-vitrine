import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import CatalogueSection from "./DisplayCatalogue";
import ButtonLink from "@/components/PageBtnLink";

/**
 * Props for `CatalogueThirdSlice`.
 */
export type CatalogueThirdSliceProps =
  SliceComponentProps<Content.CatalogueThirdSliceSlice>;

/**
 * Component for "CatalogueThirdSlice" Slices.
 */
const CatalogueThirdSlice = ({
  slice,
}: CatalogueThirdSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#e4faee] pt-4 md:pt-8"
    >
      <CatalogueSection slice={slice}/>

    </section>
  );
};

export default CatalogueThirdSlice;
