import { HttpError } from "@/interfaces/httpError";
import { Kit } from "@/interfaces/kit";
import { findKitById } from "@/services/kitService";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Kit | HttpError>
) {
  const id = req.query.id as string;
  const idNumber = parseInt(id);

  if (isNaN(idNumber)) {
    return res.status(400).json({
      error: "Bad Request",
      message: "Parameter `id` must be a number",
    });
  }

  const kit = findKitById(idNumber);

  if (kit === undefined) {
    return res.status(404).json({
      error: "Not Found",
      message: `No kit found with id=${idNumber}`,
    });
  }

  res.status(200).json(kit);
}
