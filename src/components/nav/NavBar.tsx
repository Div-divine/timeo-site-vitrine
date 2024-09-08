"use client"
import { asLink, Content } from "@prismicio/client"
import { Amaranth } from "next/font/google";
import Link from "next/link";
import TimeoIcon from "../LogoTimeo";
import { PrismicNextLink } from "@prismicio/next";
import { usePathname } from "next/navigation";
import ActiveLink from "../SetNavLinkState";

const amaranth = Amaranth({
    subsets: ['latin'],
    display: 'swap',
    weight: ["400", "700"],
    variable: '--font-amaranth'
})

type MenuProps = {
    menu: Content.MenuDocument
}

export default function NavBar({ menu }: MenuProps) {
    const pathName = usePathname()
    return (
        <nav aria-label="Main" className={amaranth.className}>
            <div className="mx-auto flex max-w-[97%] flex-col justify-between
                font-medium text-black md:flex-row md:items-center bg-slate-200 rounded-b-lg px-7 py-5">
                <div className="w-40">
                    <Link href='/'>
                        <TimeoIcon />
                        <span className="sr-only">Accueil</span>
                    </Link>
                </div>
                <div>
                    <ul className="gap-16 hidden md:flex">
                        {menu && menu.data.menu_de_navigation.map((item, index) => {
                            const linkUrl = asLink(item.lien_du_menu);
                            
                            return (
                                linkUrl && (<ActiveLink key={index} href={linkUrl}>
                                    <PrismicNextLink field={item.lien_du_menu} className="inline-flex min-h-11 items-center text-xl"
                                     aria-current={
                                        pathName.includes(asLink(item.lien_du_menu) as string) ? "page" : undefined
                                    }>
                                        {item.label_du_menu}
                                    </PrismicNextLink>

                                </ActiveLink>)
                            );
                        })

                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
