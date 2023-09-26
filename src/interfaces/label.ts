export interface Label {
  id: number;
  tracking_number: string;
  external_tracking_number: string;
  history: string[];
  received_for_shipping_actions_sync: boolean;
  model: string;
  uid: string;
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
  external_service_provider_id: number;
  external_service_id: number | null;
}
