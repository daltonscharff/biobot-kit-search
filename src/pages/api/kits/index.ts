import { Kit } from "@/interfaces/kit";
import type { NextApiRequest, NextApiResponse } from "next";
import { findAllKits } from "@/services/kitService";
import { HttpError } from "@/interfaces/httpError";

const MAX_LIMIT = 25;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Kit[] | HttpError>
) {
  const { labelId, limit, offset } = req.query;
  const labelIdString = Array.isArray(labelId) ? labelId[0] : labelId;
  let limitNumber = parseIntegerFromQueryParam(limit);
  const offsetNumber = parseIntegerFromQueryParam(offset);

  if (limitNumber && (isNaN(limitNumber) || limitNumber < 1))
    return res.status(400).json({
      error: "Bad Request",
      message: "`limit` must be a positive number greater than 0",
    });
  if (offsetNumber && (isNaN(offsetNumber) || offsetNumber < 0))
    return res.status(400).json({
      error: "Bad Request",
      message: "`offset` must be a positive number",
    });

  if (limitNumber && limitNumber > MAX_LIMIT) limitNumber = MAX_LIMIT;

  const kits = findAllKits({
    labelId: labelIdString,
    limit: limitNumber,
    offset: offsetNumber,
  });
  res.status(200).json(kits);
}

function parseIntegerFromQueryParam(value: string | string[] | undefined) {
  if (value === undefined) return undefined;
  return parseInt(Array.isArray(value) ? value[0] : value);
}
