import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import RoleSelection from "./Pages/Auth/RoleSelection";
import Dashboard from "./Pages/Auth/Dashboard/Dashboard";
import PostLoad from "./Pages/Auth/Dashboard/PostLoad";
import MyLoads from "./Pages/Auth/Dashboard/MyLoads";
import MatchRecommendations from "./Pages/Auth/Dashboard/MatchRecommendations";
import Shipments from "./Pages/Auth/Dashboard/Shipments";
import Tracking from "./Pages/Auth/Dashboard/Tracking";
import Ratings from "./Pages/Auth/Dashboard/Ratings";
import Messages from "./Pages/Auth/Dashboard/Messages";
import Reports from "./Pages/Auth/Dashboard/Reports";
import Profile from "./Pages/Auth/Dashboard/Profile";
import Settings from "./Pages/Auth/Dashboard/Settings";
import Notifications from "./Pages/Auth/Dashboard/Notifications";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import SaveFeedback from "./Components/SaveFeedback";

function App() {
  const [accounts, setAccounts] = useState(() => {
    const savedAccounts = localStorage.getItem("tamp-accounts");
    return savedAccounts ? JSON.parse(savedAccounts) : [];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("tamp-user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const handleRegister = (formData, navigate) => {
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.role ||
      !formData.agreeToTerms
    ) {
      alert("Please complete all required fields and agree to the terms.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const normalizedEmail = formData.email.trim().toLowerCase();
    const emailExists = accounts.some((account) => account.email === normalizedEmail);

    if (emailExists) {
      alert("An account with this email already exists.");
      return;
    }

    const newAccount = {
      id: Date.now(),
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: normalizedEmail,
      phone: formData.phone.trim(),
      company: formData.company.trim(),
      role: formData.role,
      password: formData.password,
    };

    const updatedAccounts = [...accounts, newAccount];
    setAccounts(updatedAccounts);
    localStorage.setItem("tamp-accounts", JSON.stringify(updatedAccounts));

    setCurrentUser(newAccount);
    localStorage.setItem("tamp-user", JSON.stringify(newAccount));

    navigate("/dashboard");
  };

  const handleLogin = (email, password, navigate) => {
    const normalizedEmail = email.trim().toLowerCase();
    const account = accounts.find(
      (entry) => entry.email === normalizedEmail && entry.password === password
    );

    if (!account) {
      alert("Invalid email or password.");
      return;
    }

    setCurrentUser(account);
    localStorage.setItem("tamp-user", JSON.stringify(account));
    navigate("/dashboard");
  };

  return (
    <>
    <Routes>
      <Route path="/" element={<Login onLogin={handleLogin} />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/register" element={<Register onRegister={handleRegister} />} />
      <Route path="/role-selection" element={<RoleSelection />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<Dashboard user={currentUser} />} />
      <Route path="/post-load" element={<PostLoad />} />
      <Route path="/my-loads" element={<MyLoads />} />
      <Route path="/match-recommendations" element={<MatchRecommendations />} />
      <Route path="/shipments" element={<Shipments />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/ratings" element={<Ratings />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
    <SaveFeedback />
    </>
  );
}

export default App;
