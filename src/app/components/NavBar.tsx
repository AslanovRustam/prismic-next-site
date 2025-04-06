"use client";
import Link from "next/link";
import { asLink, Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import WordMark from "./WordMark";
import ButtonLink from "./ButtonLink";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type NavBarProps = {
  settings: Content.SettingsDocument;
};
export default function NavBar({ settings }: NavBarProps) {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <nav aria-label="Main" className="px-4 py-4 md:px-6 md:py-6">
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="z-50" onClick={toggleOpen}>
            <WordMark />
            <span className="sr-only">Home page</span>
          </Link>
          <button
            type="button"
            className="block p-2 text-3xl text-white md:hidden"
            aria-expanded={open}
            onClick={toggleOpen}
          >
            <MdMenu />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
        <div
          className={clsx(
            "fixed top-0 right-0 bottom-0 left-0 z-40 flex flex-col items-end gap-4 bg-[#070815] pt-14 pr-4 transition-transform duration-300 ease-in-out motion-reduce:transition-none md:hidden",
            open ? "translate-x-0" : "translate-x-[100%]",
          )}
        >
          <button
            type="button"
            className="fixed top-6 right-6 mb-6 block p-2 text-3xl text-white md:hidden"
            aria-expanded={open}
            onClick={toggleOpen}
          >
            <MdClose />
            <span className="sr-only">Colse menu</span>
          </button>
          <div className="grid justify-items-end gap-8">
            {settings.data.navigation.map((item) => {
              if (item.cta_button) {
                return (
                  <ButtonLink
                    key={item.label}
                    field={item.link}
                    onClick={toggleOpen}
                    aria-current={
                      pathName.includes(asLink(item.link) as string)
                        ? "page"
                        : undefined
                    }
                  >
                    {item.label}
                  </ButtonLink>
                );
              }
              return (
                <PrismicNextLink
                  key={item.label}
                  className="block px-3 text-3xl first:mt-8"
                  field={item.link}
                  onClick={toggleOpen}
                  aria-current={
                    pathName.includes(asLink(item.link) as string)
                      ? "page"
                      : undefined
                  }
                >
                  {item.label}
                </PrismicNextLink>
              );
            })}
          </div>
        </div>
        <ul className="hidden gap-6 md:flex">
          {settings.data.navigation.map((item) => {
            if (item.cta_button) {
              return (
                <li key={item.label}>
                  <ButtonLink
                    field={item.link}
                    aria-current={
                      pathName.includes(asLink(item.link) as string)
                        ? "page"
                        : undefined
                    }
                  >
                    {item.label}
                  </ButtonLink>
                </li>
              );
            }
            return (
              <li key={item.label}>
                <PrismicNextLink
                  field={item.link}
                  className="inline-flex min-h-11 items-center"
                  aria-current={
                    pathName.includes(asLink(item.link) as string)
                      ? "page"
                      : undefined
                  }
                >
                  {item.label}
                </PrismicNextLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
