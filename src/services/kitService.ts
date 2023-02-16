import { Kit } from "@/interfaces/kit";

const kits: Kit[] = require("../../data/KITS_SHIPPING_DATA");

export function findAllKits() {
  return kits;
}

export function findKitById(id: Kit["id"]) {
  return kits.find((kit) => kit.id === id);
}
