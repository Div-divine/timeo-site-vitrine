import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import { ReactNode, AnchorHTMLAttributes } from "react";  // Import necessary types

interface ButtonLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  field: LinkField;
  children: ReactNode;
  className?: string; // ClassName is optional
}

export default function ButtonLink({
  className,
  field,
  children,
  ...restProps
}: ButtonLinkProps) {
  // Ensure field is not null or undefined
  return (
    <PrismicNextLink
      field={field} // Pass the field prop to PrismicNextLink
      className={clsx(
        "text-white md:text-xl text-center relative inline-flex h-fit w-fit rounded-2xl border border-blue-100/20 p-4 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2",
        className
      )}
      {...restProps}  // Safely pass remaining props
    >
      {children}  {/* Render the children inside the link */}
    </PrismicNextLink>
  );
}
