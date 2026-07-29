import { useState } from "react";
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

const Settings = ({ onLogout, onPasswordChange }) => {
  const navigate = useNavigate();
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogout = () => {
    if (onLogout) {
      onLogout(navigate);
    } else {
      navigate("/login");
    }
  };

  const handlePasswordSubmit = (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("New passwords do not match.");
      return;
    }

    if (onPasswordChange) {
      const success = onPasswordChange(currentPassword, newPassword);
      if (success) {
        setMessage("Password changed successfully.");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setShowPasswordModal(false);
      }
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

          <button className="secondary-btn" onClick={() => setShowPasswordModal(true)}>
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

      {showPasswordModal && (
        <div className="password-modal-overlay" onClick={() => setShowPasswordModal(false)}>
          <div className="password-modal" onClick={(event) => event.stopPropagation()}>
            <h3>Change Password</h3>
            <p>Use your current password and set a new one.</p>
            {message && <p className="password-message">{message}</p>}
            <form onSubmit={handlePasswordSubmit} className="password-form">
              <input
                type="password"
                placeholder="Current password"
                value={currentPassword}
                onChange={(event) => setCurrentPassword(event.target.value)}
              />
              <input
                type="password"
                placeholder="New password"
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
              <div className="password-actions">
                <button type="button" className="secondary-btn" onClick={() => setShowPasswordModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </DashboardLayout>
  );
};

export default Settings;