"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

type ActiveLinkProps = {
  href: string;
  children: ReactNode;
}& React.HTMLAttributes<HTMLLIElement>; // Extend with HTML attributes;

export default function ActiveLink({ href, children, ...props }: ActiveLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <li
      className={`${
        isActive ? "text-[#366B79]" : "text-black"
      } px-5 py-0 rounded-3xl max-lg:mt-1 hover:text-[#366b7a]`} // Custom styles
      {...props}
    >
      {children}
    </li>
  );
}
