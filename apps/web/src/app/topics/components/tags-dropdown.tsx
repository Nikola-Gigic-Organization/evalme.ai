import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import { Combobox } from "@headlessui/react";
import { Tag } from "@/gql/graphql";
import clsx from "clsx";
import { CheckCircleIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

type TagsDropdownProps = {
  tags?: DeepPartial<Tag | undefined | null>[] | null;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
};

const TagsDropdown = ({
  tags,
  selectedTags,
  setSelectedTags,
}: TagsDropdownProps) => {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const filteredTags = tags?.filter((tag) =>
    tag?.name?.toLowerCase().startsWith(search.toLowerCase()),
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Combobox
      value={selectedTags}
      as="div"
      className="relative w-56"
      onChange={(value) => {
        setSelectedTags(value);
        router.replace(`/topics?tags=${value.map((tag) => tag).join(",")}`);
      }}
      multiple
    >
      <Combobox.Button className="flex w-56 cursor-pointer items-center border-b border-black">
        <Combobox.Input
          placeholder={
            search
              ? search
              : selectedTags.length
                ? selectedTags.join(", ")
                : "Search Tags"
          }
          value={search}
          onChange={handleSearch}
          className="h-10 w-full outline-0 ring-0 placeholder:text-black"
        />
        <ChevronUpDownIcon
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </Combobox.Button>
      <Combobox.Options className="absolute top-11 z-50 flex w-56 flex-col border border-black bg-white p-2">
        {filteredTags?.length ? (
          filteredTags?.map((tag) => (
            <Combobox.Option key={tag?.id} value={tag?.name} as={Fragment}>
              {({ selected, active }) => {
                return (
                  <div
                    className={clsx([
                      "flex cursor-pointer items-center space-x-2 px-2 py-1",
                      { "bg-indigo-500 text-white": active },
                      { "text-black": !active },
                    ])}
                  >
                    {selected && (
                      <CheckCircleIcon
                        className={clsx([
                          "h-5 w-5",
                          {
                            "text-white": active,
                            "text-black": !active,
                          },
                        ])}
                      />
                    )}
                    <span>{tag?.name}</span>
                  </div>
                );
              }}
            </Combobox.Option>
          ))
        ) : (
          <div className="px-2 py-1">No tags found</div>
        )}
      </Combobox.Options>
    </Combobox>
  );
};

export default TagsDropdown;
