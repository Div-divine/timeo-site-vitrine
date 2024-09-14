"use client";
import { useState } from 'react';
import { PrismicRichText } from '@prismicio/react'; // Assuming these imports based on your usage
import { PrismicNextImage } from '@prismicio/next';
import { Content } from '@prismicio/client';
import { BsPlusCircleFill } from "react-icons/bs";


// Define the type for your Prismic Slice
export type CatalogueThirdSliceProps = {
  slice: Content.CatalogueThirdSliceSlice;
};


const CatalogueSection: React.FC<CatalogueThirdSliceProps> = ({ slice }) => {
  // State to control how many columns are shown for each season
  const [visibleColumnsS1, setVisibleColumnsS1] = useState<number>(2);
  const [visibleColumnsS2, setVisibleColumnsS2] = useState<number>(2);
  const [visibleColumnsS3, setVisibleColumnsS3] = useState<number>(2);

  // Functions to increment visible columns for each season
  const showMoreS1 = () => setVisibleColumnsS1((prev) => prev + 2);
  const showMoreS2 = () => setVisibleColumnsS2((prev) => prev + 2);
  const showMoreS3 = () => setVisibleColumnsS3((prev) => prev + 2);

  return (
    <div className="w-[90%] m-auto">
      {/* Season 1 */}
      <div className="font-bold text-lg sm:text-2xl border-b-2 border-b-[#356A78] w-fit rounded-lg px-2">
        <PrismicRichText field={slice.primary.titre_saison_1} />
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1 sm:gap-4 py-4">
        {slice.primary.catalogue_saison_1
          .slice(0, visibleColumnsS1 * 3) // Limit the number of visible items
          .map((item, index) => (
            <div key={index}>
              <PrismicNextImage field={item.image_catalogue} className="shadow-footerMenuShadow" />
              <div className="text-center bg-gradient-to-b from-[#03171E] to-[#356A78] text-slate-200 py-2">
                <div className="font-bold text-[#ffb910]">
                  <PrismicRichText field={item.valeur_traitee} />
                </div>
                <p>{item.titre_de_conte}</p>
              </div>
            </div>
          ))}
      </div>
      {visibleColumnsS1 * 3 < slice.primary.catalogue_saison_1.length && (
        <button
          onClick={showMoreS1}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 flex justify-between"
        >
          <span className='text-xl md:text-2xl mr-2'><BsPlusCircleFill /></span> Afficher plus
        </button>
      )}

      {/* Season 2 */}
      <div className="font-bold text-lg sm:text-2xl border-b-2 border-b-[#356A78] w-fit rounded-lg px-2 mt-4">
        <PrismicRichText field={slice.primary.titre_saison_2} />
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1 sm:gap-4 py-4">
        {slice.primary.catalogue_saison_2
          .slice(0, visibleColumnsS2 * 3) // Limit the number of visible items
          .map((item, index) => (
            <div key={index}>
              <PrismicNextImage field={item.image_cata} className="shadow-footerMenuShadow" />
              <div className="text-center bg-gradient-to-b from-[#03171E] to-[#356A78] text-slate-200 py-2">
                <div className="font-bold text-[#ffb910]">
                  <PrismicRichText field={item.valeur_traitee} />
                </div>
                <p>{item.titre_de_conte}</p>
              </div>
            </div>
          ))}
      </div>
      {visibleColumnsS2 * 3 < slice.primary.catalogue_saison_2.length && (
        <button
          onClick={showMoreS2}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 flex justify-between"
        >
           <span className='text-xl md:text-2xl mr-2'><BsPlusCircleFill /></span> Afficher plus
        </button>
      )}

      {/* Season 3 */}
      <div className="font-bold text-lg sm:text-2xl border-b-2 border-b-[#356A78] w-fit rounded-lg px-2 mt-4">
        <PrismicRichText field={slice.primary.titre_saison_3} />
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1 sm:gap-4 py-4">
        {slice.primary.catalogue_saison_3
          .slice(0, visibleColumnsS3 * 3) // Limit the number of visible items
          .map((item, index) => (
            <div key={index}>
              <PrismicNextImage field={item.image_catalogue} className="shadow-footerMenuShadow" />
              <div className="text-center bg-gradient-to-b from-[#03171E] to-[#356A78] text-slate-200 py-2">
                <div className="font-bold text-[#ffb910]">
                  <PrismicRichText field={item.valeur_traitee} />
                </div>
                <p>{item.titre_de_conte}</p>
              </div>
            </div>
          ))}
      </div>
      {visibleColumnsS3 * 3 < slice.primary.catalogue_saison_3.length && (
        <button
          onClick={showMoreS3}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 flex justify-between"
        >
           <span className='text-xl md:text-2xl mr-2'><BsPlusCircleFill /></span> Afficher plus
        </button>
      )}
    </div>
  );
};

export default CatalogueSection;
