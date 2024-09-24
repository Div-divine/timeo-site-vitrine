"use client";
import React, { useRef, useEffect, useState } from 'react';
import { PrismicNextImage } from '@prismicio/next';
import { BsFillPlayCircleFill, BsFillPlayBtnFill, BsFillPauseCircleFill, BsFillPauseBtnFill, BsFillHeartFill } from 'react-icons/bs';
import { asLink, KeyTextField, LinkToMediaField, RichTextField } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';
import { Cormorant, Proza_Libre } from 'next/font/google';

const cormorant = Cormorant({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-cormorant',
});

const proza_libre = Proza_Libre({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-proza_libre',
});

type IconKey = 'icon_play_circle' | 'icon_play_square' | 'icon_pause_circle' | 'icon_pause_square';

type AudioPlayerProps = {
  audioLinkField: LinkToMediaField;
  taleImgHandler: React.ComponentProps<typeof PrismicNextImage>['field'];
  playIcon: IconKey;
  pauseIcon: IconKey;
  taleValue: RichTextField;
  taleTitle: KeyTextField;
};

export default function AudioPlayer({
  audioLinkField,
  taleImgHandler,
  playIcon,
  pauseIcon,
  taleValue,
  taleTitle,
}: AudioPlayerProps) {
  const icons: Record<IconKey, React.ReactNode> = {
    icon_play_circle: <BsFillPlayCircleFill />,
    icon_play_square: <BsFillPlayBtnFill />,
    icon_pause_circle: <BsFillPauseCircleFill />,
    icon_pause_square: <BsFillPauseBtnFill />,
  };

  const audioFileUrl = asLink(audioLinkField);

  const [progressBar, setProgressBar] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [totalDuration, setTotalDuration] = useState('0:00');
  const [playAudio, setPlayAudio] = useState(false);

  const songRef = useRef<HTMLAudioElement | null>(null);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  useEffect(() => {
    const song = songRef.current;

    const updateDuration = () => {
      if (song?.duration && !isNaN(song.duration)) {
        const formattedDuration = formatTime(song.duration);
        setTotalDuration(formattedDuration);
      }
    };

    const updateProgress = () => {
      if (song) {
        setProgressBar(song.currentTime);
        setCurrentTime(formatTime(song.currentTime));
      }
    };

    if (song) {
      song.addEventListener('loadedmetadata', updateDuration);
      song.addEventListener('durationchange', updateDuration); // Fallback event listener
      song.addEventListener('timeupdate', updateProgress);

      // Force loading of metadata
      if (song.readyState < 1) {
        song.load();
      }
    }

    return () => {
      if (song) {
        song.removeEventListener('loadedmetadata', updateDuration);
        song.removeEventListener('durationchange', updateDuration);
        song.removeEventListener('timeupdate', updateProgress);
      }
    };
  }, [audioFileUrl]);

  const playPauseController = () => {
    const song = songRef.current;
    if (song) {
      if (!playAudio) {
        song.play();
        setPlayAudio(true);
      } else {
        song.pause();
        setPlayAudio(false);
      }
    }
  };

  const handleProgressBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const song = songRef.current;
    if (song) {
      song.currentTime = Number(e.target.value);
      setProgressBar(Number(e.target.value));
    }
  };

  return (
    <div className='max-w-full h-[220px] bg-gradient-to-b from-[#525E66] to-[#072A35]/[92%] overflow-hidden rounded-2xl
    flex flex-col justify-center items-center p-2 md:px-4 mt-2 sm:mt-0 shadow-footerMenuShadow'>
      <div className='w-full h-auto'>
        {!audioFileUrl ? (
          <p>No audio file available</p>
        ) : (
          <>
            <audio controlsList="nodownload" ref={songRef}>
              <source src={audioFileUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <div className='flex justify-between'>
              <div className='w-[80%]'>
                <div className='w-full flex justify-start items-center'>
                  <div className='w-fit h-auto rounded-full bg-slate-100 p-2'>
                    <div onClick={playPauseController} className='audio-control-container cursor-pointer'>
                      {playAudio ? icons[pauseIcon] : icons[playIcon]}
                    </div>
                  </div>
                  <div className='ml-2'>
                    <div className={`${cormorant.className}text-[#61c1c9] font-bold text-xl sm:text-2xl`}>
                      <PrismicRichText field={taleValue} />
                    </div>
                    <div>
                      <p className={`${proza_libre.className} text-slate-200 font-medium`}>{taleTitle}</p>
                    </div>
                  </div>
                </div>
                <div className='w-full h-auto flex justify-between items-center pt-5'>
                  <div className='w-[10%] flex justify-center'>
                    <span className='font-bold text-slate-200'>{currentTime}</span>
                  </div>
                  <div className='flex justify-center w-[60%] sm:w-[78%]'>
                    <input
                      type="range"
                      name="audio-progress-bar"
                      id="audio-progress-bar"
                      value={progressBar}
                      onChange={handleProgressBarChange}
                      max={songRef.current?.duration || 0}
                      className="w-full"
                    />
                  </div>
                  <div className='w-[10%] flex justify-center'>
                    <span className='font-bold text-slate-200 text-center'>{totalDuration}</span>
                  </div>
                </div>
              </div>
              <div className='w-[20%]'>
                <PrismicNextImage field={taleImgHandler} className='w-[100%] h-auto rounded-2xl' />
              </div>
            </div>
            <div className='text-slate-100 hover:text-red-400 flex justify-end pt-3 text-2xl'>
              <BsFillHeartFill />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
