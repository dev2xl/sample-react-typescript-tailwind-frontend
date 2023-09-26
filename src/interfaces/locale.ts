export interface Locale {
  id: number;
  name: string;
  isoCode: string;
  active: boolean;
  uid: string;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}
