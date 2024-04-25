export default function Loading() {
  return (
    <div className="h-app flex w-full justify-center px-4 pt-20 sm:py-10">
      <div className="w-lg flex flex-col space-y-8">
        <div className="relative h-full w-full">
          <div className="absolute bottom-2 left-2 z-10 flex h-full w-full flex-col flex-col justify-between space-y-2 overflow-hidden border border-black bg-white">
            <div className="space-y-4 p-4">
              {Array.from({ length: 15 }).map((_, i) => (
                <div className="h-12 w-full animate-pulse bg-gray-300" />
              ))}
            </div>
          </div>
          <div className="absolute right-2 top-2 h-full w-full bg-black" />
        </div>
        <div className="flex h-24 w-full justify-end">
          <div className="relative h-11 w-24">
            <div className="absolute bottom-1 left-1 z-10 flex h-full w-full w-full justify-center border border-black bg-white p-2 p-4 hover:cursor-default">
              <div className="h-full w-full animate-pulse bg-gray-300" />
            </div>
            <div className="absolute right-1 top-1 h-full w-full bg-black" />
          </div>
        </div>
      </div>
    </div>
  );
}
