import { Link } from "react-router-dom";
import {
  FaTruckMoving,
  FaBoxes,
  FaUserShield,
  FaArrowRight,
} from "react-icons/fa";

import "./RoleSelection.css";

const RoleSelection = () => {
  const roles = [
    {
      title: "Transporter",
      icon: <FaTruckMoving />,
      description:
        "Manage available trucks, loads, deliveries and shipments.",
      path: "/dashboard",
    },
    {
      title: "Freight Owner",
      icon: <FaBoxes />,
      description:
        "Post loads, manage shipments and track deliveries.",
      path: "/dashboard",
    },
    {
      title: "Administrator",
      icon: <FaUserShield />,
      description:
        "Manage users, analytics, reports and system settings.",
      path: "/dashboard",
    },
  ];

  return (
    <div className="role-page">
      <div className="role-container">
        <h1>TAMP</h1>

        <h2>Select Your Role</h2>

        <p className="subtitle">
          Choose how you would like to use the Truck Asset Matchmaking Platform.
        </p>

        <div className="role-grid">
          {roles.map((role) => (
            <div key={role.title} className="role-card">
              <div className="role-icon">{role.icon}</div>

              <h3>{role.title}</h3>

              <p>{role.description}</p>

              <Link to={role.path} className="continue-btn">
                Continue
                <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>

        <Link to="/" className="back-link">
          ← Back to Login
        </Link>
      </div>
    </div>
  );
};

export default RoleSelection;