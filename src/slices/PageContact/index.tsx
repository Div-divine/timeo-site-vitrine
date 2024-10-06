import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import SectionWrap from "@/components/SectionWrap";
import { Cormorant, Proza_Libre } from 'next/font/google';
import clsx from "clsx";
import ButtonLink from "@/components/PageBtnLink";

const cormorant = Cormorant({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
})

const proza_libre = Proza_Libre({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400", "700"],
  variable: '--font-proza_libre'
})
/**
 * Props for `PageContact`.
 */
export type PageContactProps = SliceComponentProps<Content.PageContactSlice>;

/**
 * Component for "PageContact" Slices.
 */
const PageContact = ({ slice }: PageContactProps): JSX.Element => {
  return (
    <SectionWrap
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className=" bg-[#193a45]"
    >
      <div className="mt-20">
        <h2 className={`${cormorant.className} text-slate-200 text-3xl md:text-4xl lg:text-5xl text-balance`}>
          <PrismicText field={slice.primary.titre_page_contact} />
        </h2>
        <form action="" className="mt-7">
          <div className={`${proza_libre.className} text-slate-400 text-lg`}>
            <label htmlFor="pseudo-field">{slice.primary.label_pseudo} (facultatif)</label>
          </div>
          <div>
            <input type="text" name="pseudo-field" id="pseudo-field" placeholder={`${slice.primary.pseudo_utilisateur}`}
              className="w-full sm:w-[600px] md:w-[700px] h-10 rounded-2xl mt-1 px-3 md:text-xl" />
          </div>
          <div className="mt-7">
            <div className={`${proza_libre.className} text-slate-400 text-lg`}>
              <label htmlFor="email-field">{slice.primary.label_adresse_mail}</label>
            </div>
            <div className="mt-1">
              <input type="email" name="email-field" id="email-field" placeholder={`${slice.primary.adresse_mail}`}
                className="w-full sm:w-[600px] md:w-[700px] h-10 rounded-2xl px-3 md:text-xl" />
            </div>
          </div>
          <div className="mt-7">
            <div className={`${proza_libre.className} text-slate-400 text-lg`}>
            <label htmlFor="text-area">{slice.primary.label_message}</label>
            </div>
            <div className="mt-1">
              <textarea name="text-area" id="text-area" placeholder={`${slice.primary.champ_de_message}`}
                className="w-full sm:w-[600px] md:w-[700px] h-40 rounded-2xl p-3 md:text-xl" />
            </div>
          </div>
          <div className={clsx(`${proza_libre.className} text-slate-300 md:text-xl bg-[#366b79] w-fit p-4
            mx-auto flex flex-wrap flex-col justify-center items-center rounded-full border border-blue-100/20
            py-3 mt-5 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 
            after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 
            after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40
          hover:text-yellow-50 after:hover:bg-opacity-15 focus:ring-2`)}>
            <input type="submit" value={`${slice.primary.button_envoyer}`} />
          </div>
        </form>
      </div>
    </SectionWrap>
  );
};

export default PageContact;
