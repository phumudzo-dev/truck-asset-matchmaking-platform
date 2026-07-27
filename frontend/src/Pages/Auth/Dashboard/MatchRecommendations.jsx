import DashboardLayout from "../../layouts/DashboardLayout";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaTruck,
  FaMapMarkerAlt,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

import "./MatchRecommendation.css";

const transporters = [
  {
    id: 1,
    company: "Swift Logistics",
    truck: "Flatbed Truck",
    location: "Johannesburg",
    rating: 4.9,
    match: 98,
    status: "Available",
  },
  {
    id: 2,
    company: "Cargo Express",
    truck: "Refrigerated Truck",
    location: "Pretoria",
    rating: 4.8,
    match: 94,
    status: "Available",
  },
  {
    id: 3,
    company: "RoadLink Transport",
    truck: "Box Truck",
    location: "Durban",
    rating: 4.6,
    match: 90,
    status: "Busy",
  },
];

const MatchRecommendations = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <div className="match-header">
        <div>
          <h1>Match Recommendations</h1>
          <p>Recommended transporters for your freight loads.</p>
        </div>
      </div>

      <div className="match-search">
        <FaSearch />
        <input placeholder="Search transporter..." />
      </div>

      <div className="match-grid">
        {transporters.map((transporter) => (
          <div className="match-card" key={transporter.id}>
            <div className="match-top">
              <div className="company-avatar">
                {transporter.company.charAt(0)}
              </div>

              <div>
                <h3>{transporter.company}</h3>

                <span className="match-score">
                  {transporter.match}% Match
                </span>
              </div>
            </div>

            <div className="match-info">
              <p>
                <FaTruck /> {transporter.truck}
              </p>

              <p>
                <FaMapMarkerAlt /> {transporter.location}
              </p>

              <p>
                <FaStar /> {transporter.rating}
              </p>

              <p>
                <FaCheckCircle /> {transporter.status}
              </p>
            </div>

            <div className="match-buttons">
              <button className="profile-btn" onClick={() => navigate("/profile")}>
                View Profile
              </button>

              <button className="offer-btn" onClick={() => navigate("/messages")}>
                Send Offer
              </button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default MatchRecommendations;
