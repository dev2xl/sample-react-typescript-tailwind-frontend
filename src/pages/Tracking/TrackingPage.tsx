import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Tracking } from "../../interfaces/tracking.ts";
import trackingService from "../../services/trackingService.ts";
import Card from "../../components/Card/Card.tsx";
import TrackingCard from "./components/TrackingCard.tsx";

const TrackingPage = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingDetails, setTrackingDetails] = useState<Tracking | null>(null);
  //
  const [error, setError] = useState("");
  const handleSubmit = async () => {
    setTrackingDetails(null);
    setError("");

    const response = await trackingService.getTrackingDetails(trackingNumber);

    if (!response || !response.success) {
      return setError("Tracking Number Does Not Exist");
    }

    setTrackingDetails(response.tracking ?? null);
  };

  return (
    <div className="flex flex-col gap-6 pb-10 justify-center items-center">
      <Card title="Tracking">
        <>
          <div>
            <label>Tracking number:</label>
            <input
              type="text"
              name="login"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />
          </div>
          <button
            className="!mt-6 flex items-center gap-2 border py-1 justify-center hover:shadow-lg active:scale-95 transition-transform"
            onClick={handleSubmit}
          >
            <FaSearch size="20px" />
            Search
          </button>
        </>
      </Card>
      {error && <span className="py-1 text-red-800">{error}</span>}
      {trackingDetails && <TrackingCard tracking={trackingDetails} />}
    </div>
  );
};

export default TrackingPage;
