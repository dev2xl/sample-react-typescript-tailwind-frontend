import { Tracking } from "../../../interfaces/tracking.ts";
import Card from "../../../components/Card/Card.tsx";
import { isoDateToLocaleDateTime } from "../../../utils/date.ts";

const TrackingCard = ({ tracking }: { tracking: Tracking }) => {
  return (
    <Card title="Details" size="xl">
      <span>ID: {tracking.id}</span>
      <span>Status: {tracking.status}</span>
      <span>
        Created At: {isoDateToLocaleDateTime(tracking.label.created_at)}
      </span>
      <h3 className="text-center">Items</h3>
      <table>
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Location</th>
            <th>Country</th>
            <th>Notified</th>
          </tr>
        </thead>
        <tbody>
          {tracking.parcel_tracking_items.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.location}</td>
                <td>{item.country.name}</td>
                <td>{item.isNotified ? "yes" : "no"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default TrackingCard;
