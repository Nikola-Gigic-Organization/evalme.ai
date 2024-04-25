const LoadingTopicCard = () => {
  return (
    <div className="relative min-h-60 min-w-60">
      <div className="absolute bottom-1 left-1 z-10 h-full w-full animate-pulse bg-gray-200 bg-white p-4" />
      <div className="absolute bottom-0 left-0 z-0 h-full w-full bg-black" />
    </div>
  );
};

export default LoadingTopicCard;
