import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import AudioPlayer from "./DisplayAudio";
import Image from "next/image";
import earset from '@/app/earphone-removebg.png';
import { Cormorant, Proza_Libre } from 'next/font/google';
import VideoPlayer from "./VideoLeader";

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
 * Props for `Developpement`.
 */
export type DeveloppementProps =
  SliceComponentProps<Content.DeveloppementSlice>;

/**
 * Component for "Developpement" Slices.
 */
const Developpement = ({ slice }: DeveloppementProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full h-auto bg-[#e4faee] -mt-10 pb-4"
    >
      <div className=" w-[95%] md:w-[80%] lg:w-[60%] m-auto">
        <div id="section-developpement"></div>
        <div className={`${cormorant.className} font-semibold text-4xl lg:text-5xl text-center text-[#113a2c]
          w-fit m-auto`}>
          <PrismicRichText field={slice.primary.etape} />
        </div>
        <div className="flex justify-between w-full mt-8">
          <div className="w-full ml-0 sm:ml-[10%]">
            <div className={`${cormorant.className} font-semibold text-3xl lg:text-4xl text-center text-[#113a2c]
          w-fit m-auto`}>
              <PrismicRichText field={slice.primary.sous_titre} />
            </div>
            <div className={`${proza_libre.className} text-justify w-[90%]
           mt-4 m-auto`}>
              <PrismicRichText field={slice.primary.description} />
            </div>
          </div>
          <div className="w-fit hidden sm:block">
            <Image src={earset} alt="" quality={100} />
          </div>
        </div>
        <AudioPlayer audioLinkField={slice.primary.audio_coaching} taleImgHandler={slice.primary.image_conte}
          pauseIcon={slice.primary.icon_audio_pause} playIcon={slice.primary.icon_audio_play}
          taleValue={slice.primary.valeur} taleTitle={slice.primary.titre_de_conte} />
      </div>
      <div className="w-[90%] lg:w-[50%] m-auto mt-10 mb-6">
        <div className={`${cormorant.className} font-semibold text-3xl lg:text-4xl text-center text-[#113a2c]
          w-fit m-auto`}>
          <PrismicRichText field={slice.primary.sous_titre_video} />
        </div>
        <p className={`${proza_libre.className} text-justify mt-4`}>
          {slice.primary.catch_phrase_video_leader}
        </p>
      </div>
      <div className="w-full lg:w-[70%] m-auto flex flex-col lg:flex-row">
        <VideoPlayer
          htmlContent={slice.primary.video_du_leader.html}
        />
      </div>
      <div className="w-full lg:w-[70%] mx-auto mt-10">
        <VideoPlayer htmlContent={slice.primary.video_des_leaders.html} />
      </div>
    </section >
  );
};

export default Developpement;
