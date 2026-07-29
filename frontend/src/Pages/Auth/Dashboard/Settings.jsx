import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import {
  FaBell,
  FaMoon,
  FaGlobe,
  FaLock,
  FaShieldAlt,
  FaSave,
  FaSignOutAlt,
} from "react-icons/fa";

import "./Settings.css";

const Settings = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
      onLogout(navigate);
    } else {
      navigate("/login");
    }
  };

  return (
    <DashboardLayout>

      <div className="settings-header">
        <h1>Settings</h1>
        <p>Manage your account preferences and application settings.</p>
      </div>

      <div className="settings-grid">

        {/* Notifications */}

        <div className="settings-card">

          <h2><FaBell /> Notifications</h2>

          <label className="setting-item">
            <span>Email Notifications</span>
            <input type="checkbox" defaultChecked />
          </label>

          <label className="setting-item">
            <span>SMS Notifications</span>
            <input type="checkbox" />
          </label>

          <label className="setting-item">
            <span>Push Notifications</span>
            <input type="checkbox" defaultChecked />
          </label>

        </div>

        {/* Appearance */}

        <div className="settings-card">

          <h2><FaMoon /> Appearance</h2>

          <label>Theme</label>

          <select>
            <option>Light</option>
            <option>Dark</option>
            <option>System Default</option>
          </select>

        </div>

        {/* Language */}

        <div className="settings-card">

          <h2><FaGlobe /> Language</h2>

          <label>Language</label>

          <select>
            <option>English</option>
            <option>Xitsonga</option>
            <option>Tshivenda</option>
            <option>isiZulu</option>
            <option>Sesotho</option>
          </select>

        </div>

        {/* Security */}

        <div className="settings-card">

          <h2><FaLock /> Security</h2>

          <label className="setting-item">
            <span>Enable Two-Factor Authentication</span>
            <input type="checkbox" />
          </label>

          <button className="secondary-btn">
            Change Password
          </button>

        </div>

        {/* Privacy */}

        <div className="settings-card">

          <h2><FaShieldAlt /> Privacy</h2>

          <label className="setting-item">
            <span>Allow Location Tracking</span>
            <input type="checkbox" defaultChecked />
          </label>

          <label className="setting-item">
            <span>Share Analytics</span>
            <input type="checkbox" />
          </label>

        </div>

      </div>

      <div className="settings-actions">

        <button className="save-btn">
          <FaSave />
          Save Changes
        </button>

        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </DashboardLayout>
  );
};

export default Settings;