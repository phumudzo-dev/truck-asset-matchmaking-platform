import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setSubmitted(true);
    alert(`Password reset instructions have been sent to ${email}.`);
  };

  return (
    <div className="forgot-page">
      {/* LEFT PANEL */}

      <div className="forgot-left">

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

          <h2>Recover Your Account</h2>

          <p>
            Enter your email address and we'll send you instructions
            to reset your password securely.
          </p>

        </div>

        <div className="truck-section">

          <img
            src="/Images/truck-login.png"
            alt="Truck"
            className="truck-image"
          />

        </div>

      </div>

      {/* RIGHT PANEL */}

      <div className="forgot-right">

        <div className="forgot-card">

          {!submitted ? (
            <>
              <h1>Forgot Password</h1>

              <p className="subtitle">
                Enter your registered email address.
              </p>

              <form onSubmit={handleSubmit}>

                <label>Email Address</label>

                <div className="input-group">

                  <FaEnvelope />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                  />

                </div>

                <button
                  className="reset-btn"
                  type="submit"
                >
                  Send Reset Link
                  <FaArrowRight />
                </button>

              </form>
            </>
          ) : (
            <div className="success-box">

              <FaCheckCircle className="success-icon" />

              <h2>Email Sent!</h2>

              <p>
                Check your inbox at <strong>{email}</strong> for the password reset instructions.
              </p>

              <button className="reset-btn" type="button" onClick={() => alert("Reset instructions sent again.")}>Resend Email <FaArrowRight /></button>

            </div>
          )}

          <div className="back-login">

            <Link to="/">
              ← Back to Login
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ForgotPassword;
