import { KitResponse } from "@/interfaces/kit";

type Props = {
  searchResults: KitResponse;
};

export default function ResultsTable({ searchResults }: Props) {
  return (
    <table className="w-full md:w-[500px] text-sm">
      <thead>
        <tr className="font-semibold text-sm capitalize">
          <td className="bg-zinc-100 p-3">
            label <span className="uppercase">id</span>
          </td>
          <td className="bg-zinc-100 p-3">tracking code</td>
        </tr>
      </thead>
      <tbody>
        {searchResults.kits?.map((kit) => (
          <tr
            key={kit.id}
            className="border-b border-opacity-20 border-zinc-300 bg-zinc-50/25"
          >
            <td className="p-3">{kit.label_id}</td>
            <td className="p-3">
              <a
                target="_blank"
                href={`https://www.fedex.com/fedextrack?trknbr=${kit.shipping_tracking_code}`}
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                {kit.shipping_tracking_code}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
