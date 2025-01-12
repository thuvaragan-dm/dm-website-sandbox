"use client";

import { BorderBeam } from "@/components/BorderBeam";
import { HeroConfigType } from "@/sanity/schemas/HeroConfigSchema";
import React, { useRef } from "react";

const AgentBuilderPrompt = ({ configs }: { configs: HeroConfigType }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  return (
    <div className="relative mx-auto mt-16 w-full max-w-screen-sm rounded-3xl bg-skin-primary-dark/50 shadow-[0px_0px_100px_10px_rgba(66,28,164,0.3),0px_0px_10px_5px_rgba(66,28,164,0.9)] ring-2 ring-white/10">
      <BorderBeam size={150} borderWidth={3} duration={10} delay={0} />
      <textarea
        ref={textAreaRef}
        placeholder="What type of agent would you like to build today?"
        rows={3}
        className="w-full resize-none appearance-none bg-transparent p-5 text-sm text-white focus:outline-none md:text-lg"
      ></textarea>

      <div className="flex w-full flex-col items-start justify-between gap-5 p-5 md:flex-row md:items-center">
        <div className="scrollbar -mb-3 flex items-center justify-start gap-2 overflow-x-auto pb-1 md:w-full">
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
  );
};

export default AgentBuilderPrompt;
