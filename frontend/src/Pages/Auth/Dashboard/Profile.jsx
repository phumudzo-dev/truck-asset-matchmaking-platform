import DashboardLayout from "../../layouts/DashboardLayout";
import {
  FaUser,
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTruck,
  FaFileAlt,
  FaEdit,
  FaLock,
} from "react-icons/fa";

import "./Profile.css";

const Profile = () => {
  return (
    <DashboardLayout>

      <div className="profile-header">
        <div className="profile-cover"></div>

        <div className="profile-user">
          <div className="profile-avatar">
            PM
          </div>

          <div>
            <h1>Phumudzo Mulaudzi</h1>
            <p>Freight Owner</p>
          </div>
        </div>
      </div>

      <div className="profile-grid">

        <div className="profile-card">

          <h2>
            <FaUser /> Personal Information
          </h2>

          <div className="profile-info">
            <p><strong>Email:</strong> phumudzo@example.com</p>
            <p><strong>Phone:</strong> +27 68 671 5262</p>
            <p><strong>Location:</strong> Johannesburg, South Africa</p>
          </div>

        </div>

        <div className="profile-card">

          <h2>
            <FaBuilding /> Company Information
          </h2>

          <div className="profile-info">
            <p><strong>Company:</strong> TAMP Logistics</p>
            <p><strong>Registration:</strong> TMP-2026-001</p>
            <p><strong>Industry:</strong> Freight & Logistics</p>
          </div>

        </div>

        <div className="profile-card">

          <h2>
            <FaTruck /> Fleet Information
          </h2>

          <div className="profile-info">
            <p>Total Trucks: 18</p>
            <p>Drivers: 26</p>
            <p>Active Loads: 12</p>
          </div>

        </div>

        <div className="profile-card">

          <h2>
            <FaFileAlt /> Documents
          </h2>

          <ul className="documents-list">
            <li>Business Registration.pdf</li>
            <li>Insurance Certificate.pdf</li>
            <li>Operating License.pdf</li>
          </ul>

        </div>

      </div>

      <div className="profile-actions">

        <button className="edit-btn">
          <FaEdit /> Edit Profile
        </button>

        <button className="password-btn">
          <FaLock /> Change Password
        </button>

      </div>

    </DashboardLayout>
  );
};

export default Profile;