import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaArrowRight } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      {/* LEFT PANEL */}
      <div className="login-left">
        <div className="brand">
          <div className="brand-line"></div>

          <div>
            <h1>TAMP</h1>
            <p>
              Truck Asset <span>Matchmaking</span> Platform
            </p>
          </div>
        </div>

        <div className="hero-text">
          <h2>
            Connecting Freight.
            <br />
            Delivering <span>Value.</span>
          </h2>
        </div>

        <div className="truck-container">
          <img
            src="/Images/truck-login.png"
            alt="Truck"
            className="truck-image"
          />
        </div>

        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>

            <div>
              <h4>Secure</h4>
              <p>End-to-end data protection</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>

            <div>
              <h4>Efficient</h4>
              <p>Smart matching & automation</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">👥</div>

            <div>
              <h4>Reliable</h4>
              <p>Trusted by professionals</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}

      <div className="login-right">
        <div className="login-card">
          <h1>Welcome</h1>

          <p className="subtitle">
            Login to continue to your account
          </p>

          {/* EMAIL */}

          <label>Email Address</label>

          <div className="input-group">
            <FaEnvelope />

            <input
              type="email"
              placeholder="Enter your email address"
            />
          </div>

          {/* PASSWORD */}

          <label>Password</label>

          <div className="input-group">
            <FaLock />

            <input
              type="password"
              placeholder="Enter your password"
            />

            <FaEye className="eye" />
          </div>

          {/* OPTIONS */}

          <div className="login-options">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <Link to="/forgot-password">
              Forgot Password?
            </Link>
          </div>

          {/* LOGIN BUTTON */}

          <button className="login-btn">
            Login

            <FaArrowRight />
          </button>

          {/* DIVIDER */}

          <div className="divider">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          {/* REGISTER */}

          <div className="register-link">
            Don't have an account?

            <Link to="/register">
              Register here
            </Link>
          </div>

          {/* FOOTER */}

          <p className="terms">
            By logging in, you agree to our
            <Link to="#"> Terms of Service </Link>
            and
            <Link to="#"> Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;