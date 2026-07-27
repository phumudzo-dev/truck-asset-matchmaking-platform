import { useState } from "react";
import { FaMapMarkerAlt, FaTruckMoving, FaPhone, FaClock, FaRoute, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./TrackingCard.css";

const Tracking = () => {
  const navigate = useNavigate();
  const [expandedMap, setExpandedMap] = useState(false);
  return <>
    <div className="tracking-page-header"><h1>Shipment Tracking</h1><p>Track your shipment in real time.</p></div>
    <div className="tracking-layout"><div className="tracking-map-card"><div className="tracking-card-header"><h2>Live Map</h2><button onClick={() => setExpandedMap(!expandedMap)}>{expandedMap ? "Close Full Map" : "Open Full Map"}</button></div><div className={`tracking-map route-map ${expandedMap ? "route-map-expanded" : ""}`}><div className="map-grid" /><div className="map-title"><span className="live-dot" /> Live demo route · SH-1001</div><svg className="route-line" viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true"><path d="M 155 130 C 320 80, 430 300, 600 285 S 800 370, 865 355" /></svg><div className="route-city city-joburg"><FaMapMarkerAlt /><span>Johannesburg</span></div><div className="route-city city-bloem"><FaMapMarkerAlt /><span>Bloemfontein</span></div><div className="route-city city-cape"><FaMapMarkerAlt /><span>Cape Town</span></div><div className="moving-truck" title="Swift Logistics: currently in transit"><FaTruckMoving /><span>Swift Logistics</span></div><div className="map-legend"><strong>1,394 km</strong><span>•</span><span>58% complete</span><span>•</span><span>ETA 4h 20m</span></div></div></div><div className="tracking-sidebar"><div className="info-card"><h2>Shipment Information</h2><div className="info-item"><FaTruckMoving /><span>Shipment ID</span><strong>SH-1001</strong></div><div className="info-item"><FaRoute /><span>Route</span><strong>Johannesburg → Cape Town</strong></div><div className="info-item"><FaClock /><span>ETA</span><strong>4 hrs 20 mins</strong></div><div className="info-item"><FaCheckCircle /><span>Status</span><strong className="status-green">In Transit</strong></div></div><div className="info-card"><h2>Driver</h2><div className="driver-profile"><div className="driver-avatar">JD</div><div><h3>John Doe</h3><p>Swift Logistics</p></div></div><button className="contact-btn" onClick={() => navigate("/messages")}><FaPhone /> Contact Driver</button></div></div></div>
    <div className="timeline-card"><h2>Delivery Timeline</h2><div className="timeline"><div className="timeline-item completed"><div className="circle" /><p>Load Posted</p></div><div className="timeline-item completed"><div className="circle" /><p>Transporter Assigned</p></div><div className="timeline-item active"><div className="circle" /><p>Shipment In Transit</p></div><div className="timeline-item"><div className="circle" /><p>Delivered</p></div></div></div>
  </>;
};
export default Tracking;
