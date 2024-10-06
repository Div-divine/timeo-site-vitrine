"use client"
import { asLink, Content } from "@prismicio/client"
import { Proza_Libre } from "next/font/google";
import Link from "next/link";
import timeoLogo from "../timeo-logo.png";
import { PrismicNextLink } from "@prismicio/next";
import { usePathname } from "next/navigation";
import ActiveLink from "../SetNavLinkState";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import clsx from "clsx";
import Image from "next/image";

const proza_libre = Proza_Libre({
    subsets: ['latin'],
    display: 'swap',
    weight: ["400", "700"],
    variable: '--font-proza_libre'
})

type MenuProps = {
    menu: Content.MenuDocument
}

export default function NavBar({ menu }: MenuProps) {
    const [open, setOpen] = useState(false);
    const pathName = usePathname()

    return (
        <nav aria-label="Main" className={proza_libre.className}>
            <div className="mx-auto w-full flex flex-col justify-between
                font-medium text-black md:flex-row md:items-center bg-white/100 px-7 py-5">
                <div className="flex items-center justify-between">
                    <div className="w-32 z-50">
                        <Link href='/' >
                            <Image src={timeoLogo} alt="Timéo icon" />
                            <span className="sr-only">Accueil</span>
                        </Link>
                    </div>
                    <button type="button"
                        className="block p-2 text-4xl text-[#366b7a] md:hidden"
                        aria-expanded={open}
                        onClick={() => setOpen(true)}>
                        <MdMenu />
                        <span className="sr-only">Open Menu</span>
                    </button>
                </div>
                {/* Mobile Nav */}

                <div className={clsx("fixed bottom-0 top-0 left-0 right-0 z-40 flex flex-col items-end gap-4 bg-gradient-to-b from-[#03171E] to-[#356A78] pr-4 pt-14 transition-transform ease-in-out motion-reduce:transition-none md:hidden",
                    open ? "translate-x-0" : "translate-x-[100%]"
                )
                }>
                    <button type="button"
                        className="block p-2 text-4xl text-white md:hidden fixed right-4 top-4 mb-4"
                        aria-expanded={open}
                        onClick={() => setOpen(false)}>
                        <MdClose />
                        <span className="sr-only">Close Menu</span>
                    </button>
                    <div className="w-[90%] grid justify-items-start gap-5 text-slate-300 mt-5">
                        {menu && menu.data.menu_de_navigation.map((item, index) => {
                            return (
                                <PrismicNextLink
                                    key={index} field={item.lien_du_menu} className="block px-3 text-3xl first:mt-8"
                                    onClick={() => setOpen(false)}
                                    aria-current={
                                        pathName.includes(asLink(item.lien_du_menu) as string) ? "page" : undefined
                                    }>
                                    {item.label_du_menu}
                                </PrismicNextLink>
                            )
                        })}
                    </div>

                </div>
                {/* Desktop nav */}
                <ul className="hidden md:flex justify-between">
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
        </nav>
    )
}
