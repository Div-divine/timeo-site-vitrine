"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type ActiveLinkProps = {
  href: string;
  children: ReactNode;
};

export default function ActiveLink({ href, children }: ActiveLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <li
      className={`${
        isActive ? "bg-[#366B79] text-slate-200" : "bg-gray-300"
      } px-5 py-0 rounded-3xl`} // Custom styles
    >
      {children}
    </li>
  );
}
