import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import AboutTimeo from "./AboutTimeo";
import AuthorSection from "./AuthorSection";
import CustomRichText from "@/components/StyleFirstWord";
import { Cormorant, Proza_Libre } from 'next/font/google';
import ButtonLink from "@/components/PageBtnLink";

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
 * Props for `PageAPropos`.
 */
export type PageAProposProps = SliceComponentProps<Content.PageAProposSlice>;

/**
 * Component for "PageAPropos" Slices.
 */
const PageAPropos = ({ slice }: PageAProposProps): JSX.Element => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`w-full h-auto bg-[#e4faee]`}
    >
      <div className="w-full h-auto bg-gradient-to-b from-[#03171E] to-[#356A78] py-10 md:pt-20">
        <div className={`${cormorant.className} ml-0 text-center md:text-start md:ml-[10%] lg:ml-[15%] text-slate-200 text-2xl md:text-3xl 
         lg:text-4xl text-balance font-bold`}>
          <CustomRichText field={slice.primary.titre} />
        </div>
        <div className={`${proza_libre.className}`}>
          <AboutTimeo content={slice.primary.description_timeo} />
        </div>

        {slice.primary.button_nous_contacter.map((item, index) => (
          <div key={index} className={`${cormorant.className} w-fit font-semibold shadow-2xl m-auto mt-3 sm:mt-4`}>
          <ButtonLink field={item.lien_vers_la_page_contacter} className={`bg-[#366b79] shadow-footerMenuShadow`}>
            {item.placeholder}
          </ButtonLink>
        </div>
        )
        )}

      </div>
      <AuthorSection content={slice.primary.creatrice_timeo} />
    </section>
  );
};

export default PageAPropos;
