import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import PlaunLogo from "./PlainLogo";
import Bounded from "@/app/components/Bounded";
import ButtonLink from "@/app/components/ButtonLink";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction: FC<CallToActionProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative py-32 text-center font-medium md:py-40"
    >
      <div className="glow absolute -z-10 aspect-square w-full max-w-sm rounded-full bg-blue-500/50 blur-[160px] filter"></div>
      <div className="glass-container rounded-lg bg-gradient-to-b from-slate-800 to-slate-900 p-4 md:rounded-xl">
        <PlaunLogo />
      </div>
      <div className="mt-8 max-w-xl text-5xl text-balance">
        <PrismicRichText field={slice.primary.heading} />
      </div>
      <ButtonLink field={slice.primary.button_link} className="mt-6">
        {slice.primary.button_text || "Learn more"}
      </ButtonLink>
    </Bounded>
  );
};

export default CallToAction;
