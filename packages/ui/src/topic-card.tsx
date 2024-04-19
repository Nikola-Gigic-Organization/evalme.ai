import Link from "next/link";

import { Topic } from "../../../apps/web/src/gql/graphql";

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
    ? `/topics/${slug}/overview`
    : `/topics/${slug}`;
  return (
    <div className="group relative min-h-60 min-w-60">
      <Link href={href}>
        <div className="absolute bottom-1 left-1 z-10 flex h-full w-full flex-col justify-between space-y-2 border border-black bg-white p-2 transition-all duration-300 group-hover:bottom-2 group-hover:left-2">
          <div className="space-y-2">
            <span className="text-lg font-bold text-black transition-colors duration-300 group-hover:text-rose-500">
              {title}
            </span>
            <p className="leading-4">{description}</p>
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
        <div className="absolute right-1 top-1 h-full w-full bg-black transition-all duration-300 group-hover:right-2 group-hover:top-2" />
      </Link>
    </div>
  );
};

export default TopicCard;
