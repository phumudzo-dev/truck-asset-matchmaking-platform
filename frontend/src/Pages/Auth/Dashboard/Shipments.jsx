import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaTruck,
  FaMapMarkerAlt,
  FaEye,
  FaLocationArrow,
} from "react-icons/fa";

import "./Shipments.css";

const shipments = [
  {
    id: "SH-1001",
    load: "Cement Bags",
    transporter: "Swift Logistics",
    route: "Johannesburg → Cape Town",
    status: "In Transit",
    pickup: "27 Jul 2026",
    delivery: "29 Jul 2026",
  },
  {
    id: "SH-1002",
    load: "Furniture",
    transporter: "RoadLink",
    route: "Pretoria → Durban",
    status: "Pending",
    pickup: "28 Jul 2026",
    delivery: "30 Jul 2026",
  },
  {
    id: "SH-1003",
    load: "Food Supplies",
    transporter: "Cargo Express",
    route: "Polokwane → Bloemfontein",
    status: "Delivered",
    pickup: "24 Jul 2026",
    delivery: "25 Jul 2026",
  },
  { id: "SH-1004", load: "Steel Beams", transporter: "Swift Logistics", route: "Vereeniging → Gqeberha", status: "Delivered", pickup: "20 Jul 2026", delivery: "22 Jul 2026" },
  { id: "SH-1005", load: "Retail Stock", transporter: "RoadLink", route: "Cape Town → George", status: "Pending", pickup: "28 Jul 2026", delivery: "29 Jul 2026" },
  { id: "SH-1006", load: "Machinery", transporter: "Cargo Express", route: "Kimberley → Johannesburg", status: "Delivered", pickup: "18 Jul 2026", delivery: "20 Jul 2026" },
];

const Shipments = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const filteredShipments = shipments.filter((shipment) => {
    const matchesSearch = Object.values(shipment).some((value) => value.toLowerCase().includes(query.toLowerCase()));
    return matchesSearch && (filter === "All" || shipment.status === filter);
  });
  return (
    <DashboardLayout>
      <div className="shipments-page">
        <div className="shipments-header">
          <div>
            <h1>Shipments</h1>
            <p>Monitor all active and completed shipments.</p>
          </div>
        </div>

      <div className="shipment-stats">

        <button className={`shipment-card ${filter === "All" ? "selected" : ""}`} onClick={() => setFilter("All")}>
          <h3>24</h3>
          <p>Active Shipments</p>
        </button>

        <button className={`shipment-card ${filter === "Delivered" ? "selected" : ""}`} onClick={() => setFilter("Delivered")}>
          <h3>12</h3>
          <p>Delivered</p>
        </button>

        <button className={`shipment-card ${filter === "Pending" ? "selected" : ""}`} onClick={() => setFilter("Pending")}>
          <h3>4</h3>
          <p>Pending</p>
        </button>

        <button className="shipment-card" onClick={() => alert("No delayed shipments in the included demo data.")}>
          <h3>2</h3>
          <p>Delayed</p>
        </button>

      </div>

      <div className="shipment-search">

        <FaSearch />

        <input
          placeholder="Search shipment..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

      </div>

      <div className="shipments-table">
        <table>
          <thead>

            <tr>

              <th>ID</th>

              <th>Load</th>

              <th>Transporter</th>

              <th>Route</th>

              <th>Status</th>

              <th>Pickup</th>

              <th>Delivery</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredShipments.map((shipment) => (

              <tr key={shipment.id}>

                <td>{shipment.id}</td>

                <td>{shipment.load}</td>

                <td>{shipment.transporter}</td>

                <td>{shipment.route}</td>

                <td>
                  <span className={`status ${shipment.status.replace(" ","").toLowerCase()}`}>
                    {shipment.status}
                  </span>
                </td>

                <td>{shipment.pickup}</td>

                <td>{shipment.delivery}</td>

                <td>

                  <div className="shipment-actions">

                    <button onClick={() => navigate("/tracking")} aria-label={`View ${shipment.id}`}>

                      <FaEye />

                    </button>

                    <button onClick={() => navigate("/tracking")} aria-label={`Track ${shipment.id}`}>

                      <FaLocationArrow />

                    </button>

                  </div>

                </td>

              </tr>

            ))}
            {!filteredShipments.length && <tr><td colSpan="8" className="empty-state">No shipments found. Try another search or card.</td></tr>}

          </tbody>

        </table>

      </div>

      </div>
    </div>
  );
};

export default Shipments;
