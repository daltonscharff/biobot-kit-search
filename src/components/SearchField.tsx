import { Kit, KitResponse } from "@/interfaces/kit";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, useEffect, useRef, useState } from "react";

type Props = {
  searchValue: string;
  setSearchValue: (search: string) => void;
};

export default function SearchField({ searchValue, setSearchValue }: Props) {
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState<
    Kit["label_id"][]
  >([]);
  const autocompleteSearchParams = new URLSearchParams({
    limit: "5",
  });
  const throttleSearch = useRef(false);

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    if (e.target.value.length < 1 || throttleSearch.current) return;

    throttleSearch.current = true;

    setTimeout(async () => {
      throttleSearch.current = false;
      autocompleteSearchParams.set("labelId", e.target.value);

      try {
        const suggestionResponse = await fetch(
          `/api/kits?${autocompleteSearchParams.toString()}`
        );
        const suggestionJson = (await suggestionResponse.json()) as KitResponse;
        const suggestedLabelIds = suggestionJson.kits.map(
          (kit) => kit.label_id
        );
        setAutocompleteSuggestions(suggestedLabelIds);
      } catch (e) {
        console.error("Error fetching autocomplete suggestions", e);
      }
    }, 500);
  };

  useEffect(() => {
    if (searchValue.length === 0) {
      setAutocompleteSuggestions([]);
    }
  }, [searchValue]);

  return (
    <fieldset className="w-full space-y-1 text-gray-800">
      <div className="relative">
        <span className="absolute inset-y-0 right-0 flex items-center pr-2">
          <button title="Search" className="p-1 focus:outline-none focus:ring">
            <MagnifyingGlassIcon className="h-5" />
          </button>
        </span>
        <div className="flex flex-col w-auto md:w-80">
          <input
            type="search"
            list="searchFieldDatalist"
            name="id"
            placeholder="Kit Label ID"
            className="py-2 pl-2 pr-10 text-sm rounded-sm focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50 focus:border-blue-600 border"
            value={searchValue}
            onChange={onChange}
          />
          <datalist id="searchFieldDatalist">
            {autocompleteSuggestions.map((suggestion, i) => (
              <option key={`${suggestion}_${i}`} value={suggestion}>
                {suggestion}
              </option>
            ))}
          </datalist>
        </div>
      </div>
    </fieldset>
  );
}
