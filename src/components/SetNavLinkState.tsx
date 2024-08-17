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
        isActive ? "bg-[#366B79] text-slate-200" : "bg-gray-300"
      } px-5 py-0 rounded-3xl max-lg:mt-1`} // Custom styles
      {...props}
    >
      {children}
    </li>
  );
}
