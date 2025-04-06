import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import ButtonLink from "@/app/components/ButtonLink";
import { PrismicNextImage } from "@prismicio/next";
import Bounded from "@/app/components/Bounded";
import StarGrid from "@/app/components/StarGrid";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-center"
    >
      <div className="relative">
        <StarGrid />
        {isFilled.richText(slice.primary.heading) && (
          <h1 className="text-5xl font-medium text-balance md:text-7xl">
            <PrismicText field={slice.primary.heading} />
          </h1>
        )}
        {isFilled.richText(slice.primary.body) && (
          <div className="mx-auto mt-6 max-w-md text-balance text-slate-300">
            <PrismicRichText field={slice.primary.body} />
          </div>
        )}
        {isFilled.link(slice.primary.button_link) && (
          <ButtonLink field={slice.primary.button_link} className="mt-8">
            {slice.primary.button_label}
          </ButtonLink>
        )}
        {isFilled.image(slice.primary.image) && (
          <div className="glass-container mt-16 w-fit">
            <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter" />
            <PrismicNextImage
              field={slice.primary.image}
              className="rounded-lg"
            />
          </div>
        )}
      </div>
    </Bounded>
  );
};

export default Hero;
