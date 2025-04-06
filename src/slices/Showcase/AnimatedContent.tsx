"use client";
import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AnimatedContentProps {
  children: ReactNode;
}

export default function AnimatedContent({ children }: AnimatedContentProps) {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      gsap.fromTo(
        container.current,
        { y: 100 },
        {
          y: 0,
          ease: "power2.inOut",
          duration: 1,
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom-=20%",
            toggleActions: "play pause resume reverse",
          },
        },
      );
    },
    { scope: container },
  );

  return <div ref={container}>{children}</div>;
}
