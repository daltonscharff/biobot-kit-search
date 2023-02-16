import Head from "next/head";
import { useState } from "react";
import SearchField from "@/components/SearchField";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const onSearch = () => {
    console.log("search for", searchValue);
    setSearchValue("");
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
      <main className="flex items-center flex-col p-2 md:p-4 gap-4">
        <h1 className="text-3xl font-bold">Biobot Kit Search</h1>
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
        <div>other stuff</div>
      </main>
    </>
  );
}
