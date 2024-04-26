import { LandingPageCard } from "./components";

const interviewPrepCards = [
  {
    title: "Frontend",
    description:
      "Learn the most common frontend interview questions and answers.",
    tag: "React",
  },
  {
    title: "Backend",
    description:
      "Learn the most common backend interview questions and answers.",
    tag: "Node.js",
  },
  {
    title: "Fullstack",
    description:
      "Learn the most common fullstack interview questions and answers.",
    tag: "Next.js",
  },
];

const processCards = [
  {
    title: "Pick a Topic",
    description: "Choose a topic you want to evaluate your knowledge on.",
    tag: "Step 1",
  },
  {
    title: "Answer Questions",
    description:
      "Go through topic specific questions and get immediate feedback to your answers from our AI reviewer.",
    tag: "Step 2",
  },
  {
    title: "Review Evaluation",
    description:
      "Get a thorough review and a summary of your answers which you can save for further study.",
    tag: "Step 3",
  },
  {
    title: "Repeat",
    description: "Repeat the process to master the topic.",
    tag: "Step 4",
  },
];

export default async function Page(): Promise<JSX.Element> {
  return (
    <div className="h-app w-full p-8">
      <div className="flex w-full flex-col items-center gap-y-8">
        <div className="bg-dotted-spacing-4 bg-dotted-gray-500 w-lg flex flex-col items-center py-8">
          <span className="bg-white px-4 py-1 text-center text-4xl font-extralight">
            <span className="font-bold text-rose-500">Ace</span> Your Next
            Interview.
            <span className="font-bold text-rose-500"> Master</span> the
            Questions That Matter
          </span>
          <div className="mt-11 flex flex-col space-y-4">
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
                    tag={card.tag}
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
        <div className="w-full border border-dashed border-gray-500" />
        <div className="bg-dotted-spacing-4 bg-dotted-gray-500 flex w-full flex-col items-center space-y-8 p-8">
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
                    tag={card.tag}
                  />
                  {!isLast && (
                    <>
                      <div className="hidden w-full border border-black lg:block" />
                      <div className="block h-16 border border-black lg:hidden" />
                    </>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
