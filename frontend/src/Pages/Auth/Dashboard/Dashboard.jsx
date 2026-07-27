import DashboardLayout from "../../layouts/DashboardLayout";

import StatCard from "../../components/StatCard";

import {
  FaTruck,
  FaClipboardList,
  FaHandshake,
  FaDollarSign,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <DashboardLayout>

      <h1
        style={{
          marginBottom: "10px",
        }}
      >
        Welcome Back 
      </h1>

      <p
        style={{
          color: "#6B7280",
          marginBottom: "30px",
        }}
      >
        Here's an overview of today's logistics activity.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
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

    </DashboardLayout>
  );
};

export default Dashboard;