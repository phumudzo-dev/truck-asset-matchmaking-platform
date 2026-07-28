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
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const QuickActionCard = ({ title, icon, onClick }) => (
    <button type="button" onClick={onClick}
        style={{
            background: "#fff",
            borderRadius: "16px",
            padding: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            border: "1px solid #eef2f7",
            cursor: "pointer",
            textAlign: "left",
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
    </button>
);

const ActivityCard = ({ title, time, color, onClick }) => (
    <button type="button" onClick={onClick}
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 18px",
            borderBottom: "1px solid #f3f4f6",
            gap: "12px",
            background: "white", border: "none", width: "100%", cursor: "pointer", textAlign: "left",
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
    </button>
);

const Dashboard = ({ user }) => {
    const navigate = useNavigate();
    const [openPreview, setOpenPreview] = useState(null);
    const previewRows = openPreview === "loads"
        ? [{ id: "LD-1001", title: "Cement Bags", status: "In Transit" }, { id: "LD-1003", title: "Food Supplies", status: "Delivered" }, { id: "LD-1004", title: "Steel Beams", status: "Delivered" }, { id: "LD-1005", title: "Retail Stock", status: "Pending" }, { id: "LD-1006", title: "Agricultural Equipment", status: "Cancelled" }]
        : [{ id: "SH-1001", title: "Cement Bags", status: "In Transit" }, { id: "SH-1003", title: "Food Supplies", status: "Delivered" }, { id: "SH-1004", title: "Steel Beams", status: "Delivered" }, { id: "SH-1005", title: "Retail Stock", status: "Pending" }, { id: "SH-1006", title: "Machinery", status: "Delivered" }];
    const previewPath = openPreview === "loads" ? "/my-loads" : "/shipments";
    const roleLabel = user?.role || "Member";
    const isTransporter = roleLabel === "Transporter";
    const isFreightOwner = roleLabel === "Freight Owner";

    const statCards = isTransporter
        ? [
            { title: "Active Loads", value: "24", icon: <FaTruck />, color: "#1E3A8A", path: "/my-loads" },
            { title: "Trips Today", value: "8", icon: <FaClipboardList />, color: "#F59E0B", path: "/shipments" },
            { title: "Accepted Matches", value: "19", icon: <FaHandshake />, color: "#22C55E", path: "/match-recommendations" },
            { title: "Earnings", value: "R18,400", icon: <FaDollarSign />, color: "#0EA5E9", path: "/reports" },
        ]
        : isFreightOwner
            ? [
                { title: "Posted Loads", value: "14", icon: <FaTruck />, color: "#1E3A8A", path: "/my-loads" },
                { title: "Open Shipments", value: "6", icon: <FaClipboardList />, color: "#F59E0B", path: "/shipments" },
                { title: "Successful Matches", value: "31", icon: <FaHandshake />, color: "#22C55E", path: "/match-recommendations" },
                { title: "Budget Used", value: "R42,800", icon: <FaDollarSign />, color: "#0EA5E9", path: "/reports" },
            ]
            : [
                { title: "Active Loads", value: "42", icon: <FaTruck />, color: "#1E3A8A", path: "/my-loads" },
                { title: "Shipments", value: "18", icon: <FaClipboardList />, color: "#F59E0B", path: "/shipments" },
                { title: "Successful Matches", value: "31", icon: <FaHandshake />, color: "#22C55E", path: "/match-recommendations" },
                { title: "Revenue", value: "R42,800", icon: <FaDollarSign />, color: "#0EA5E9", path: "/reports" },
            ];

    const quickActions = isTransporter
        ? [
            { title: "My Trips", icon: <FaTruck />, path: "/my-loads" },
            { title: "Shipments", icon: <FaClipboardList />, path: "/shipments" },
            { title: "Tracking", icon: <FaMapMarkedAlt />, path: "/tracking" },
            { title: "Reports", icon: <FaChartBar />, path: "/reports" },
        ]
        : isFreightOwner
            ? [
                { title: "Post Load", icon: <FaTruck />, path: "/post-load" },
                { title: "My Loads", icon: <FaClipboardList />, path: "/my-loads" },
                { title: "Tracking", icon: <FaMapMarkedAlt />, path: "/tracking" },
                { title: "Matches", icon: <FaHandshake />, path: "/match-recommendations" },
            ]
            : [
                { title: "Post Load", icon: <FaTruck />, path: "/post-load" },
                { title: "Shipments", icon: <FaClipboardList />, path: "/shipments" },
                { title: "Tracking", icon: <FaMapMarkedAlt />, path: "/tracking" },
                { title: "Reports", icon: <FaChartBar />, path: "/reports" },
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
                        <StatCard key={card.title} title={card.title} value={card.value} icon={card.icon} color={card.color} onClick={() => navigate(card.path)} />
                    ))}
                </div>

                {openPreview && <section style={{ background: "#fff", borderRadius: "18px", padding: "20px", boxShadow: "0 10px 30px rgba(0,0,0,.06)", border: "1px solid #eef2f7" }} aria-label={`${openPreview} preview`}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", marginBottom: "14px", flexWrap: "wrap" }}><div><h2 style={{ margin: 0, color: "#111827", fontSize: "1.2rem" }}>{openPreview === "loads" ? "Posted Loads" : "Open Shipments"}</h2><p style={{ margin: "5px 0 0", color: "#6b7280", fontSize: "14px" }}>Scroll to review IDs, titles, and delivery status.</p></div><button type="button" onClick={() => navigate(previewPath)} style={{ border: "none", borderRadius: "9px", padding: "10px 14px", background: "#1e3a8a", color: "#fff", fontWeight: 600, cursor: "pointer" }}>View all</button></div>
                    <div style={{ maxHeight: "230px", overflowY: "auto", border: "1px solid #e5e7eb", borderRadius: "12px" }}><table style={{ width: "100%", borderCollapse: "collapse", minWidth: "420px" }}><thead style={{ position: "sticky", top: 0, background: "#f8fafc" }}><tr><th style={{ padding: "12px", textAlign: "left" }}>ID</th><th style={{ padding: "12px", textAlign: "left" }}>Title</th><th style={{ padding: "12px", textAlign: "left" }}>Status</th></tr></thead><tbody>{previewRows.map((row) => <tr key={row.id} style={{ borderTop: "1px solid #eef2f7" }}><td style={{ padding: "12px", fontWeight: 600 }}>{row.id}</td><td style={{ padding: "12px" }}>{row.title}</td><td style={{ padding: "12px" }}><span style={{ color: row.status === "Delivered" ? "#15803d" : row.status === "Pending" ? "#b45309" : "#1d4ed8", fontWeight: 700 }}>{row.status}</span></td></tr>)}</tbody></table></div>
                </section>}

                <AnalyticsCard onClick={(timeframe) => navigate("/reports", { state: { timeframe } })} />
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
                            <QuickActionCard key={action.title} title={action.title} icon={action.icon} onClick={() => navigate(action.path)} />
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
                            <ActivityCard key={item.title} title={item.title} time={item.time} color={item.color} onClick={() => navigate(item.title.includes("Message") ? "/messages" : item.title.includes("Trip") || item.title.includes("Shipment") || item.title.includes("Delivery") ? "/tracking" : "/my-loads")} />
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayouts>
    );
};

export default Dashboard;
