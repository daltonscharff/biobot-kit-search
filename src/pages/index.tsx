import Head from "next/head";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Home() {
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
        <form>
          <fieldset className="w-full space-y-1 text-gray-800">
            <div className="relative">
              <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                <button
                  title="Search"
                  className="p-1 focus:outline-none focus:ring"
                >
                  <MagnifyingGlassIcon className="h-5" />
                </button>
              </span>
              <input
                type="search"
                name="id"
                placeholder="Kit Label ID"
                className="md:w-72 py-2 pl-2 pr-10 text-sm rounded-sm w-auto focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50 focus:border-blue-600 border"
              />
            </div>
          </fieldset>
        </form>
      </main>
    </>
  );
}
