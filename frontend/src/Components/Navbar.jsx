import { useEffect, useState } from "react";
import { FaSearch, FaBell, FaEnvelope, FaChevronDown } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

const pages = [["Dashboard", "/dashboard"], ["Post Load", "/post-load"], ["My Loads", "/my-loads"], ["Match Recommendations", "/match-recommendations"], ["Shipments", "/shipments"], ["Tracking", "/tracking"], ["Ratings & Reviews", "/ratings"], ["Messages", "/messages"], ["Reports", "/reports"], ["Profile", "/profile"], ["Settings", "/settings"]];

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");
  const title = pages.find(([, path]) => path === pathname)?.[0] || "Dashboard";
  useEffect(() => {
    const shortcut = (event) => { if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); document.querySelector(".navbar-search input")?.focus(); } };
    window.addEventListener("keydown", shortcut);
    return () => window.removeEventListener("keydown", shortcut);
  }, []);
  const search = (event) => { event.preventDefault(); const match = pages.find(([name]) => name.toLowerCase().includes(query.trim().toLowerCase())); if (match) navigate(match[1]); };
  return <header className="navbar">
    <div className="navbar-left"><h2>{title}</h2></div>
    <form className="navbar-search" onSubmit={search} role="search"><FaSearch /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Go to a page… (Ctrl+K)" aria-label="Go to a dashboard page" /></form>
    <div className="navbar-right">
      <button className="icon-btn" onClick={() => navigate("/notifications")} aria-label="Notifications"><FaBell /><span className="badge">3</span></button>
      <button className="icon-btn" onClick={() => navigate("/messages")} aria-label="Messages"><FaEnvelope /><span className="badge">5</span></button>
      <button className="user-profile" onClick={() => navigate("/profile")} aria-label="Open profile"><img src="https://ui-avatars.com/api/?name=Phumudzo&background=1E3A8A&color=fff" alt="User" /><div><h4>Phumudzo</h4><p>Transporter</p></div><FaChevronDown /></button>
    </div>
  </header>;
};
export default Navbar;
