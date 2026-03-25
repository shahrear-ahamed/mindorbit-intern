import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { SiSlack } from 'react-icons/si';
import { FiArrowRight } from 'react-icons/fi';
import { FaRocket } from 'react-icons/fa';
import { HiOutlineMap, HiOutlineDocumentSearch, HiOutlineUsers } from 'react-icons/hi';
import Button from '../components/Button';
import Input from '../components/Input';
import '../App.css'; // Shared layout styles

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, keepSignedIn });
  };

  return (
    <div className="login-page">
      {/* Left Section: Branding & Features */}
      <div className="side-panel">
        <div className="panel-overlay"></div>
        <div className="panel-content">
          <div className="logo-container">
            <span className="logo-icon"><FaRocket /></span>
            <span className="logo-text">MindOrbit</span>
          </div>

          <div className="hero-text">
            <h1 className="hero-title">Propel your productivity into a new orbit.</h1>
            <p className="hero-subtitle">
              AI-first workspace designed for high-performing teams.
            </p>
          </div>

          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon"><HiOutlineMap /></div>
              <div className="feature-details">
                <h3 className="feature-title">Smart Roadmaps</h3>
                <p className="feature-desc">Visual project tracking at light speed.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon"><HiOutlineDocumentSearch /></div>
              <div className="feature-details">
                <h3 className="feature-title">AI Summaries</h3>
                <p className="feature-desc">Condense hours of work into seconds.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon"><HiOutlineUsers /></div>
              <div className="feature-details">
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

      {/* Right Section: Login Form */}
      <div className="form-section">
        <div className="form-container">
          <div className="header">
            <h2 className="title">Welcome back</h2>
            <p className="subtitle">Please enter your details to sign in.</p>
          </div>

          <div className="social-logins">
            <Button variant="outline" fullWidth icon={FcGoogle}>
              {/* Google */}
            </Button>
            <Button variant="outline" fullWidth icon={SiSlack}>
              {/* Slack */}
            </Button>
          </div>

          <div className="divider">
            <span className="divider-text">OR WITH EMAIL</span>
          </div>

          <form onSubmit={handleSubmit} className="form-content">
            <Input
              label="Email"
              type="email"
              placeholder="name@company.com"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              rightLink={{ text: 'Forgot password?', href: '#' }}
              required
            />

            <div className="checkbox-row">
              <label className="checkbox-container">
                <input 
                  type="checkbox" 
                  checked={keepSignedIn} 
                  onChange={(e) => setKeepSignedIn(e.target.checked)}
                />
                <span className="checkmark"></span>
                Keep me signed in for 30 days
              </label>
            </div>

            <Button 
              type="submit" 
              variant="primary" 
              fullWidth 
            >
              <div className="btn-inner">
                Sign In <FiArrowRight className="arrow" />
              </div>
            </Button>
          </form>

          <p className="footer-text">
            Don't have an account? <Link to="/signup">Start for free</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
