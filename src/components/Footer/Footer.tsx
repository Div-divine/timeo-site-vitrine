import { createClient } from "@/prismicio";
import { Amaranth } from "next/font/google";
import Link from "next/link";
import TimeoIcon from "../LogoTimeo";
import { PrismicNextLink } from "@prismicio/next";
import ActiveLink from "../SetNavLinkState";

const amaranth = Amaranth({
    subsets: ['latin'],
    display: 'swap',
    weight: ["400", "700"],
    variable: '--font-amaranth'
});


type FooterProps = {
    bgColor: string;
};

export async function Footer({ bgColor }: FooterProps) {
    const client = createClient();
    const footer = await client.getSingle("footer");

    return (
        <footer className={`bg-[${bgColor}] mt-8`}>
            <div className="w-40 m-auto">
                <Link href="/">
                    <TimeoIcon />
                    <span className="sr-only">Accueil</span>
                </Link>
            </div>
            <nav aria-label="Footer" className="mt-5">
                <ul className={`${amaranth.className} flex flex-wrap justify-around w-[40%] m-auto 
                text-xl border border-gray-300 p-2 rounded-2xl bg-gray-200 shadow-footerMenuShadow`}>
                    {footer.data.footer.map((item, index) => (
                        <ActiveLink key={index} href={item.lien_vers_la_page.url}>
                            <PrismicNextLink
                                field={item.lien_vers_la_page}
                                className="inline-flex min-h-11 items-center"
                            >
                                {item.nom_menu}
                            </PrismicNextLink>
                        </ActiveLink>
                    ))}
                </ul>
                <ul className={`${amaranth.className} flex flex-wrap justify-around w-[80%] m-auto 
                text-xl`}>
                    {
                        
                    }

                </ul>
            </nav>
        </footer>
    );
}
