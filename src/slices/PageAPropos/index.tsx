import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import AboutTimeo from "./AboutTimeo";
import AuthorSection from "./AuthorSection";
import CustomRichText from "@/components/StyleFirstWord";
import { Cormorant, Proza_Libre } from 'next/font/google';
import ButtonLink from "@/components/PageBtnLink";
import VideoTemoignage from "./VideosTemoignage";

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

  const transformedVideos = slice.primary.videos_de_temoignage_de_contes.map(item => ({
    video: {
      html: item.video.html || '', // Ensure html is a string
    },
  }));

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`w-full h-auto bg-[#e4faee]`}
    >
      <div className="w-full h-auto py-10 md:pt-20 bg-[#193a45]">
        <div className={`${cormorant.className} ml-0 text-center md:text-start md:ml-[10%] lg:ml-[15%] text-slate-200 text-2xl md:text-3xl 
         lg:text-4xl text-balance font-bold`}>
          <CustomRichText field={slice.primary.titre} />
        </div>
        <div className={`${proza_libre.className}`}>
          <AboutTimeo content={slice.primary.a_propos_de_timeo} />
        </div>
        <VideoTemoignage videos={transformedVideos} />
        <div className={`${proza_libre.className}`}>
          <AboutTimeo content={slice.primary.les_atouts_timeo} />
        </div>

        {slice.primary.button_nous_contacter.map((item, index) => (
          <div key={index} className={`${cormorant.className} w-fit font-semibold shadow-2xl m-auto mt-3 sm:mt-4`}>
            {item.lien_vers_la_page_contacter &&
              <ButtonLink field={item.lien_vers_la_page_contacter} className={`bg-[#366b79] shadow-footerMenuShadow`}>
                {item.placeholder}
              </ButtonLink>}
          </div>
        )
        )}

      </div>
      <AuthorSection content={slice.primary.creatrice_timeo} />
      <div className="py-3 sm:py-4">
        {slice.primary.button_nous_contacter.map((item, index) => (
          <div key={index} className={`${cormorant.className} w-fit font-semibold shadow-2xl mx-auto`}>
            {item.lien_vers_la_page_contacter &&
              <ButtonLink field={item.lien_vers_la_page_contacter} className={`bg-[#366b79] shadow-footerMenuShadow`}>
                {item.placeholder}
              </ButtonLink>}
          </div>
        )
        )}
      </div>
    </section>
  );
};

export default PageAPropos;
