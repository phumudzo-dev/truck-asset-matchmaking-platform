import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUserTag,
  FaArrowRight,
  FaShieldAlt,
  FaHandshake,
  FaClock,
} from "react-icons/fa";

import "./Register.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    password: "",
    confirmPassword: "",
    role: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register form submitted:", formData);
  };

  return (
    <div className="register-page">
      {/* ================= LEFT PANEL ================= */}

      <div className="register-left">

        <div className="brand">

          <div className="brand-line"></div>

          <div>
            <h1>TAMP</h1>

            <p>
              Truck Asset <span>Matchmaking</span> Platform
            </p>
          </div>

        </div>

        <div className="hero-content">

          <h2>
            Connecting Freight Owners
            <br />
            with Trusted Transporters
          </h2>

          <p>
            Join South Africa's modern logistics platform designed
            to simplify freight matching, shipment tracking,
            collaboration and delivery management.
          </p>

        </div>

        <div className="truck-section">

          <img
            src="/Images/truck-login.png"
            alt="Truck"
            className="truck-image"
          />

        </div>

        <div className="feature-container">

          <div className="feature-card">

            <div className="feature-icon"><FaShieldAlt /></div>

            <div>

              <h4>Secure</h4>

              <p>Your information is protected.</p>

            </div>

          </div>

          <div className="feature-card">

            <div className="feature-icon"><FaHandshake /></div>

            <div>

              <h4>Reliable</h4>

              <p>Trusted transport network.</p>

            </div>

          </div>

          <div className="feature-card">

            <div className="feature-icon"><FaClock /></div>

            <div>

              <h4>Available 24/7</h4>

              <p>Access anytime, anywhere.</p>

            </div>

          </div>

        </div>

      </div>

      {/* ================= RIGHT PANEL ================= */}

      <div className="register-right">

        <div className="register-card">

          <h1>Create an Account</h1>

          <p className="subtitle">
            Join <span>TAMP</span> and start your journey today.
          </p>

          {/* ================= FORM ================= */}

          <form onSubmit={handleSubmit}>

            {/* FIRST & LAST NAME */}

            <div className="row">

              <div className="input-box">

                <label>First Name</label>

                <div className="input-group">

                  <FaUser />

                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                  />

                </div>

              </div>

              <div className="input-box">

                <label>Last Name</label>

                <div className="input-group">

                  <FaUser />

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                  />

                </div>

              </div>

            </div>

            {/* EMAIL */}

            <label>Email Address</label>

            <div className="input-group">

              <FaEnvelope />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />

            </div>

            {/* PHONE */}

            <label>Phone Number</label>

            <div className="input-group">

              <FaPhone />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />

            </div>

            {/* COMPANY */}

            <label>Company Name (Optional)</label>

            <div className="input-group">

              <FaBuilding />

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company name"
              />

            </div>

            {/* PASSWORD */}

            <label>Password</label>

            <div className="input-group">

              <FaLock />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
              />

              {showPassword ? (
                <FaEyeSlash
                  className="eye"
                  onClick={() =>
                    setShowPassword(false)
                  }
                />
              ) : (
                <FaEye
                  className="eye"
                  onClick={() =>
                    setShowPassword(true)
                  }
                />
              )}

            </div>

            {/* CONFIRM PASSWORD */}

            <label>Confirm Password</label>

            <div className="input-group">

              <FaLock />

              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
              />

              {showConfirmPassword ? (
                <FaEyeSlash
                  className="eye"
                  onClick={() =>
                    setShowConfirmPassword(false)
                  }
                />
              ) : (
                <FaEye
                  className="eye"
                  onClick={() =>
                    setShowConfirmPassword(true)
                  }
                />
              )}

            </div>

            {/* ROLE */}

            <label>Select Role</label>

            <div className="input-group">

              <FaUserTag />

              <select name="role" value={formData.role} onChange={handleChange}>

                <option value="">
                  Choose your role
                </option>

                <option>
                  Freight Owner
                </option>

                <option>
                  Transporter
                </option>

                <option>
                  Administrator
                </option>

              </select>

            </div>

            {/* TERMS */}

            <div className="terms">

              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
              />

              <p>
                I agree to the{" "}

                <Link to="#">
                  Terms of Service
                </Link>

                {" "}and{" "}

                <Link to="#">
                  Privacy Policy
                </Link>

              </p>

            </div>

            {/* BUTTON */}

            <button type="submit" className="register-btn">

              Register

              <FaArrowRight />

            </button>

            {/* DIVIDER */}

            <div className="divider">

              <span></span>

              <p>OR</p>

              <span></span>

            </div>

            {/* LOGIN */}

            <div className="login-link">

              Already have an account?

              <Link to="/">

                Login here

              </Link>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Register;