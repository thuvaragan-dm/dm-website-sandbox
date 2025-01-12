"use client";

import React, { useEffect, useRef, useState } from "react";
import { getGeneralConfig } from "@/sanity/sanity-utils";
import { HeroHighlight } from "@/components/HeroHighlight";
import { BorderBeam } from "@/components/BorderBeam";
import { GeneralConfigType } from "@/sanity/schemas/GeneralConfigSchema";

const Page = () => {
  const [configs, setConfigs] = useState<GeneralConfigType | null>(null);

  const loadConfigs = async () => {
    const config = await getGeneralConfig();
    setConfigs(config);
  };

  useEffect(() => {
    loadConfigs();
  }, []);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  if (configs) {
    return (
      <main className="overflow-x-hidden">
        <HeroHighlight
          containerClassName="min-h-dvh flex flex-col justify-start"
          patternClassName="[mask-image:linear-gradient(180deg,transparent,white,white,transparent)]"
        >
          <section className="flex min-h-dvh flex-1 flex-col items-center justify-center p-10">
            {/* Heading */}
            <div className="flex flex-col items-center justify-center">
              {/* badge */}
              {configs.whatsNew && (
                <div className="mb-5 flex w-max items-center justify-start gap-3 rounded-full bg-white/30 p-0.5 pr-3 text-[0.65rem] font-semibold uppercase tracking-widest text-white ring-1 ring-gray-600/50">
                  <span className="to-skin-primary-yellow/70 flex w-max items-center justify-start gap-2 rounded-full bg-gradient-to-r from-skin-primary/70 px-2 py-1">
                    <svg className="size-4 text-white" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                        clipRule="evenodd"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <p className="hidden md:block">Whats new</p>
                  </span>
                  {configs.whatsNew}
                </div>
              )}
              {/* badge */}

              <h1 className="max-w-7xl text-balance text-center text-4xl font-medium text-white md:text-6xl">
                {configs.heading}
              </h1>

              <p className="mt-5 text-center font-mono text-xs text-white/80 md:text-lg">
                {configs.subHeading}
              </p>
            </div>
            {/* Heading */}

            {/* agent prompt */}
            <div className="relative mx-auto mt-16 w-full max-w-screen-lg rounded-3xl bg-skin-primary-dark/50 shadow-xl shadow-skin-primary/20 ring-2 ring-white/10">
              <BorderBeam size={150} borderWidth={3} duration={10} delay={0} />
              <textarea
                ref={textAreaRef}
                placeholder="What type of agent would you like to build today?"
                rows={3}
                className="w-full resize-none appearance-none bg-transparent p-5 text-sm text-white focus:outline-none md:text-lg"
              ></textarea>

              <div className="flex w-full flex-col items-start justify-between gap-5 p-5 md:flex-row md:items-center">
                <div className="scrollbar flex items-center justify-start gap-2 overflow-x-auto md:w-full">
                  {configs.suggestions.map((suggestion, idx) => (
                    <button
                      onClick={() => {
                        if (textAreaRef && textAreaRef.current) {
                          textAreaRef.current.value = suggestion.content;
                        }
                      }}
                      key={idx}
                      className="flex-shrink-0 rounded-full bg-white/10 px-3 py-2 text-xs font-medium text-white hover:bg-white/20 md:text-sm"
                    >
                      {suggestion.name}
                    </button>
                  ))}
                </div>

                <div className="hidden h-10 border-r-2 border-white/30 md:block"></div>

                <button className="w-full min-w-max rounded-xl bg-skin-primary px-3 py-2 text-sm font-medium text-white md:w-auto">
                  Build your agent
                </button>
              </div>
            </div>
            {/* agent prompt */}
          </section>
        </HeroHighlight>
      </main>
    );
  }

  // loading state
  return <div className="h-dvh bg-skin-primary-dark"></div>;
};

export default Page;
