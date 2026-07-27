import {
  FaMapMarkerAlt,
  FaTruckMoving,
  FaRoute,
  FaClock,
} from "react-icons/fa";

import "./TrackingCard.css";

const TrackingCard = () => {
  return (
    <div className="tracking-card">

      <div className="tracking-header">
        <h2>Live Shipment Tracking</h2>
        <button>View Map</button>
      </div>

      <div className="map-placeholder">
        <FaMapMarkerAlt className="map-icon" />
        <p>Interactive Map</p>
        <span>Google Maps / Mapbox will be integrated here.</span>
      </div>

      <div className="tracking-info">

        <div className="tracking-item">
          <FaTruckMoving />
          <div>
            <h4>Truck</h4>
            <p>TAMP-245</p>
          </div>
        </div>

        <div className="tracking-item">
          <FaRoute />
          <div>
            <h4>Route</h4>
            <p>Johannesburg → Cape Town</p>
          </div>
        </div>

        <div className="tracking-item">
          <FaClock />
          <div>
            <h4>ETA</h4>
            <p>4 hrs 20 mins</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default TrackingCard;