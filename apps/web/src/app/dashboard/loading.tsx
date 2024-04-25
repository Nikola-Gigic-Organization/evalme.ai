import { LoadingTopicCard } from "@repo/ui";

export default function Loading() {
  return (
    <div className="space-y-16 p-8">
      <div className="w-full space-y-2">
        <div className="col-span-4 flex w-full space-x-4">
          <div className="flex h-10 w-64 animate-pulse space-x-2 bg-gray-200" />
        </div>
        <div className="flex w-full flex-1 flex-wrap gap-8 border-l-4 border-t-4 border-gray-500 px-3 py-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <LoadingTopicCard key={i} />
          ))}
        </div>
      </div>
      <div className="w-full space-y-2">
        <div className="col-span-4 flex w-full space-x-4">
          <div className="flex h-10 w-64 animate-pulse space-x-2 bg-gray-200" />
        </div>
        <div className="flex w-full flex-1 flex-wrap gap-8 border-l-4 border-t-4 border-gray-500 px-3 py-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <LoadingTopicCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
