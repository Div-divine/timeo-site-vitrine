import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import ButtonLink from "@/components/PageBtnLink";
import clsx from "clsx";
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
      <div className=" w-[90%] sm:w-[70%] lg:w-[50%] border-b-4 border-b-[#366b7a] m-auto pb-4 rounded-2xl px-4">
        <div className="font-bold text-lg sm:text-3xl text-center pb-4">
          <PrismicRichText field={slice.primary.titre} />
        </div>
        <div className="text-base sm:text-lg text-center">
          <PrismicRichText field={slice.primary.sous_titre} />
        </div>
      </div>
      <div className="w-[90%] text-sm sm:text-base md:w-[80%] mx-auto block md:grid grid-cols-4 gap-4 mt-8">
        <div className="col-span-3">
          <div className="flex flex-col-reverse md:grid grid-cols-4 gap-2">
            <div className="col-span-3 grid grid-cols-3 gap-1">
              {firstSeason.map((item, index) => (
                <div key={index}>
                  <Image src={item.img} alt={item.sous_titre} className="shadow-footerMenuShadow" />
                  <div className="text-center bg-gradient-to-b from-[#03171E] to-[#356A78] text-slate-200 py-2">
                    <h3 className="font-bold text-[#ffb910]">{item.titre}</h3>
                    <p>{item.sous_titre}</p>
                  </div>
                </div>
              ))}
            </div>
            <div><p className="font-bold">Saison 1: Les qualités du leader</p></div>
          </div>
          <div className="flex flex-col-reverse md:grid grid-cols-4 gap-2 mt-4">
            <div className="col-span-3 grid grid-cols-3 gap-1">
              {secondSeason.map((item, index) => (
                <div key={index}>
                  <Image src={item.img} alt={item.sous_titre} />
                  <div className="text-center bg-gradient-to-b from-[#03171E] to-[#356A78] text-slate-200 py-2">
                    <h3 className="font-bold text-[#ffb910]">{item.titre}</h3>
                    <p>{item.sous_titre}</p>
                  </div>
                </div>
              ))}
            </div>
            <div><p className="font-bold">Saison 2: Les défis à relever du leader</p></div>
          </div>
          <div className="flex flex-col-reverse md:grid grid-cols-4 gap-2 mt-4">
            <div className="col-span-3 grid grid-cols-3 gap-1">
              {thirdSeason.map((item, index) => (
                <div key={index}>
                <Image src={item.img} alt={item.sous_titre} />
                <div className="text-center bg-gradient-to-b from-[#03171E] to-[#356A78] text-slate-200 py-2">
                  <h3 className="font-bold text-[#ffb910]">{item.titre}</h3>
                  <p>{item.sous_titre}</p>
                </div>
              </div>
              ))}
            </div>
            <div><p className="font-bold">Saison 3: Le développement du leader</p></div>
          </div>
        </div>
        <div className="w-full mt-4 md:mt-0 md:col-span-1 flex flex-col justify-center items-center">
          <ButtonLink href="/catalogue" className="bg-[#366b7a] text-center">
            Découvrir tout le catalogue Timéo®
          </ButtonLink>
        </div>
      </div>

    </section>
  );
};

export default SecondSliceFormation;
