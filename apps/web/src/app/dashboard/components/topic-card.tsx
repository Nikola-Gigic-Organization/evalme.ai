import Link from "next/link";

import { Topic } from "@/gql/graphql";

export interface TopicCardProps {
  slug?: Topic["slug"];
  title?: Topic["title"];
  description?: Topic["description"];
  tags?: string[];
  viewerAnsweredAllQuestions?: boolean;
}

const TopicCard: React.FC<TopicCardProps> = ({
  slug,
  title,
  description,
  tags,
  viewerAnsweredAllQuestions,
}) => {
  const href = viewerAnsweredAllQuestions
    ? `/topic/${slug}/overview`
    : `/topic/${slug}`;
  return (
    <Link className="group relative h-56 sm:w-56" href={href}>
      <div className="absolute bottom-1 left-1 z-20 flex h-full w-full origin-bottom-left flex-col justify-between space-y-4 border border-black bg-white p-4 transition-all duration-300 ease-in-out group-hover:bottom-2 group-hover:left-2">
        <div className="overflow-y-hidden">
          <span className="text-lg font-bold">{title}</span>
          <p>{description}</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="h-fit w-fit bg-black px-2 font-extralight text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute right-1 top-1 z-10 h-full w-full origin-top-right bg-black transition-all duration-300 group-hover:right-2 group-hover:top-2" />
    </Link>
  );
};

export default TopicCard;
