// Libs
import axios from "axios";

// Types
import { Tracking } from "../interfaces/tracking.ts";

type GetTrackingDetailsResponse = {
  success: boolean;
  error?: string;
  tracking?: Tracking | null;
};

class TrackingService {
  getTrackingDetails = async (
    trackingId: string,
  ): Promise<GetTrackingDetailsResponse | null> => {
    try {
      const res = await axios.get(`/api/tracking-parcel/${trackingId}`);
      return res.data;
    } catch (e) {
      return null;
    }
  };
}

export default new TrackingService();
