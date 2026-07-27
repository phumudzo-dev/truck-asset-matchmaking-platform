import {
  FaMapMarkerAlt,
  FaTruckMoving,
  FaUserTie,
  FaPhone,
  FaClock,
  FaRoute,
  FaCheckCircle,
} from "react-icons/fa";

import "./TrackingCard.css";

const Tracking = () => {
  return (
    <>
      <div className="tracking-page-header">
        <h1>Shipment Tracking</h1>
        <p>Track your shipment in real time.</p>
      </div>

      <div className="tracking-layout">

        {/* LEFT */}

        <div className="tracking-map-card">

          <div className="tracking-card-header">
            <h2>Live Map</h2>

            <button>Open Full Map</button>
          </div>

          <div className="tracking-map">

            <FaMapMarkerAlt className="big-marker"/>

            <h3>Interactive Map</h3>

            <p>
              Google Maps or Mapbox will be integrated here.
            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="tracking-sidebar">

          <div className="info-card">

            <h2>Shipment Information</h2>

            <div className="info-item">
              <FaTruckMoving />
              <span>Shipment ID</span>
              <strong>SH-1001</strong>
            </div>

            <div className="info-item">
              <FaRoute />
              <span>Route</span>
              <strong>Johannesburg → Cape Town</strong>
            </div>

            <div className="info-item">
              <FaClock />
              <span>ETA</span>
              <strong>4 hrs 20 mins</strong>
            </div>

            <div className="info-item">
              <FaCheckCircle />
              <span>Status</span>
              <strong className="status-green">
                In Transit
              </strong>
            </div>

          </div>

          <div className="info-card">

            <h2>Driver</h2>

            <div className="driver-profile">

              <div className="driver-avatar">
                JD
              </div>

              <div>

                <h3>John Doe</h3>

                <p>Swift Logistics</p>

              </div>

            </div>

            <button className="contact-btn">

              <FaPhone />

              Contact Driver

            </button>

          </div>

        </div>

      </div>

      {/* TIMELINE */}

      <div className="timeline-card">

        <h2>Delivery Timeline</h2>

        <div className="timeline">

          <div className="timeline-item completed">
            <div className="circle"></div>
            <p>Load Posted</p>
          </div>

          <div className="timeline-item completed">
            <div className="circle"></div>
            <p>Transporter Assigned</p>
          </div>

          <div className="timeline-item active">
            <div className="circle"></div>
            <p>Shipment In Transit</p>
          </div>

          <div className="timeline-item">
            <div className="circle"></div>
            <p>Delivered</p>
          </div>

        </div>

      </div>
    </>
  );
};

export default Tracking;