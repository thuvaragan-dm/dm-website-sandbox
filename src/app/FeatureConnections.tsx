"use client";

import { AnimatedBeam } from "@/components/AnimatedBeam";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { TechnologyConfigType } from "@/sanity/schemas/TechnologyConfigSchema";
import { useRef } from "react";

const FeatureConnections = ({ config }: { config: TechnologyConfigType }) => {
  const { isMd } = useBreakpoint("md");
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const divCenterRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={containerRef}
      className="relative isolate flex w-full flex-col items-center justify-between gap-10 md:flex-row"
    >
      <div className="flex flex-row gap-10 md:flex-col md:gap-y-28">
        <div
          ref={div1Ref}
          className="relative z-10 flex max-w-xs flex-col rounded-xl bg-[#160D1D] p-3 ring ring-white/15 md:p-5"
        >
          <div className="w-min rounded-xl bg-skin-secondary p-2 text-skin-primary md:p-3">
            <svg
              className="size-4 md:size-6"
              viewBox={`0 0 ${config?.technologies?.slotOne?.icon?.viewbox}`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                stroke: "currentColor",
                strokeWidth: config?.technologies?.slotOne?.icon?.strokeWidth,
              }}
              preserveAspectRatio="xMidYMid meet"
              dangerouslySetInnerHTML={{
                __html: config?.technologies?.slotOne?.icon?.svg,
              }}
            />
          </div>

          <p className="mt-3 text-sm font-bold text-white md:mt-5 md:text-base">
            {config?.technologies?.slotOne?.title}
          </p>
        </div>

        <div
          ref={div3Ref}
          className="relative z-10 flex max-w-xs flex-col rounded-xl bg-[#160D1D] p-3 ring ring-white/15 md:p-5"
        >
          <div className="w-min rounded-xl bg-skin-secondary p-2 text-skin-primary md:p-3">
            <svg
              className="size-4 md:size-6"
              viewBox={`0 0 ${config?.technologies?.slotTwo?.icon?.viewbox}`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                stroke: "currentColor",
                strokeWidth: config?.technologies?.slotTwo?.icon?.strokeWidth,
              }}
              preserveAspectRatio="xMidYMid meet"
              dangerouslySetInnerHTML={{
                __html: config?.technologies?.slotTwo?.icon?.svg,
              }}
            />
          </div>

          <p className="mt-3 text-sm font-bold text-white md:mt-5 md:text-base">
            {config?.technologies?.slotTwo?.title}
          </p>
        </div>
      </div>

      <div
        ref={divCenterRef}
        className="relative z-10 w-min rounded-xl bg-skin-primary p-2 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          className="size-10 text-skin-btn-text md:size-20"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M26 22a3.96 3.96 0 00-2.02.566L17.414 16l6.567-6.567A3.95 3.95 0 0026 10a4 4 0 10-4-4 3.95 3.95 0 00.567 2.019L16 14.586 9.434 8.02A3.96 3.96 0 0010 6a4 4 0 10-4 4 3.96 3.96 0 002.02-.566L14.586 16l-6.567 6.567A3.95 3.95 0 006 22a4 4 0 104 4 3.95 3.95 0 00-.567-2.019L16 17.414l6.566 6.566A3.96 3.96 0 0022 26a4 4 0 104-4m0-18a2 2 0 11-2 2 2 2 0 012-2M6 28a2 2 0 112-2 2 2 0 01-2 2"
          />
        </svg>
      </div>

      <div className="flex flex-row gap-10 md:flex-col">
        <div
          ref={div2Ref}
          className="relative z-10 flex max-w-xs flex-col rounded-xl bg-[#160D1D] p-3 ring ring-white/15 md:p-5"
        >
          <div className="w-min rounded-xl bg-skin-secondary p-2 text-skin-primary md:p-3">
            <svg
              className="size-4 md:size-6"
              viewBox={`0 0 ${config?.technologies?.slotThree?.icon?.viewbox}`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                stroke: "currentColor",
                strokeWidth: config?.technologies?.slotThree?.icon?.strokeWidth,
              }}
              preserveAspectRatio="xMidYMid meet"
              dangerouslySetInnerHTML={{
                __html: config?.technologies?.slotThree?.icon?.svg,
              }}
            />
          </div>

          <p className="mt-3 text-sm font-bold text-white md:mt-5 md:text-base">
            {config?.technologies?.slotThree?.title}
          </p>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divCenterRef}
        toRef={div1Ref}
        dotted
        dotGap={10}
        dotLength={5}
        duration={10}
        pathOpacity={0.6}
        curvature={isMd ? 170 : 0}
        reverse
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divCenterRef}
        toRef={div2Ref}
        dotted
        dotGap={10}
        dotLength={5}
        duration={10}
        pathOpacity={0.6}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={divCenterRef}
        toRef={div3Ref}
        dotted
        dotGap={10}
        dotLength={5}
        duration={10}
        pathOpacity={0.6}
        curvature={isMd ? -170 : 0}
        reverse
      />
    </div>
  );
};

export default FeatureConnections;
