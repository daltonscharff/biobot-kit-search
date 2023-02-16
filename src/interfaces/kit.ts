export interface Kit {
  id: number;
  label_id: string;
  shipping_tracking_code: string;
}

export interface KitFilter {
  labelId: string;
  limit: number;
  offset: number;
}

export const defaultKitFilter = {
  labelId: "",
  limit: 10,
  offset: 0,
};

export interface KitResponse {
  total: number;
  limit: number;
  offset: number;
  kits: Kit[];
}
