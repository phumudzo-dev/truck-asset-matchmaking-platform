import {
  FaHome,
  FaPlusCircle,
  FaTruck,
  FaHandshake,
  FaClipboardList,
  FaMapMarkedAlt,
  FaStar,
  FaComments,
  FaChartBar,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const menuItems = [
    { title: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { title: "Post Load", icon: <FaPlusCircle />, path: "/post-load" },
    { title: "My Loads", icon: <FaTruck />, path: "/my-loads" },
    {
      title: "Match Recommendations",
      icon: <FaHandshake />,
      path: "/match-recommendations",
    },
    { title: "Shipments", icon: <FaClipboardList />, path: "/shipments" },
    { title: "Tracking", icon: <FaMapMarkedAlt />, path: "/tracking" },
    { title: "Ratings & Reviews", icon: <FaStar />, path: "/ratings" },
    { title: "Messages", icon: <FaComments />, path: "/messages" },
    { title: "Reports", icon: <FaChartBar />, path: "/reports" },
    { title: "Profile", icon: <FaUser />, path: "/profile" },
    { title: "Settings", icon: <FaCog />, path: "/settings" },
    { title: "Logout", icon: <FaSignOutAlt />, path: "/" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h1>TAMP</h1>
        <p>Truck Asset Matchmaking Platform</p>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <span className="menu-icon">{item.icon}</span>
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;