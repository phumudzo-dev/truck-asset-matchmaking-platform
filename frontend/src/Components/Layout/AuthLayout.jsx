import "./AuthLayout.css";

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="auth-page">
      {/* Left Section */}
      <div className="auth-left">
        <div className="brand">
          <h1>TAMP</h1>
          <p>Truck Asset Matchmaking Platform</p>
        </div>

        <img
          src="/images/truck-login.png"
          alt="Truck Illustration"
          className="truck-image"
        />

        <div className="left-content">
          <h2>Smart Freight Management</h2>

          <p>
            Connect Freight Owners with Transporters through a modern
            logistics platform that simplifies load matching, shipment
            tracking and delivery management.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="auth-right">
        <div className="auth-card">

          <h2>{title}</h2>

          <p className="subtitle">
            {subtitle}
          </p>

          {children}

        </div>
      </div>
    </div>
  );
};

export default AuthLayout;