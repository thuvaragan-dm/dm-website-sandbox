import { HeroHighlight } from "@/components/HeroHighlight";
import Navbar from "@/components/layouts/Navbar";
import {
  getHeroConfig,
  getKeyFeaturesConfig,
  getNavConfig,
  getTechnologyConfig,
  getWhyDeepmodelConfig,
} from "@/sanity/sanity-utils";
import AgentBuilderPrompt from "./AgentBuilderPrompt";
import FeatureConnections from "./FeatureConnections";
import { cn } from "@/utilities/cn";
import Grid from "@/components/patterns/Grid";

const Page = async () => {
  const heroConfigs = await getHeroConfig();
  const navConfigs = await getNavConfig();
  const keyFeaturesConfigs = await getKeyFeaturesConfig();
  const technologyConfigs = await getTechnologyConfig();
  const whyDeepmodelConfigs = await getWhyDeepmodelConfig();

  return (
    <main className="overflow-x-hidden bg-skin-primary-dark">
      <Navbar configs={navConfigs} />

      {/* Hero section */}
      <HeroHighlight
        containerClassName="pt-20 h-[55rem] flex flex-col justify-start"
        patternClassName="[mask-image:linear-gradient(180deg,transparent,white,white,transparent)]"
      >
        <section className="flex flex-1 flex-col items-center justify-center p-10">
          {/* Heading */}
          <div className="flex flex-col items-center justify-center">
            {/* badge */}
            {heroConfigs?.whatsNew && (
              <div className="mb-5 flex w-max items-center justify-start gap-3 rounded-full bg-white/10 p-0.5 pr-3 text-[0.65rem] font-semibold uppercase tracking-widest text-white ring-1 ring-gray-600/50">
                <span className="flex w-max items-center justify-start gap-2 rounded-full bg-gradient-to-r from-skin-primary/70 to-skin-primary-yellow/70 px-2 py-1">
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
                {heroConfigs?.whatsNew}
              </div>
            )}
            {/* badge */}

            <h1 className="max-w-7xl text-balance text-center text-4xl font-medium text-white md:text-6xl">
              {heroConfigs?.heading}
            </h1>

            <p className="mt-5 text-center font-mono text-xs text-white/80 md:text-lg">
              {heroConfigs?.subHeading}
            </p>
          </div>
          {/* Heading */}

          <AgentBuilderPrompt configs={heroConfigs} />

          {/* trusted by */}
          <div className="flex w-full flex-col items-center justify-center pt-20">
            <h3 className="rounded-full bg-white/5 px-5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-widest text-white ring-2 ring-white/10">
              Backed, built and trusted by
            </h3>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-8 md:gap-10">
              {heroConfigs?.trustedBy?.map((company, idx) => (
                <div
                  key={idx}
                  className="flex h-20 w-20 items-center justify-center"
                >
                  <svg
                    fill="none"
                    viewBox={`0 0 ${company?.viewbox}`}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full object-contain"
                    dangerouslySetInnerHTML={{ __html: company?.svg }}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* trusted by */}
        </section>
      </HeroHighlight>
      {/* hero section */}

      {/* Feature section */}
      <section className="flex flex-col items-center justify-start p-10 py-16">
        <h3 className="rounded-full bg-white/5 px-5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-widest text-white ring-2 ring-white/10">
          Key Features
        </h3>

        <h1 className="mt-5 max-w-2xl text-balance text-center text-4xl font-medium text-white md:text-6xl">
          {keyFeaturesConfigs?.heading}
        </h1>

        <p className="mt-5 max-w-2xl text-center font-mono text-xs text-white/80 md:text-base">
          {keyFeaturesConfigs?.subHeading}
        </p>

        {/* cta */}
        <div className="mt-10 flex items-center justify-center gap-5">
          <button className="rounded-full bg-skin-primary px-5 py-3 text-sm font-medium text-white">
            Start building now
          </button>
          <button className="rounded-full border border-gray-500 px-5 py-3 text-sm font-medium text-white">
            Schedule a demo
          </button>
        </div>
        {/* cta */}

        {/* bento grid */}
        <div className="mx-auto mt-20 grid w-full max-w-screen-lg grid-cols-1 justify-center gap-5 text-white md:grid-cols-6">
          <div className="grid grid-cols-1 gap-5 md:col-span-2">
            {/* slot 1 - 3 */}
            {keyFeaturesConfigs?.features
              ?.slice(0, keyFeaturesConfigs?.features?.length - 1)
              .map((feature, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center rounded-xl border border-white/20 p-5"
                >
                  <div className="flex flex-col items-start justify-between">
                    {feature?.icon && (
                      <svg
                        className="mb-2 size-8 text-skin-primary"
                        fill="none"
                        viewBox={`0 0 ${feature?.icon?.viewbox}`}
                        xmlns="http://www.w3.org/2000/svg"
                        dangerouslySetInnerHTML={{ __html: feature?.icon?.svg }}
                      />
                    )}

                    {feature?.title && (
                      <h2 className="text-xl font-medium text-white">
                        {feature?.title}
                      </h2>
                    )}

                    {feature?.description && (
                      <p className="mt-2 text-xs text-white/80">
                        {feature.description}
                      </p>
                    )}

                    {feature?.image && (
                      <img
                        src={feature.image.asset.url}
                        alt={feature.image.alt}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                </div>
              ))}
            {/* slot 1 - 3 */}
          </div>

          {keyFeaturesConfigs?.features?.length > 3 &&
            keyFeaturesConfigs?.features
              ?.slice(
                keyFeaturesConfigs?.features?.length - 1,
                keyFeaturesConfigs?.features?.length,
              )
              .map((feature, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center rounded-xl border border-white/20 p-5 md:col-span-4"
                >
                  <div className="flex flex-col items-start justify-between">
                    {feature?.icon && (
                      <svg
                        className="mb-2 size-8 text-skin-primary"
                        fill="none"
                        viewBox={`0 0 ${feature?.icon?.viewbox}`}
                        xmlns="http://www.w3.org/2000/svg"
                        dangerouslySetInnerHTML={{ __html: feature?.icon?.svg }}
                      />
                    )}

                    {feature?.title && (
                      <h2 className="text-xl font-medium text-white">
                        {feature?.title}
                      </h2>
                    )}

                    {feature?.description && (
                      <p className="mt-2 text-xs text-white/80">
                        {feature?.description}
                      </p>
                    )}

                    {feature?.image && (
                      <img
                        src={feature?.image?.asset?.url}
                        alt={feature?.image?.alt}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                </div>
              ))}
        </div>
        {/* bento grid */}
      </section>
      {/* Feature section */}

      {/* technology section */}
      <section className="flex flex-col items-center justify-start p-10 py-16">
        <h3 className="rounded-full bg-white/5 px-5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-widest text-white ring-2 ring-white/10">
          Our technology
        </h3>

        <h1 className="mt-5 max-w-7xl text-balance text-center text-4xl font-medium text-white md:text-6xl">
          {technologyConfigs?.heading}
        </h1>

        <p className="mt-5 max-w-5xl text-center font-mono text-xs text-white/80 md:text-base">
          {technologyConfigs?.subHeading}
        </p>

        {/* cta */}
        <div className="mt-10 flex items-center justify-center gap-5">
          <button className="rounded-full bg-skin-primary px-5 py-3 text-sm font-medium text-white">
            Start building now
          </button>
          <button className="rounded-full border border-gray-500 px-5 py-3 text-sm font-medium text-white">
            Schedule a demo
          </button>
        </div>
        {/* cta */}

        <div className="mx-auto mt-32 w-full max-w-screen-lg">
          <FeatureConnections config={technologyConfigs} />
        </div>
      </section>
      {/* technology section */}

      {/* why deepmodel */}
      <section className="relative flex flex-col items-center justify-start p-10 py-16">
        {/* background */}
        <div className="absolute inset-0 bg-skin-primary/10 [mask-image:linear-gradient(180deg,transparent,white,transparent)]">
          <div className="relative h-full w-full">
            <Grid
              width={50}
              height={50}
              x={-6}
              y={-6}
              squares={[
                [1, 1],
                [12, 3],
                [6, 4],
              ]}
              strokeDasharray={"4 2"}
              className={cn("inset-0 opacity-60")}
            />
          </div>
        </div>
        {/* background */}

        <div className="relative flex flex-col items-center">
          <h3 className="rounded-full bg-white/5 px-5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-widest text-white ring-2 ring-white/10">
            Why Deepmodel
          </h3>

          <h1 className="mt-5 max-w-7xl text-balance text-center text-4xl font-medium text-white md:text-6xl">
            {whyDeepmodelConfigs?.heading}
          </h1>

          <p className="mt-5 max-w-5xl text-center font-mono text-xs text-white/80 md:text-base">
            {whyDeepmodelConfigs?.subHeading}
          </p>

          <div className="mx-auto mt-24 grid max-w-screen-lg gap-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
            {whyDeepmodelConfigs?.reasons?.map((reason, idx) => (
              <div key={idx}>
                <div className="w-min rounded-lg bg-skin-secondary p-1 text-skin-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-7 text-skin-primary"
                    viewBox={`0 0 ${reason?.icon?.viewbox}`}
                    style={{
                      stroke: "currentColor",
                    }}
                    preserveAspectRatio="xMidYMid meet"
                    dangerouslySetInnerHTML={{ __html: reason?.icon?.svg }}
                  />
                </div>

                <h3 className="mt-3 text-xl font-medium text-white">
                  {reason?.title}
                </h3>

                <p className="mt-2 text-sm/5 text-white/80">
                  {reason?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* why deepmodel */}
    </main>
  );
};

export default Page;
