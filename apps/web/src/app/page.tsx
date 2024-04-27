import Link from "next/link";
import { LandingPageCard } from "./components";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { title } from "process";

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

export default async function Page(): Promise<JSX.Element> {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="flex w-full flex-col items-center gap-y-16">
        <div className="sm:h-app w-full p-8 sm:max-w-lg">
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
                  <div className="flex">
                    <div className="relative h-60 w-60">
                      {isEven && !isLast && (
                        <div className="absolute -bottom-44 right-0 h-72 w-1/5 border-y border-l border-black" />
                      )}
                    </div>
                    <LandingPageCard
                      key={card.title}
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
                  <div className="grid grid-cols-2">
                    {isEven && (
                      <div className="relative h-60 w-60">
                        {!isLast && (
                          <div className="absolute -bottom-2 right-0 h-32 w-1/2 border-l border-t border-black" />
                        )}
                      </div>
                    )}
                    <LandingPageCard
                      key={card.title}
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
        <div className="sm:h-app flex items-center p-8">
          <div className="bg-dotted-spacing-4 bg-dotted-gray-500 flex h-fit w-full flex-col items-center justify-center space-y-8 px-8 pb-16 pt-8">
            <span className="bg-white px-2 py-1 text-center text-4xl font-extralight">
              <span>Here is how it </span>
              <span className="font-bold text-rose-500">Works</span>
            </span>
            <div className="grid w-full grid-cols-1 place-items-center lg:grid-cols-7">
              {processCards.map((card, i) => {
                const isLast = i === processCards.length - 1;
                return (
                  <>
                    <LandingPageCard
                      key={card.title}
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
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="sm:h-app flex w-full items-center justify-center p-8">
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
