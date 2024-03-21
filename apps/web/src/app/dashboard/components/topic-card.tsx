import Link from "next/link";

import { Topic } from "@/gql/graphql";

export interface TopicCardProps {
  slug?: Topic["slug"];
  title?: Topic["title"];
  description?: Topic["description"];
  tags?: string[];
}

const TopicCard: React.FC<TopicCardProps> = ({
  slug,
  title,
  description,
  tags,
}) => {
  return (
    <Link className="group relative h-56 sm:w-56" href={`/topic/${slug}`}>
      <div className="absolute bottom-0 left-0 z-20 flex h-full w-full origin-bottom-left flex-col justify-between border border-black bg-white p-4 transition-all duration-300 ease-in-out group-hover:bottom-2 group-hover:left-2">
        <div>{title}</div>
        <div>{description}</div>
        <div className="grid grid-cols-2 gap-2">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="h-fit w-full bg-black px-2 font-extralight text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-0 z-10 h-full w-full origin-top-right bg-black transition-all duration-300 group-hover:right-2 group-hover:top-2" />
    </Link>
  );
};

TopicCard.displayName = "TopicCard";

export default TopicCard;
