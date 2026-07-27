import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBell, FaCheckDouble, FaTruck, FaHandshake, FaComments, FaCheckCircle } from "react-icons/fa";
import DashboardLayout from "../../layouts/DashboardLayout";
import "./Notifications.css";

const initialNotifications = [
  { id: 1, icon: <FaTruck />, title: "Shipment SH-1001 is in transit", description: "Swift Logistics has departed Johannesburg for Cape Town.", time: "5 minutes ago", path: "/tracking", unread: true },
  { id: 2, icon: <FaHandshake />, title: "New transporter match available", description: "Swift Logistics is a 98% match for your Cement Bags load.", time: "35 minutes ago", path: "/match-recommendations", unread: true },
  { id: 3, icon: <FaComments />, title: "New message from John Doe", description: "Your driver has shared a delivery update.", time: "1 hour ago", path: "/messages", unread: true },
  { id: 4, icon: <FaCheckCircle />, title: "Delivery completed", description: "Food Supplies (SH-1003) was delivered successfully.", time: "2 days ago", path: "/shipments", unread: false },
];

const Notifications = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(initialNotifications);
  const unread = notifications.filter((item) => item.unread).length;
  const openNotification = (item) => { setNotifications((items) => items.map((entry) => entry.id === item.id ? { ...entry, unread: false } : entry)); navigate(item.path); };
  return <DashboardLayout><section className="notifications-page"><header className="notifications-header"><div><h1>Notifications</h1><p>{unread ? `${unread} unread updates need your attention.` : "You are all caught up."}</p></div><button type="button" className="mark-read-btn" onClick={() => setNotifications((items) => items.map((item) => ({ ...item, unread: false })))}><FaCheckDouble /> Mark all as read</button></header><div className="notification-list">{notifications.map((item) => <button type="button" className={`notification-item ${item.unread ? "unread" : ""}`} key={item.id} onClick={() => openNotification(item)}><span className="notification-icon">{item.icon}</span><span className="notification-copy"><strong>{item.title}</strong><span>{item.description}</span><small>{item.time}</small></span><span className="notification-arrow">›</span></button>)}</div></section></DashboardLayout>;
};

export default Notifications;
