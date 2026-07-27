import {
  FaSearch,
  FaBell,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";

import "../styles/navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">

      {/* Left */}

      <div className="navbar-left">

        <h2>Dashboard</h2>

      </div>

      {/* Center */}

      <div className="navbar-search">

        <FaSearch />

        <input
          type="text"
          placeholder="Search loads, shipments..."
        />

      </div>

      {/* Right */}

      <div className="navbar-right">

        <button className="icon-btn">
          <FaBell />
          <span className="badge">3</span>
        </button>

        <button className="icon-btn">
          <FaEnvelope />
          <span className="badge">5</span>
        </button>

        <div className="user-profile">

          <img
            src="https://ui-avatars.com/api/?name=Phumudzo&background=1E3A8A&color=fff"
            alt="User"
          />

          <div>

            <h4>Phumudzo</h4>

            <p>Transporter</p>

          </div>

          <FaChevronDown />

        </div>

      </div>

    </header>
  );
};

export default Navbar;