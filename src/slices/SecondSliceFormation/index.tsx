import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SecondSliceFormation`.
 */
export type SecondSliceFormationProps =
  SliceComponentProps<Content.SecondSliceFormationSlice>;

/**
 * Component for "SecondSliceFormation" Slices.
 */
const SecondSliceFormation = ({
  slice,
}: SecondSliceFormationProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for second_slice_formation (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default SecondSliceFormation;
