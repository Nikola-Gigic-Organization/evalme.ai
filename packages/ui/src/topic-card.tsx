"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const cardHref = viewerAnsweredAllQuestions
    ? `/topics/${slug}/overview`
    : `/topics/${slug}`;
  return (
    <div className="group relative min-h-60 min-w-60">
      <Link href={cardHref}>
        <div className="absolute bottom-1 left-1 z-10 flex h-full w-full flex-col justify-between space-y-2 border border-black bg-white p-2 transition-all duration-300 group-hover:bottom-2 group-hover:left-2">
          <div className="space-y-2">
            <span className="text-xl font-bold text-black transition-colors duration-300 group-hover:text-rose-500">
              {title}
            </span>
            <p className="leading-4">{description}</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {tags?.map((tag) => (
              <button
                key={tag}
                className="group relative h-6 w-24"
                onClick={(e) => {
                  e.preventDefault();
                  router.push(`/topics?tags=${tag}`);
                }}
              >
                <span className="absolute bottom-0 left-0 z-10 h-full w-full bg-indigo-500 px-2 font-extralight text-white transition-all duration-150 hover:bottom-1 hover:left-1 active:-bottom-1 active:-left-1">
                  {tag}
                </span>
                <span className="absolute right-0 top-0 h-full w-full bg-black transition-all duration-300 group-hover:right-1 group-hover:top-1" />
              </button>
            ))}
          </div>
        </div>
        <div className="absolute right-1 top-1 h-full w-full bg-black transition-all duration-300" />
      </Link>
    </div>
  );
};

export default TopicCard;
