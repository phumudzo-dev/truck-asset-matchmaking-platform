import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import "./DashboardLayouts.css";

const DashboardLayouts = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <div className="dashboard-sidebar">
        <Sidebar />
      </div>

      <div className="dashboard-main">
        <Navbar />
        <main className="dashboard-page-content">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayouts;
