"use client";

import { useEffect, useState } from "react";
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/20/solid";

type GoToSummaryButtonProps = {
  topRef: React.RefObject<HTMLDivElement>;
  summaryRef: React.RefObject<HTMLDivElement>;
  scrollableContainerRef: React.RefObject<HTMLDivElement>;
};

const GoToSummaryButton = ({
  topRef,
  summaryRef,
  scrollableContainerRef,
}: GoToSummaryButtonProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    const handleScroll = () => {
      if (
        scrollableContainerRef.current?.scrollTop &&
        scrollableContainerRef.current?.scrollTop > 100
      ) {
        setScrollDirection("up");
      } else {
        setScrollDirection("down");
      }
    };

    scrollableContainerRef.current?.addEventListener("scroll", handleScroll);

    return () => {
      scrollableContainerRef.current?.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, [scrollableContainerRef]);

  const goToSummary = () => {
    summaryRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const goToTop = () => {
    topRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onClick = () => {
    if ((scrollableContainerRef.current?.scrollTop ?? 0) > 100) {
      goToTop();
    } else {
      goToSummary();
    }
  };

  return (
    <>
      {showTooltip && (
        <div className="absolute -right-7 -top-10 z-20 border border-black bg-white p-2">
          Go to Summary
        </div>
      )}
      <button
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="absolute right-2 top-2 z-20 border border-black bg-white bg-white p-2 hover:bg-gray-100"
      >
        {scrollDirection === "down" ? (
          <ChevronDoubleDownIcon className="h-6 w-6" />
        ) : (
          <ChevronDoubleUpIcon className="h-6 w-6" />
        )}
      </button>
    </>
  );
};

export default GoToSummaryButton;
