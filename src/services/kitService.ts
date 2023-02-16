import { Kit } from "@/interfaces/kit";
import { KitFilter } from "@/interfaces/kit";

const kits: Kit[] = require("../../data/KITS_SHIPPING_DATA");

export function findAllKits(options: KitFilter) {
  const filteredKits = kits.filter((kit) => {
    const strippedKitLabelId = kit.label_id.replaceAll("-", "");
    const strippedSearchLabelId = options.labelId.replaceAll("-", "");
    return strippedKitLabelId.startsWith(strippedSearchLabelId);
  });

  return {
    total: filteredKits.length,
    limit: options.limit,
    offset: options.offset,
    kits: filteredKits.slice(options.offset, options.offset + options.limit),
  };
}

export function findKitById(id: Kit["id"]) {
  return kits.find((kit) => kit.id === id);
}
