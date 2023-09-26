export interface Country {
  id: number;
  name: string;
  isoCode: string;
  isoCode3: string;
  isoNumeric: number;
  fips: string;
  capital: string;
  areaSqKm: number;
  population: number;
  continent: string;
  tld: string;
  currencyCode: string;
  currencyName: string;
  postalCodeFormat: string;
  postalCodeRegex: string;
  languages: string;
  equivalentFipsCode: string;
  phoneNumberPrefix: string;
  allowShipFrom: boolean;
  allowShipTo: boolean;
  allowPickup: boolean;
  hasDDPCalculatorRates: boolean;
  uid: string;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}
