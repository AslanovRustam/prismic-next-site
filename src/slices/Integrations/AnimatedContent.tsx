"use client";

import React, { useRef } from "react";
import clsx from "clsx";
import { Content } from "@prismicio/client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StylizedLogoMark from "./StylizedLogoMark";
import {
  FaDigitalOcean,
  FaCloudflare,
  FaNpm,
  FaGithub,
  FaFigma,
  FaFly,
} from "react-icons/fa6";

interface AnimatedContentProps {
  slice: Content.IntegrationSlice;
}

export default function AnimatedContent({ slice }: AnimatedContentProps) {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        repeat: -1,
      });

      tl.to(".pulsing-logo ", {
        keyframes: [
          {
            filter: "brightness(2)",
            opacity: 1,
            duration: 0.4,
            ease: "power2.in",
          },
          {
            filter: "brightness(1)",
            opacity: 0.7,
            duration: 0.9,
          },
        ],
      });
      tl.to(
        ".signal-line ",
        {
          keyframes: [
            {
              backgroundPosition: "0% 0%",
            },
            {
              backgroundPosition: "100% 100%",
              stagger: { from: "center", each: 0.3 },
              duration: 1,
            },
          ],
        },
        "-=1.4",
      );
      tl.to(
        ".pulsing-icon  ",
        {
          keyframes: [
            {
              opacity: 1,
              stagger: { from: "center", each: 0.3 },
              duration: 1,
            },
            {
              opacity: 0.4,
              stagger: { from: "center", each: 0.3 },
              duration: 1,
            },
          ],
        },
        "-=2",
      );
    },
    { scope: container },
  );

  const icons = {
    cloudfare: <FaCloudflare />,
    npm: <FaNpm />,
    github: <FaGithub />,
    figma: <FaFigma />,
    digitalocean: <FaDigitalOcean />,
    fly: <FaFly />,
  };
  return (
    <div
      className="mt-20 flex flex-col items-center md:flex-row"
      ref={container}
    >
      {slice.primary.icons.map((item, index) => (
        <React.Fragment key={index}>
          {index === Math.floor(slice.primary.icons.length / 2) && (
            <>
              <StylizedLogoMark />
              <div className="signal-line rotate-180 bg-gradient-to-t" />
            </>
          )}
          <div className="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
            {item.icon && icons[item.icon]}
          </div>
          {index !== slice.primary.icons.length - 1 && (
            <div
              className={clsx(
                "signal-line",
                index >= Math.floor(slice.primary.icons.length / 2)
                  ? "rotate-180"
                  : "rotate-360",
              )}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
