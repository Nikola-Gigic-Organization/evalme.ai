export default function Loading() {
  return (
    <div className="h-app flex justify-center p-8">
      <div className="bg-dotted-spacing-4 bg-dotted-gray-500 w-lg mt-10 flex h-fit flex-col gap-y-8 p-8 sm:mt-0">
        <div className="relative h-40 w-full sm:h-28 sm:pt-0">
          <div className="absolute bottom-2 left-2 z-10 flex h-full w-full flex-col justify-between border border-black bg-white p-4">
            <span className="text-2xl font-bold">Details</span>
            <div className="flex w-full space-x-2">
              <div className="h-7 w-56 animate-pulse border-b border-black bg-gray-200 p-1 outline-0 ring-0 placeholder:text-black" />
              <div className="h-7 w-56 animate-pulse border-b border-black bg-gray-200 p-1 outline-0 ring-0" />
            </div>
          </div>
          <div className="absolute right-2 top-2 h-full w-full bg-black" />
        </div>
        <div className="flex w-full justify-end">
          <div className="group relative h-11 w-24">
            <button className="absolute -right-1 -top-1 z-10 h-full w-full border border-black bg-white p-2 transition-all duration-300 group-hover:-right-2 group-hover:-top-2">
              Save
            </button>
            <div className="absolute -bottom-1 -left-1 h-full w-full bg-black transition-all duration-300 group-hover:-bottom-2 group-hover:-left-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
