import { Country } from "./country.ts";
import { Vendor } from "./vendor.ts";

export interface Item {
  id: number;
  location: string;
  city: string | null;
  state: string | null;
  postalCode: string | null;
  timestamp: Date;
  data: string | null;
  isNotified: boolean;
  cubiscanId: number | null;
  uid: string;
  created_at: Date;
  updated_at: Date | null;
  deleted_at: Date | null;
  parcelTrackingQueueId: number;
  parcelTrackingDestinationId: number;
  countryId: number | null;
  trackingCodeVendorId: number;
  trackingCodeId: number | null;
  userId: number | null;
  country: Country;
  tracking_code_vendor: Vendor;
  tracking_code: null;
}
