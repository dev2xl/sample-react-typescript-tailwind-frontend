import { Label } from "./label.ts";
import { Item } from "./item.ts";
import { Locale } from "./locale.ts";

export interface TrackingCodeLocale {
  id: number;
  description: string;
  details: string | null;
  uid: string;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
  trackingCodeId: number;
  localeId: number;
  locale: Locale;
}

export interface TrackingCode {
  id: number;
  code: string;
  isVisible: boolean;
  uid: string;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
  tracking_code_locales: TrackingCodeLocale[];
}
export interface Tracking {
  id: number;
  status: "delivered" | "in process";
  uid: string;
  created_at: Date;
  updated_at: Date | null;
  deleted_at: Date | null;
  label_id: number;
  parcel_id: number;
  service_id: number;
  label: Label;
  parcel_tracking_items: Item[];
}
