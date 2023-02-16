import Head from "next/head";
import { useState } from "react";
import SearchField from "@/components/SearchField";
import { KitResponse } from "@/interfaces/kit";
import ResultsTable from "@/components/ResultsTable";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<KitResponse | null>(null);

  const searchParams = new URLSearchParams({ limit: "10", offset: "0" });
  const onSearch = async () => {
    searchParams.set("labelId", searchValue);

    try {
      const response = await fetch(`/api/kits?${searchParams.toString()}`);
      const responseJson = (await response.json()) as KitResponse;
      setSearchResults(responseJson);
    } catch (e) {
      console.error("Error fetching kit search results", e);
    }
  };

  return (
    <>
      <Head>
        <title>Biobot Kit Search</title>
        <meta name="description" content="Search for a Biobot kit" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://biobot.io/wp-content/uploads/2021/08/cropped-favicon-1-32x32.png"
        />
      </Head>
      <main className="flex items-center flex-col p-2 pt-3 md:p-5 gap-4 min-w-80">
        <h1 className="text-3xl font-bold text-center">Biobot Kit Search</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch();
          }}
        >
          <SearchField
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </form>
        {searchResults?.kits.length ? (
          <ResultsTable searchResults={searchResults} />
        ) : (
          <div className="text-center">
            {searchResults === null
              ? "Use the search bar above to lookup the status of your kit."
              : "No results found."}
          </div>
        )}
      </main>
    </>
  );
}
