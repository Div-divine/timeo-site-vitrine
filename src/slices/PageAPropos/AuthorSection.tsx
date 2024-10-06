import { ImageField, KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextImage, PrismicNextImageProps, PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";
import { Cormorant, Proza_Libre } from 'next/font/google';
import imgSite from "./site.png";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";

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

// Define the type for a single item in the `creatrice_timeo` array
interface CreatriceTimeoItem {
    image_creatrice: ImageField;
    nom: KeyTextField;  // Use KeyTextField for text fields
    titre: KeyTextField;
    nom_du_lien_vers_le_site: KeyTextField;
    site: LinkField;  // Use LinkField for links
    lien_linkidn: LinkField;
    description: KeyTextField;
}

// Define the type for `content` which is an array of `CreatriceTimeoItem`
interface AuthorSectionProps {
    content: CreatriceTimeoItem[];
}

export default function AuthorSection({ content }: AuthorSectionProps) {
    return (
        <div className="w-[90%] md:w-[80%] mx-auto grid gap-4 md:grid-cols-2 md:gap-8 py-8 sm:py-10 md:py-20">
            {content.map((item, index) => (
                <div key={index} className="block md:flex justify-between md:col-span-1">
                    <div className={clsx("md:hidden w-[30%] sm:w-[25%] max-md:mx-auto md:w-[25%] h-auto flex flex-col justify-center items-center")}>
                        <div className="block md:hidden">
                            <PrismicNextImage
                                field={item.image_creatrice}
                                className="border-[2px] border-[#356A78] h-auto rounded-full"
                            />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <div className={clsx("hidden md:flex justify-center items-center h-auto w-[30%] mx-auto")}>
                            <PrismicNextImage
                                field={item.image_creatrice}
                                className="border-[1px] border-[#356A78] h-auto rounded-full"
                            />
                        </div>
                        <div className={`${cormorant.className} text-lg`}>
                            <h2 className="text-center uppercase font-bold">{item.nom}</h2>
                            <h3 className="text-center capitalize font-bold">{item.titre}</h3>
                            <div className="flex justify-center items-center">
                                <PrismicNextLink field={item.site} className="font-bold hover:text-blue-500 cursor-pointer
                                flex justify-center w-[5%] mr-2" target="_blank">
                                    <span className=""><Image src={imgSite} alt="" /></span>
                                </PrismicNextLink>
                                <PrismicNextLink field={item.lien_linkidn} className="w-fit" target="_blank">
                                    <BsLinkedin className="text-3xl" />
                                </PrismicNextLink>
                            </div>
                        </div>
                        <div>
                            <p className={`${proza_libre.className} text-sm sm:text-base text-justify`}>{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
