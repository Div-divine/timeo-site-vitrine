import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import ButtonLink from "@/components/PageBtnLink";
import allegementImg from './allegement.jpg';
import authenticiteImg from './authenticite.jpg';
import chargeMentaleImg from './charge-mentale.jpg';
import entetementImg from './entetement.jpg';
import huliteImg from './humilite.jpg';
import nudgeManagementImg from './le-nudge-management.jpg';
import ouvertureImg from './ouverture-d-esprit.jpg';
import conformerImg from './se-conformer.jpg';
import niveauxEcouteImg from './trois-niveaux-d-ecoute.jpg';
import Image from "next/image";
import { Proza_Libre, Cormorant } from "next/font/google";



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

  const firstSeason = [
    {
      img: huliteImg,
      titre: "L’humilité",
      sous_titre: "Le phare de Magdesh"

    },
    {
      img: authenticiteImg,
      titre: "L'authenticité",
      sous_titre: "Le pot de Thulani"
    },
    {
      img: ouvertureImg,
      titre: "L'ouverture d'esprit",
      sous_titre: "Les six aveugles"
    },
  ];

  const secondSeason = [
    {
      img: chargeMentaleImg,
      titre: "La charge mentale",
      sous_titre: "Le petit caillou"
    },
    {
      img: conformerImg,
      titre: "Se conformer",
      sous_titre: "Le meunier, l’âne et son fils"
    },
    {
      img: entetementImg,
      titre: "L'entêtement",
      sous_titre: "L’âne et le tigre"
    },
  ];

  const thirdSeason = [
    {
      img: nudgeManagementImg,
      titre: "Le nudge management",
      sous_titre: "Le vent contre le soleil"
    },
    {
      img: niveauxEcouteImg,
      titre: "Les trois niveaux d'écoute",
      sous_titre: "La cave du silence"
    },
    {
      img: allegementImg,
      titre: "L'allègement",
      sous_titre: "Les chaussure de Marla"
    },
  ];


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#e4faee] py-10"
    >
      <div className=" w-[90%] sm:w-[70%] lg:w-[50%] m-auto pb-4 px-4">
        <div className={`${cormorant.className} font-bold text-lg sm:text-3xl text-center pb-4`}>
          <PrismicRichText field={slice.primary.titre} />
        </div>
        <div className={`${proza_libre.className} text-justify`}>
          <PrismicRichText field={slice.primary.sous_titre} />
        </div>
      </div>
      <div className="w-full mt-4 md:mt-0 flex flex-col justify-center items-center">
        <ButtonLink href="/catalogue" className={`${cormorant.className} bg-[#366b7a] text-center font-bold`}>
          Découvrir tout le catalogue Timéo®
        </ButtonLink>
      </div>
      <div className="w-[90%] text-sm sm:text-base md:w-[70%] lg:w-[60%] mx-auto mt-8">
        <div className="col-span-3">
          <div className="gap-2">
            <div><p className={`${cormorant.className} font-bold text-lg`}>Saison 1: Les qualités du leader</p></div>
            <div className="col-span-3 grid grid-cols-3 gap-1 mt-2">
              {firstSeason.map((item, index) => (
                <div key={index}>
                  <Image src={item.img} alt={item.sous_titre} className="shadow-footerMenuShadow" />
                  <div className="text-center bg-gradient-to-b from-[#03171E] to-[#356A78] text-slate-200 py-2">
                    <h3 className={`${cormorant.className} font-bold text-[#ffb910]`}>{item.titre}</h3>
                    <p className={`${proza_libre.className}  text-sm`}>{item.sous_titre}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="gap-2 mt-7">
            <div><p className={`${cormorant.className} font-bold text-lg`}>Saison 2: Les défis à relever du leader</p></div>
            <div className="col-span-3 grid grid-cols-3 gap-1 mt-2">
              {secondSeason.map((item, index) => (
                <div key={index}>
                  <Image src={item.img} alt={item.sous_titre} />
                  <div className="text-center bg-gradient-to-b from-[#03171E] to-[#356A78] text-slate-200 py-2">
                    <h3 className={`${cormorant.className} font-bold text-[#ffb910]`}>{item.titre}</h3>
                    <p className={`${proza_libre.className} text-sm`}>{item.sous_titre}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="gap-2 my-7">
            <div><p className={`${cormorant.className} font-bold text-lg`}>Saison 3: Le développement du leader</p></div>
            <div className="col-span-3 grid grid-cols-3 gap-1 mt-2">
              {thirdSeason.map((item, index) => (
                <div key={index}>
                  <Image src={item.img} alt={item.sous_titre} />
                  <div className="text-center bg-gradient-to-b from-[#03171E] to-[#356A78] text-slate-200 py-2">
                    <h3 className={`${cormorant.className} font-bold text-[#ffb910]`}>{item.titre}</h3>
                    <p className={`${proza_libre.className}  text-sm`}>{item.sous_titre}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full mt-4 md:mt-0 flex flex-col justify-center items-center">
          <ButtonLink href="/catalogue" className={`${cormorant.className} bg-[#366b7a] text-center font-bold`}>
            Découvrir tout le catalogue Timéo®
          </ButtonLink>
        </div>
      </div>

    </section>
  );
};

export default SecondSliceFormation;
