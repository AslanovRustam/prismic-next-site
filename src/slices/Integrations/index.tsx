import React, { FC } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import StarBackground from "./StarBackground";
import background from "./background.jpg";
import Image from "next/image";

import AnimatedContent from "./AnimatedContent";

/**
 * Props for `Integration`.
 */
export type IntegrationProps = SliceComponentProps<Content.IntegrationSlice>;

/**
 * Component for "Integration" Slices.
 */
const Integration: FC<IntegrationProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden"
    >
      <Image
        src={background}
        alt=""
        fill
        className="object-cover"
        quality={90}
      />
      <StarBackground />
      <div className="relative">
        <h2 className="mx-auto max-w-2xl text-center text-5xl font-medium text-balance md:text-7xl">
          <PrismicText field={slice.primary.heading} />
        </h2>
        <div className="mx-auto mt-6 max-w-md text-center text-balance text-slate-300">
          <PrismicRichText field={slice.primary.body} />
        </div>
        <AnimatedContent slice={slice} />
      </div>
    </Bounded>
  );
};

export default Integration;
