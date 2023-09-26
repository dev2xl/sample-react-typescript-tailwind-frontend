import { TrackingCode } from "./tracking.ts";
import { Locale } from "./locale.ts";

export interface VendorLocale {
  id: number;
  description: string;
  details: string;
  clientMustKnow: string;
  uid: string;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
  trackingCodeVendorId: number;
  localeId: number;
  locale: Locale;
}

export interface Vendor {
  id: number;
  code: string;
  data: {
    vendorCode: string;
    agencyId: number | null;
    date: Date;
    description: string;
    location: string;
    postalCode: number;
    city: string;
    state: string;
    destination: {
      externalCode: string;
      location: string;
      state: string;
      country: string;
    };
    country: string;
  };
  uid: string;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
  trackingCodeId: number;
  externalServiceProviderId: number;
  tracking_code_vendor_locales: VendorLocale[];
  tracking_code: TrackingCode;
}
