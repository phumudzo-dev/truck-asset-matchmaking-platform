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

const Dashboard = ({ user }) => {
  const roleLabel = user?.role || "Member";
  const isTransporter = roleLabel === "Transporter";
  const isFreightOwner = roleLabel === "Freight Owner";

  const statCards = isTransporter
    ? [
        { title: "Active Loads", value: "24", icon: <FaTruck />, color: "#1E3A8A" },
        { title: "Trips Today", value: "8", icon: <FaClipboardList />, color: "#F59E0B" },
        { title: "Accepted Matches", value: "19", icon: <FaHandshake />, color: "#22C55E" },
        { title: "Earnings", value: "$18,400", icon: <FaDollarSign />, color: "#0EA5E9" },
      ]
    : isFreightOwner
    ? [
        { title: "Posted Loads", value: "14", icon: <FaTruck />, color: "#1E3A8A" },
        { title: "Open Shipments", value: "6", icon: <FaClipboardList />, color: "#F59E0B" },
        { title: "Successful Matches", value: "31", icon: <FaHandshake />, color: "#22C55E" },
        { title: "Budget Used", value: "$42,800", icon: <FaDollarSign />, color: "#0EA5E9" },
      ]
    : [
        { title: "Active Loads", value: "42", icon: <FaTruck />, color: "#1E3A8A" },
        { title: "Shipments", value: "18", icon: <FaClipboardList />, color: "#F59E0B" },
        { title: "Successful Matches", value: "31", icon: <FaHandshake />, color: "#22C55E" },
        { title: "Revenue", value: "$42,800", icon: <FaDollarSign />, color: "#0EA5E9" },
      ];

  const quickActions = isTransporter
    ? [
        { title: "My Trips", icon: <FaTruck /> },
        { title: "Shipments", icon: <FaClipboardList /> },
        { title: "Tracking", icon: <FaMapMarkedAlt /> },
        { title: "Reports", icon: <FaChartBar /> },
      ]
    : isFreightOwner
    ? [
        { title: "Post Load", icon: <FaTruck /> },
        { title: "My Loads", icon: <FaClipboardList /> },
        { title: "Tracking", icon: <FaMapMarkedAlt /> },
        { title: "Matches", icon: <FaHandshake /> },
      ]
    : [
        { title: "Post Load", icon: <FaTruck /> },
        { title: "Shipments", icon: <FaClipboardList /> },
        { title: "Tracking", icon: <FaMapMarkedAlt /> },
        { title: "Reports", icon: <FaChartBar /> },
      ];

  const activityFeed = isTransporter
    ? [
        { title: "Trip Assigned", time: "5 minutes ago", color: "#22C55E" },
        { title: "Delivery Confirmed", time: "20 minutes ago", color: "#1E3A8A" },
        { title: "Route Updated", time: "1 hour ago", color: "#F59E0B" },
        { title: "New Message Received", time: "2 hours ago", color: "#EF4444" },
      ]
    : isFreightOwner
    ? [
        { title: "New Load Posted", time: "10 minutes ago", color: "#22C55E" },
        { title: "Transporter Accepted", time: "35 minutes ago", color: "#1E3A8A" },
        { title: "Shipment In Transit", time: "1 hour ago", color: "#F59E0B" },
        { title: "Invoice Requested", time: "2 hours ago", color: "#EF4444" },
      ]
    : [
        { title: "New Load Posted", time: "5 minutes ago", color: "#22C55E" },
        { title: "Shipment Delivered", time: "20 minutes ago", color: "#1E3A8A" },
        { title: "Transporter Accepted Load", time: "1 hour ago", color: "#F59E0B" },
        { title: "New Message Received", time: "2 hours ago", color: "#EF4444" },
      ];

  return (
    <DashboardLayouts>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <section
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "28px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p style={{ margin: 0, color: "#6B7280", fontWeight: 600, letterSpacing: "0.08em" }}>
              {roleLabel.toUpperCase()} DASHBOARD
            </p>
            <h1 style={{ margin: "10px 0 0", fontSize: "2rem", color: "#111827" }}>
              Welcome back, {user?.firstName || "there"}
            </h1>
            <p style={{ margin: "10px 0 0", color: "#6B7280", fontSize: "1rem", maxWidth: "560px" }}>
              A refined overview of your latest shipments, loads, and performance metrics.
            </p>
          </div>

          <div
            style={{
              background: "#eff6ff",
              color: "#1e3a8a",
              padding: "12px 18px",
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: "14px",
              whiteSpace: "nowrap",
            }}
          >
            {isTransporter ? "12 active trips" : isFreightOwner ? "6 active shipments" : "12 active shipments"}
          </div>
        </section>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {statCards.map((card) => (
            <StatCard key={card.title} title={card.title} value={card.value} icon={card.icon} color={card.color} />
          ))}
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
            {quickActions.map((action) => (
              <QuickActionCard key={action.title} title={action.title} icon={action.icon} />
            ))}
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
            {activityFeed.map((item) => (
              <ActivityCard key={item.title} title={item.title} time={item.time} color={item.color} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayouts>
  );
};

export default Dashboard;