import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

export default function ButtonLink({
  className,
  ...restProps
}: PrismicNextLinkProps) {
  return (
    <PrismicNextLink
      className={clsx(
        "group relative inline-flex h-fit w-fit rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 ring-yellow-300 transition-colors outline-none",
        "hover:border-yellow-200/40 hover:text-yellow-300",
        className,
      )}
      {...restProps}
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-yellow-100 opacity-0 blur-md transition-all duration-500 group-hover:animate-pulse group-hover:opacity-15 group-focus:animate-pulse group-focus:opacity-15" />
      {restProps.children}
    </PrismicNextLink>
  );
}
