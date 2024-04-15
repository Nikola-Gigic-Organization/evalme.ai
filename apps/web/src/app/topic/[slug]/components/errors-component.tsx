import { useState } from "react";
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";

export default function ErrorsComponent({
  errors,
  clearErrors,
}: {
  errors: Array<{ message: string }>;
  clearErrors: () => void;
}) {
  const [activeErrorIndex, setActiveErrorIndex] = useState(0);
  const activeError = errors?.at(activeErrorIndex);

  return (
    <div className="relative h-24 w-full">
      <div className="absolute bottom-2 left-2 z-10 flex h-full w-full justify-between overflow-hidden border border-black bg-white px-4 py-2">
        <div className="flex w-full flex-col space-y-2">
          <div className="flex w-full items-center justify-between">
            <span className="font-bold text-rose-500">Error: </span>
            <button onClick={clearErrors}>
              <XMarkIcon className="h-5 w-5 text-black" />
            </button>
          </div>
          <span>{activeError?.message}</span>
        </div>
        {errors.length > 1 && (
          <div className="flex space-x-2">
            <button
              disabled={activeErrorIndex === 0}
              className="text-black disabled:text-gray-300"
              onClick={() => {
                setActiveErrorIndex((prev) => prev - 1);
              }}
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
              disabled={activeErrorIndex === errors.length - 1}
              className="text-black disabled:text-gray-300"
              onClick={() => {
                setActiveErrorIndex((prev) => prev + 1);
              }}
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        )}
      </div>
      <div className="absolute right-2 top-2 h-full w-full bg-black" />
    </div>
  );
}
