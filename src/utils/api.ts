import { Kit } from "@/interfaces/kit";

export function parseIntegerFromQueryParam(
  value: string | string[] | undefined
) {
  if (value === undefined) return undefined;
  return parseInt(Array.isArray(value) ? value[0] : value);
}

export function sortByLabelId(a: Kit, b: Kit) {
  return a.label_id.localeCompare(b.label_id);
}
