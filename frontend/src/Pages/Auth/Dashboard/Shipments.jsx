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
];

const Shipments = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout>

      <div className="shipments-header">

        <div>
          <h1>Shipments</h1>
          <p>Monitor all active and completed shipments.</p>
        </div>

      </div>

      <div className="shipment-stats">

        <div className="shipment-card">
          <h3>24</h3>
          <p>Active Shipments</p>
        </div>

        <div className="shipment-card">
          <h3>12</h3>
          <p>Delivered</p>
        </div>

        <div className="shipment-card">
          <h3>4</h3>
          <p>Pending</p>
        </div>

        <div className="shipment-card">
          <h3>2</h3>
          <p>Delayed</p>
        </div>

      </div>

      <div className="shipment-search">

        <FaSearch />

        <input
          placeholder="Search shipment..."
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

            {shipments.map((shipment) => (

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

          </tbody>

        </table>

      </div>

    </DashboardLayout>
  );
};

export default Shipments;
