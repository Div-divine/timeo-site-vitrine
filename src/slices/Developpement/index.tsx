import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import AudioPlayer from "./DisplayAudio";
import Image from "next/image";
import earset from '@/app/earphone-removebg.png';
import { Arima, Amaranth } from 'next/font/google';
import VideoPlayer from "./VideoLeader";

const arima = Arima({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-arima',
})

const amaranth = Amaranth({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400", "700"],
  variable: '--font-amaranth'
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
      className="w-full h-auto bg-[#e4faee] px-4 md:px-4 -mt-14 pb-5 md:pb-10 lg:pb-12"
    >
      <div className=" w-[95%] md:w-[80%] lg:w-[60%] m-auto">
        <div className="flex justify-between">
          <div className="w-full ml-0 sm:ml-[10%]">
            <div className={`${arima.className} text-balance font-medium text-4xl lg:text-5xl text-center text-[#113a2c]
          w-fit m-auto`}>
              <PrismicRichText field={slice.primary.etape} />
            </div>
            <div className={`${amaranth.className} max-md:text-balance text-center font-light md:text-lg max-w-xl md:w-full m-auto
           mt-3`}>
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
      <div className="w-full lg:w-[60%] m-auto flex flex-col lg:flex-row mt-10">
        <VideoPlayer
          htmlContent={slice.primary.video_du_leader.html}
          className="order-2 lg:order-1 w-full lg:w-[70%] m-auto"
        />
        <div className="order-1 lg:order-2 w-[90%] lg:w-[30%] m-auto lg:ml-4 ">
          <p className={`${amaranth.className} max-md:text-balance text-center font-light md:text-lg`}>
            {slice.primary.catch_phrase_video_leader}
          </p>
        </div>
      </div>
    </section >
  );
};

export default Developpement;
