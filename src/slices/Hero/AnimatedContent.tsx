"use client";

import { useRef } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import ButtonLink from "@/app/components/ButtonLink";
import { PrismicNextImage } from "@prismicio/next";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import StarGrid from "@/app/components/StarGrid";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

interface AnimatedContentProps {
  slice: Content.HeroSlice;
}

export default function AnimatedContent({ slice }: AnimatedContentProps) {
  const container = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      // remove animation from the page if user browser settings is animation off//
      if (prefersReducedMotion) {
        gsap.set(
          ".hero__heading,.hero__body,.hero__button,.hero__image,.hero__glow",
          { opacity: 1 },
        );
        return;
      }
      // remove animation from the page if user browser settings is animation off//

      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
      tl.fromTo(
        ".hero__heading",
        { scale: 0.5 },
        { scale: 1, opacity: 1, duration: 1.4 },
      );
      tl.fromTo(
        ".hero__body",
        { y: 20 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=0.6",
      );
      tl.fromTo(
        ".hero__button",
        { scale: 1.5 },
        { scale: 1, opacity: 1, duration: 1.3 },
        "-=0.8",
      );
      tl.fromTo(
        ".hero__image",
        { y: 100 },
        { y: 0, opacity: 1, duration: 1.3 },
        "+=0.3",
      );
      tl.fromTo(
        ".hero__glow",
        { scale: 0.5 },
        { scale: 1, opacity: 1, duration: 1.3 },
        "-=0.5",
      );
      //   gsap.to(".box", { x: 360 }); // <-- automatically reverted
    },
    { scope: container },
  );
  return (
    <div className="relative" ref={container}>
      <StarGrid />
      {isFilled.richText(slice.primary.heading) && (
        <h1 className="hero__heading text-5xl font-medium text-balance opacity-0 md:text-7xl">
          <PrismicText field={slice.primary.heading} />
        </h1>
      )}
      {isFilled.richText(slice.primary.body) && (
        <div className="hero__body mx-auto mt-6 max-w-md text-balance text-slate-300 opacity-0">
          <PrismicRichText field={slice.primary.body} />
        </div>
      )}
      {isFilled.link(slice.primary.button_link) && (
        <ButtonLink
          field={slice.primary.button_link}
          className="hero__button mt-8 opacity-0"
        >
          {slice.primary.button_label}
        </ButtonLink>
      )}
      {isFilled.image(slice.primary.image) && (
        <div className="hero__image glass-container mt-16 w-fit opacity-0">
          <div className="hero__glow absolute inset-0 -z-10 bg-blue-500/30 opacity-0 blur-2xl filter" />
          <PrismicNextImage
            field={slice.primary.image}
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
