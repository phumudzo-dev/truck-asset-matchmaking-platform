import DashboardLayout from "../../layouts/DashboardLayout";
import { useState } from "react";
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
  const [dialog, setDialog] = useState(null);
  const [profile, setProfile] = useState({ name: "Phumudzo Mulaudzi", email: "phumudzo@example.com", phone: "+27 68 671 5262", location: "Johannesburg, South Africa" });
  const [passwords, setPasswords] = useState({ current: "", next: "", confirm: "" });
  const saveProfile = (event) => { event.preventDefault(); localStorage.setItem("tamp-profile", JSON.stringify(profile)); setDialog(null); alert("Profile details saved successfully."); };
  const changePassword = (event) => { event.preventDefault(); if (!passwords.current || !passwords.next || passwords.next !== passwords.confirm) { alert("Enter your current password and matching new passwords."); return; } setDialog(null); setPasswords({ current: "", next: "", confirm: "" }); alert("Your password has been updated."); };
  return (
    <DashboardLayout>

      <div className="profile-header">
        <div className="profile-cover"></div>

        <div className="profile-user">
          <div className="profile-avatar">
            PM
          </div>

          <div>
            <h1>{profile.name}</h1>
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
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Phone:</strong> {profile.phone}</p>
            <p><strong>Location:</strong> {profile.location}</p>
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

        <button className="edit-btn" onClick={() => setDialog("edit")}>
          <FaEdit /> Edit Profile
        </button>

        <button className="password-btn" onClick={() => setDialog("password")}>
          <FaLock /> Change Password
        </button>

      </div>

      {dialog && <div className="profile-modal-backdrop" role="presentation" onMouseDown={() => setDialog(null)}><div className="profile-modal" role="dialog" aria-modal="true" aria-label={dialog === "edit" ? "Edit profile" : "Change password"} onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={() => setDialog(null)} aria-label="Close dialog">×</button>
        {dialog === "edit" ? <form onSubmit={saveProfile}><h2>Edit Profile</h2><p>Update your information below.</p>{[["name", "Full name"], ["email", "Email address"], ["phone", "Phone number"], ["location", "Location"]].map(([key, label]) => <label key={key}>{label}<input type={key === "email" ? "email" : "text"} value={profile[key]} onChange={(event) => setProfile({ ...profile, [key]: event.target.value })} required /></label>)}<div className="modal-actions"><button type="button" className="modal-cancel" onClick={() => setDialog(null)}>Cancel</button><button type="submit" className="modal-save">Save Changes</button></div></form> : <form onSubmit={changePassword}><h2>Change Password</h2><p>Choose a strong new password for your account.</p>{[["current", "Current password"], ["next", "New password"], ["confirm", "Confirm new password"]].map(([key, label]) => <label key={key}>{label}<input type="password" value={passwords[key]} onChange={(event) => setPasswords({ ...passwords, [key]: event.target.value })} required /></label>)}<div className="modal-actions"><button type="button" className="modal-cancel" onClick={() => setDialog(null)}>Cancel</button><button type="submit" className="modal-save">Update Password</button></div></form>}
      </div></div>}

    </DashboardLayout>
  );
};

export default Profile;
