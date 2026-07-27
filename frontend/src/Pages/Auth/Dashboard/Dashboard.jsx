import DashboardLayouts from "../../../Components/Layout/DashboardLayouts";

import StatCard from "../../../Components/Statcard";

import {
  FaTruck,
  FaClipboardList,
  FaHandshake,
  FaDollarSign,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <DashboardLayouts>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <h1 style={{ margin: 0, fontSize: "2rem", color: "#111827" }}>
          Welcome Back
        </h1>

        <p style={{ margin: 0, color: "#6B7280", fontSize: "1rem" }}>
          Here's an overview of today's logistics activity.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
          marginTop: "24px",
        }}
      >
        <StatCard
          title="Active Loads"
          value="42"
          icon={<FaTruck />}
          color="#1E3A8A"
        />

        <StatCard
          title="Shipments"
          value="18"
          icon={<FaClipboardList />}
          color="#F59E0B"
        />

        <StatCard
          title="Successful Matches"
          value="31"
          icon={<FaHandshake />}
          color="#22C55E"
        />

        <StatCard
          title="Revenue"
          value="$42,800"
          icon={<FaDollarSign />}
          color="#0EA5E9"
        />
      </div>

    </DashboardLayouts>
  );
};

export default Dashboard;