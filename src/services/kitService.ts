import { Kit } from "@/interfaces/kit";

const kits: Kit[] = require("../../data/KITS_SHIPPING_DATA");

interface SearchOptions {
  labelId: string;
  limit: number;
  offset: number;
}

export function findAllKits(opts?: Partial<SearchOptions>) {
  const options: SearchOptions = {
    labelId: opts?.labelId ?? "",
    limit: opts?.limit ?? 10,
    offset: opts?.offset ?? 0,
  };
  return kits
    .filter((kit) => {
      const strippedKitLabelId = kit.label_id.replaceAll("-", "");
      const strippedSearchLabelId = options.labelId.replaceAll("-", "");
      return strippedKitLabelId.startsWith(strippedSearchLabelId);
    })
    .slice(options.offset, options.offset + options.limit);
}

export function findKitById(id: Kit["id"]) {
  return kits.find((kit) => kit.id === id);
}
