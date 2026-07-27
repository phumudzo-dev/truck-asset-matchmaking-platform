import DashboardLayouts from "../../../Components/Layout/DashboardLayouts";
import StatCard from "../../../Components/Statcard";
import AnalyticsCard from "../../../Components/AnalyticsCard";
import TrackingCard from "./TrackingCard";
import {
  FaTruck,
  FaClipboardList,
  FaHandshake,
  FaDollarSign,
  FaMapMarkedAlt,
  FaChartBar,
  FaArrowRight,
} from "react-icons/fa";

const QuickActionCard = ({ title, icon }) => (
  <div
    style={{
      background: "#fff",
      borderRadius: "16px",
      padding: "18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
      border: "1px solid #eef2f7",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <div
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "12px",
          background: "#eff6ff",
          color: "#1e3a8a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16px",
        }}
      >
        {icon}
      </div>
      <span style={{ fontWeight: 600, color: "#111827" }}>{title}</span>
    </div>
    <FaArrowRight style={{ color: "#6b7280" }} />
  </div>
);

const ActivityCard = ({ title, time, color }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 18px",
      borderBottom: "1px solid #f3f4f6",
      gap: "12px",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "999px",
          background: color,
        }}
      />
      <div>
        <div style={{ fontWeight: 600, color: "#111827" }}>{title}</div>
        <div style={{ fontSize: "13px", color: "#6b7280" }}>{time}</div>
      </div>
    </div>
    <span style={{ fontSize: "13px", color: "#6b7280" }}>View</span>
  </div>
);

const Dashboard = () => {
  return (
    <DashboardLayouts>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h1 style={{ margin: 0, fontSize: "2rem", color: "#111827" }}>
              Welcome Back
            </h1>
            <p style={{ margin: "6px 0 0", color: "#6B7280", fontSize: "1rem" }}>
              Here's an overview of today's logistics activity.
            </p>
          </div>

          <div
            style={{
              background: "#eff6ff",
              color: "#1e3a8a",
              padding: "10px 14px",
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            12 active shipments
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          <StatCard title="Active Loads" value="42" icon={<FaTruck />} color="#1E3A8A" />
          <StatCard title="Shipments" value="18" icon={<FaClipboardList />} color="#F59E0B" />
          <StatCard title="Successful Matches" value="31" icon={<FaHandshake />} color="#22C55E" />
          <StatCard title="Revenue" value="$42,800" icon={<FaDollarSign />} color="#0EA5E9" />
        </div>

        <AnalyticsCard />
        <TrackingCard />

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ margin: 0, fontSize: "1.2rem", color: "#111827" }}>Quick Actions</h2>
            <span style={{ color: "#6b7280", fontSize: "14px" }}>Manage operations</span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
            }}
          >
            <QuickActionCard title="Post Load" icon={<FaTruck />} />
            <QuickActionCard title="Shipments" icon={<FaClipboardList />} />
            <QuickActionCard title="Tracking" icon={<FaMapMarkedAlt />} />
            <QuickActionCard title="Reports" icon={<FaChartBar />} />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ margin: 0, fontSize: "1.2rem", color: "#111827" }}>Recent Activity</h2>
            <span style={{ color: "#6b7280", fontSize: "14px" }}>Last 24 hours</span>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              border: "1px solid #f3f4f6",
            }}
          >
            <ActivityCard title="New Load Posted" time="5 minutes ago" color="#22C55E" />
            <ActivityCard title="Shipment Delivered" time="20 minutes ago" color="#1E3A8A" />
            <ActivityCard title="Transporter Accepted Load" time="1 hour ago" color="#F59E0B" />
            <ActivityCard title="New Message Received" time="2 hours ago" color="#EF4444" />
          </div>
        </div>
      </div>
    </DashboardLayouts>
  );
};

export default Dashboard;