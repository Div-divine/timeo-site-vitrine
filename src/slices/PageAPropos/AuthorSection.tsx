import { ImageField, KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextImage, PrismicNextImageProps, PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import Image from "next/image";
import lightImg from './light-bulb-removebg.png';
import rocketImg from './rocket-removebg.png'
import clsx from "clsx";

// Define the type for a single item in the `creatrice_timeo` array
interface CreatriceTimeoItem {
    image_creatrice: ImageField;
    nom: KeyTextField;  // Use KeyTextField for text fields
    titre: KeyTextField;
    nom_du_lien_vers_le_site: KeyTextField;
    site: LinkField;  // Use LinkField for links
    description: KeyTextField;
}

// Define the type for `content` which is an array of `CreatriceTimeoItem`
interface AuthorSectionProps {
    content: CreatriceTimeoItem[];
}

export default function AuthorSection({ content }: AuthorSectionProps) {
    return (
        <div className="grid gap-4 mx-2  md:mx-[5%] lg:mx-[10%] py-8 sm:py-10 md:py-20 ">
            {content.map((item, index) => (
                <div key={index} className="block md:flex justify-between first:mb-6">
                    <div className={clsx("w-[30%] sm:w-[25%] max-md:m-auto md:w-[15%] h-auto flex flex-col justify-center items-center")}>
                        <div className={clsx("hidden md:block w-full h-full border-2 border-[#62c4c8] relative rounded-lg bg-gradient-to-b from-[#03171E] to-[#356A78]")}>
                            <PrismicNextImage
                                field={item.image_creatrice}
                                className="border-[3px] border-black h-auto rounded-lg absolute right-[-10px] top-[-25px] translate-y-[50%]"
                            />
                        </div>
                        <div className="block md:hidden">
                            <PrismicNextImage
                                field={item.image_creatrice}
                                className="border-[3px] border-[#356A78] h-auto rounded-full"
                            />
                        </div>
                    </div>
                    <div className="md:w-[85%] pl-0 md:pl-5 ">
                        <div className={clsx('text-sm sm:text-base')}>
                            <Image src={index == 0 ? rocketImg : lightImg} alt="" className="hidden md:block md:w-20" />
                            <h2 className="max-md:text-center uppercase font-bold">{item.nom}</h2>
                            <h3 className="max-md:text-center capitalize font-bold">{item.titre}</h3>
                            <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
                                <PrismicNextLink field={item.site} className="font-bold">
                                    Site: {item.nom_du_lien_vers_le_site}
                                </PrismicNextLink>
                            </div>
                        </div>
                        <div className="w-full md:block md:w-[70%] lg:w-[50%]">
                            <p className="text-sm sm:text-base text-justify mt-5">{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
