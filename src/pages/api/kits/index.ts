import { Kit } from "@/interfaces/kit";
import type { NextApiRequest, NextApiResponse } from "next";
import { findAllKits } from "@/services/kitService";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Kit[]>
) {
  const kits = findAllKits();
  res.status(200).json(kits);
}
