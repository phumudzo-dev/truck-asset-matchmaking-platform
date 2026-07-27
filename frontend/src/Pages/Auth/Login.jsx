import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaArrowRight, FaShieldAlt, FaBolt, FaUsers } from "react-icons/fa";
import "./Login.css";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const submit = (event) => {
    event.preventDefault();
    if (!email.trim() || !password) { setMessage("Enter both your email address and password."); return; }
    onLogin(email, password, navigate);
  };
  return <div className="login-page">
    <div className="login-left">
      <div className="brand"><div className="brand-line" /><div><h1>TAMP</h1><p>Truck Asset <span>Matchmaking</span> Platform</p></div></div>
      <div className="hero-text"><h2>Connecting Freight.<br />Delivering <span>Value.</span></h2></div>
      <div className="truck-container"><img src="/Images/truck-login.png" alt="Truck" className="truck-image" /></div>
      <div className="features"><div className="feature-card"><div className="feature-icon"><FaShieldAlt /></div><div><h4>Secure</h4><p>End-to-end data protection</p></div></div><div className="feature-card"><div className="feature-icon"><FaBolt /></div><div><h4>Efficient</h4><p>Smart matching & automation</p></div></div><div className="feature-card"><div className="feature-icon"><FaUsers /></div><div><h4>Reliable</h4><p>Trusted by professionals</p></div></div></div>
    </div>
    <div className="login-right"><div className="login-card"><h1>Welcome</h1><p className="subtitle">Login to continue to your account</p>
      <form onSubmit={submit}>
        <label htmlFor="login-email">Email Address</label><div className="input-group"><FaEnvelope /><input id="login-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" autoComplete="email" /></div>
        <label htmlFor="login-password">Password</label><div className="input-group"><FaLock /><input id="login-password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" autoComplete="current-password" /><button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <FaEyeSlash /> : <FaEye />}</button></div>
        {message && <p className="form-message" role="alert">{message}</p>}
        <div className="login-options"><label className="remember"><input type="checkbox" />Remember me</label><Link to="/forgot-password">Forgot Password?</Link></div>
        <button className="login-btn" type="submit">Login <FaArrowRight /></button>
      </form>
      <div className="divider"><span /><p>OR</p><span /></div><div className="register-link">Don't have an account?<Link to="/register">Register here</Link></div><p className="terms">By logging in, you agree to our <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>.</p>
    </div></div>
  </div>;
};
export default Login;
