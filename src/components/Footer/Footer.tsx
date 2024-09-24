import { createClient } from "@/prismicio";
import { Proza_Libre } from "next/font/google";
import Link from "next/link";
import TimeoIcon from "../LogoTimeo";
import { PrismicNextLink } from "@prismicio/next";
import ActiveLink from "../SetNavLinkState";
import { asLink } from "@prismicio/client";

const proza_libre = Proza_Libre({
    subsets: ['latin'],
    display: 'swap',
    weight: ["400", "700"],
    variable: '--font-proza_libre'
});


type FooterProps = {
    bgColor: string;
};


export async function Footer({ bgColor }: FooterProps) {
  const client = createClient();
  const footer = await client.getSingle("footer");

  return (
    <footer className={`bg-[${bgColor}] mt-8 pb-2`}>
      <div className="w-40 m-auto">
        <Link href="/">
          <TimeoIcon />
          <span className="sr-only">Accueil</span>
        </Link>
      </div>
      <nav aria-label="Footer" className="mt-5">
        <ul
          className={`${proza_libre.className} flex flex-wrap justify-around w-[90%] sm:w-[50%] m-auto 
                text-sm sm:text-xl border border-gray-300 p-2 bg-gray-200`}
        >
          {footer.data.footer.map((item, index) => {
            const linkUrl = asLink(item.lien_vers_la_page); // Safely extract URL

            return (
              linkUrl && (
                <ActiveLink key={index} href={linkUrl}>
                  <PrismicNextLink
                    field={item.lien_vers_la_page}
                    className="inline-flex min-h-11 items-center"
                  >
                    {item.nom_menu}
                  </PrismicNextLink>
                </ActiveLink>
              )
            );
          })}
        </ul>
        <ul
          className={`${proza_libre.className} flex flex-wrap justify-around w-[80%] m-auto 
                text-base mt-5`}
        >
          {footer.data.politiques_de_confidentialite.map((item, index) => (
            <PrismicNextLink field={item.lien_vers_la_politique} key={index}>
              {item.politique_de_confidentialite}
            </PrismicNextLink>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
