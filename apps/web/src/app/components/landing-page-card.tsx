import clsx from "clsx";

type LandingPageCardProps = {
  title: string;
  description: string;
  tags: string[];
  size?: "xs" | "sm" | "md" | "lg";
};

export const LandingPageCard: React.FC<LandingPageCardProps> = ({
  title,
  description,
  tags,
  size = "lg",
}) => {
  return (
    <div
      className={clsx([
        "relative aspect-square",
        {
          "w-24": size === "xs",
          "w-36": size === "sm",
          "w-42": size === "md",
          "w-60": size === "lg",
        },
      ])}
    >
      <div className="absolute bottom-2 left-2 z-10 flex h-full w-full flex-col justify-between space-y-2 border border-black bg-white p-2">
        <div className="flex flex-col space-y-2">
          <span
            className={clsx([
              "font-bold text-rose-500",
              { "text-xl": size === "lg" },
              { "text-lg": size === "md" },
              { "text-base": size === "sm" },
              { "text-sm": size === "xs" },
            ])}
          >
            {title}
          </span>
          <p
            className={clsx([
              "leading-4",
              {
                "text-lg": size === "lg",
                "text-md": size === "md",
                "text-sm": size === "sm",
                "text-xs": size === "xs",
              },
            ])}
          >
            {description}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {tags?.map((tag, i) => (
            <div key={i} className="group relative h-6 w-24">
              <span className="absolute bottom-1 left-1 z-10 h-full w-full bg-indigo-500 px-2 font-extralight text-white transition-all duration-150">
                <span
                  className={clsx([
                    { "text-sm": size === "lg" },
                    { "text-xs": size === "md" },
                    { "text-xs": size === "sm" },
                    { "text-xs": size === "xs" },
                  ])}
                >
                  {tag}
                </span>
              </span>
              <span className="absolute right-0 top-0 h-full w-full bg-black transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-0 h-full w-full bg-black" />
    </div>
  );
};

export default LandingPageCard;
