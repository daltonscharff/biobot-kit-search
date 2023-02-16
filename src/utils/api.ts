export function parseIntegerFromQueryParam(
  value: string | string[] | undefined
) {
  if (value === undefined) return undefined;
  return parseInt(Array.isArray(value) ? value[0] : value);
}
