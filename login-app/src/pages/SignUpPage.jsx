import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { SiSlack } from 'react-icons/si';
import { FiArrowRight } from 'react-icons/fi';
import { FaRocket } from 'react-icons/fa';
import { HiOutlineMap, HiOutlineSparkles, HiOutlineUsers } from 'react-icons/hi';
import Button from '../components/Button';
import Input from '../components/Input';
import PasswordStrength from '../components/PasswordStrength';
import '../App.css';

const SignUpPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirm: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-page">
      {/* LEFT SECTION */}
      <div className="side-panel">
        <div className="panel-content">
          <div className="logo-container">
            <span className="logo-icon"><FaRocket /></span>
            <span className="logo-text">MindOrbit</span>
          </div>
          <div className="hero-text">
            <h1 className="hero-title">Propel your productivity into a new orbit.</h1>
            <p className="hero-subtitle">AI-first workspace designed for high-performing teams.</p>
          </div>

          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon"><HiOutlineMap /></div>
              <div className="feature-text">
                <h3 className="feature-title">Smart Roadmaps</h3>
                <p className="feature-desc">Visual project tracking at light speed.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><HiOutlineSparkles /></div>
              <div className="feature-text">
                <h3 className="feature-title">AI Summaries</h3>
                <p className="feature-desc">Condense hours of work into seconds.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><HiOutlineUsers /></div>
              <div className="feature-text">
                <h3 className="feature-title">Team Sync</h3>
                <p className="feature-desc">Real-time collaboration across galaxies.</p>
              </div>
            </div>
          </div>

          <div className="panel-footer">
            <p className="copyright">© 2024 MindOrbit Inc.</p>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="form-section">
        <div className="form-container">
          <div className="header">
            <h2 className="title">Create your account</h2>
            <p className="subtitle">Join high-performing teams already in orbit.</p>
          </div>
          <div className="social-login row">
            <Button variant="outline" icon={FcGoogle}>Sign up with Google</Button>
            <Button variant="outline" icon={() => <SiSlack color="#E01E5A" />}>Sign up with Slack</Button>
          </div>
          <div className="divider"><span className="divider-text">OR WITH EMAIL</span></div>
          <form className="register-form">
            <Input label="Full Name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
            <Input label="Email" name="email" type="email" placeholder="name@company.com" value={formData.email} onChange={handleChange} required />
            <Input label="Password" name="password" type="password" placeholder="••••••••" value={formData.password} onChange={handleChange} required />

            <PasswordStrength password={formData.password} />

            <Input label="Confirm Password" name="confirm" type="password" placeholder="••••••••" value={formData.confirm} onChange={handleChange} required />
            <div className="checkbox-row">
              <label className="checkbox-container">
                <input type="checkbox" required />
                <span className="checkmark"></span>
                I agree to the <Link to="#" className="login-link">Terms of Service</Link> and <Link to="#" className="login-link">Privacy Policy</Link>.
              </label>
            </div>
            <Button type="submit" variant="primary" fullWidth>
              <div className="btn-inner">Create Account <FiArrowRight className="arrow" /></div>
            </Button>
          </form>
          <p className="footer-text">
            Already have an account? <Link to="/" className="login-link">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;