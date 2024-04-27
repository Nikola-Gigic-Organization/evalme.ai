"use client";

import { LandingPageCard } from "./components";
import { Fragment, useEffect, useRef } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

const interviewPrepCards = [
  {
    title: "Frontend",
    description:
      "Learn the most common frontend interview questions and answers.",
    tags: ["React"],
  },
  {
    title: "Backend",
    description:
      "Learn the most common backend interview questions and answers.",
    tags: ["Node.js"],
  },
  {
    title: "Fullstack",
    description:
      "Learn the most common fullstack interview questions and answers.",
    tags: ["Next.js"],
  },
];

const processCards = [
  {
    title: "Pick a Topic",
    description: "Choose a topic you want to evaluate your knowledge on.",
    tags: ["Step 1"],
  },
  {
    title: "Answer Questions",
    description:
      "Go through topic specific questions and get immediate feedback to your answers from our AI reviewer.",
    tags: ["Step 2"],
  },
  {
    title: "Review Evaluation",
    description:
      "Get a thorough review and a summary of your answers which you can save for further study.",
    tags: ["Step 3"],
  },
  {
    title: "Repeat",
    description: "Repeat the process to master the topic.",
    tags: ["Step 4"],
  },
];

const technologyCards = [
  {
    title: "Frameworks",
    description: "Learn the most common frameworks.",
    tags: ["React", "Angular", "Vue"],
  },
  {
    title: "Languages",
    description: "Learn the most common languages.",
    tags: ["JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Databases",
    description: "Learn the most common databases.",
    tags: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    description: "Learn the most common tools.",
    tags: ["Git", "Docker", "Kubernetes"],
  },
];

const CombinedChevronDownIcon = () => {
  return (
    <div className="relative flex flex-col">
      <ChevronDownIcon className="animate-fade absolute -right-4 -top-3 h-8 w-8" />
      <ChevronDownIcon className="animate-fade-delay absolute -bottom-3 -right-4 h-8 w-8" />
    </div>
  );
};

const CombinedChevronUpIcon = () => {
  return (
    <div className="relative flex flex-col">
      <ChevronUpIcon className="animate-fade absolute -right-4 -top-3 h-8 w-8" />
      <ChevronUpIcon className="animate-fade-delay animate-fade absolute -bottom-3 -right-4 h-8 w-8" />
    </div>
  );
};

const RefButton: React.FC<{
  downFocusRef?: React.RefObject<HTMLDivElement>;
  upFocusRef?: React.RefObject<HTMLDivElement>;
  upDirectionLook?: boolean;
  direction: "top" | "down" | "up";
}> = ({
  downFocusRef,
  upFocusRef,
  upDirectionLook = true,
  direction = "down",
}) => {
  const directionRef =
    direction === "down" || direction === "top" ? downFocusRef : upFocusRef;
  return (
    <div className={clsx(["group relative h-10 w-20"])}>
      <button
        onClick={() =>
          directionRef?.current?.scrollIntoView({
            behavior: "smooth",
            block: direction === "top" ? "start" : "center",
          })
        }
        className="absolute bottom-1 left-1 z-10 flex h-full w-full items-center justify-center border border-black bg-white p-1 transition-all duration-300 group-hover:bottom-2 group-hover:left-2"
      >
        {direction === "down" && <CombinedChevronDownIcon />}
        {direction === "up" && <CombinedChevronUpIcon />}
        {direction === "top" &&
          (upDirectionLook ? (
            <div className="flex items-center space-x-4 pr-1.5">
              <span>Top</span>
              <div>
                <div className="relative flex flex-col">
                  <ChevronUpIcon className="animate-fade absolute -right-3 -top-2.5 h-7 w-7" />
                  <ChevronUpIcon className="animate-fade-delay animate-fade absolute -bottom-3 -right-3 h-7 w-7" />
                </div>
              </div>
            </div>
          ) : (
            <CombinedChevronUpIcon />
          ))}
      </button>
      <div className="absolute bottom-0 left-0 h-full w-full bg-black" />
    </div>
  );
};

export default function Page(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const landingDivRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const everythingYouNeedRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full overflow-x-hidden">
      <div className="flex w-full flex-col items-center gap-y-16">
        <div
          ref={landingDivRef}
          className="sm:h-app w-full px-8 pb-20 pt-8 sm:max-w-lg"
        >
          <div className="absolute bottom-4 left-0 flex w-full justify-center">
            <RefButton direction="down" downFocusRef={howItWorksRef} />
          </div>
          <div className="bg-dotted-spacing-4 bg-dotted-gray-500 flex h-full w-full flex-col items-center p-8">
            <span className="bg-white p-1 text-center text-4xl font-extralight">
              <span className="font-bold text-rose-500">Ace</span> Your Next
              Interview.
              <span className="font-bold text-rose-500"> Master</span> the
              Questions That Matter
            </span>
            <div className="mt-11 block space-y-16 md:hidden">
              {interviewPrepCards.map((card, i) => {
                const isEven = i % 2 === 0;
                const isLast = i === interviewPrepCards.length - 1;
                return (
                  <div key={card.title} className="flex">
                    <div className="relative h-60 w-60">
                      {isEven && !isLast && (
                        <div className="absolute -bottom-44 right-0 h-72 w-1/5 border-y border-l border-black" />
                      )}
                    </div>
                    <LandingPageCard
                      title={card.title}
                      description={card.description}
                      tags={card.tags}
                    />
                    <div className="relative h-60 w-60">
                      {!isEven && !isLast && (
                        <div className="absolute -bottom-44 left-0 h-72 w-1/5 border-y border-r border-black" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="hidden h-full flex-col justify-center space-y-4 md:flex">
              {interviewPrepCards.map((card, i) => {
                const isEven = i % 2 === 0;
                const isLast = i === interviewPrepCards.length - 1;
                return (
                  <div key={card.title} className="grid grid-cols-2">
                    {isEven && (
                      <div className="relative h-60 w-60">
                        {!isLast && (
                          <div className="absolute -bottom-2 right-0 h-32 w-1/2 border-l border-t border-black" />
                        )}
                      </div>
                    )}
                    <LandingPageCard
                      title={card.title}
                      description={card.description}
                      tags={card.tags}
                    />
                    {!isEven && (
                      <div className="relative h-60 w-60">
                        {!isLast && (
                          <div className="absolute -bottom-2 left-0 h-32 w-1/2 border-r border-t border-black" />
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          ref={howItWorksRef}
          className="sm:h-app relative flex items-center p-8"
        >
          <div className="absolute left-0 top-4 flex w-full justify-center">
            <RefButton
              direction="top"
              downFocusRef={landingDivRef}
              upDirectionLook={false}
            />
          </div>
          <div className="absolute bottom-4 left-0 flex w-full justify-center">
            <RefButton direction="down" downFocusRef={everythingYouNeedRef} />
          </div>
          <div className="bg-dotted-spacing-4 bg-dotted-gray-500 flex h-fit w-full flex-col items-center justify-center space-y-8 px-8 pb-16 pt-8">
            <span className="bg-white px-2 py-1 text-center text-4xl font-extralight">
              <span>Here is how it </span>
              <span className="font-bold text-rose-500">Works</span>
            </span>
            <div className="grid w-full grid-cols-1 place-items-center lg:grid-cols-7">
              {processCards.map((card, i) => {
                const isLast = i === processCards.length - 1;
                return (
                  <Fragment key={card.title}>
                    <LandingPageCard
                      title={card.title}
                      description={card.description}
                      tags={card.tags}
                    />
                    {!isLast && (
                      <>
                        <div className="hidden w-full pb-4 lg:block">
                          <div className="w-full border-b border-black" />
                        </div>
                        <div className="block h-16 border border-black lg:hidden" />
                      </>
                    )}
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
        <div
          ref={everythingYouNeedRef}
          className="sm:h-app relative flex w-full items-center justify-center p-8"
        >
          <div className="absolute left-0 top-0 flex w-full justify-center">
            <RefButton direction="up" upFocusRef={howItWorksRef} />
          </div>
          <div className="absolute bottom-8 left-0 flex w-full justify-center">
            <RefButton direction="top" downFocusRef={landingDivRef} />
          </div>
          <div className="bg-dotted-spacing-4 bg-dotted-gray-500 w-lg flex h-fit flex-col items-center justify-center space-y-8 px-8 pb-16 pt-8">
            <span className="bg-white pb-1 text-4xl">
              <span className="font-bold text-rose-500">Everything</span> you
              Need
            </span>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {technologyCards.map((card) => {
                return (
                  <LandingPageCard
                    key={card.title}
                    title={card.title}
                    description={card.description}
                    tags={card.tags}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
