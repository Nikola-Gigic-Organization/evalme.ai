import { LoadingTopicCard } from "@repo/ui";

export default function Loading() {
  return (
    <div className="p-8">
      <div className="w-full space-y-2">
        <div className="col-span-4 flex w-full items-start justify-between sm:items-end sm:px-2.5">
          <div className="flex h-10 w-56 animate-pulse space-x-2" />
        </div>
        <div className="flex w-full flex-1 flex-wrap gap-8 border-l-4 border-t-4 border-black p-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <LoadingTopicCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
