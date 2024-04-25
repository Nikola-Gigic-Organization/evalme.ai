const LoadingTopicCard = () => {
  return (
    <div className="relative min-h-60 min-w-60">
      <div className="absolute bottom-2 left-2 z-10 flex h-full w-full flex-col justify-between border border-black bg-white p-4">
        <div className="h-fit w-full space-y-2">
          <div className="h-8 w-full animate-pulse bg-gray-200" />
          <div className="h-14 w-full animate-pulse bg-gray-200" />
        </div>
        <div className="flex w-full justify-between space-x-4">
          <div className="h-8 w-full animate-pulse bg-gray-200" />
          <div className="h-8 w-full animate-pulse bg-gray-200" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-0 h-full w-full bg-black" />
    </div>
  );
};

export default LoadingTopicCard;
