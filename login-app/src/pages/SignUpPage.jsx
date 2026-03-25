import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { SiSlack } from 'react-icons/si';
import { FiArrowRight } from 'react-icons/fi';
import { FaRocket } from 'react-icons/fa';
import Button from '../components/Button';
import Input from '../components/Input';
import '../App.css';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SignUp attempt:', formData);
  };

  return (
    <div className="login-page">
      {/* Reusing side-panel for consistency */}
      <div className="side-panel">
        <div className="panel-overlay"></div>
        <div className="panel-content">
          <div className="logo-container">
            <span className="logo-icon"><FaRocket /></span>
            <span className="logo-text">MindOrbit</span>
          </div>

          <div className="hero-text">
            <h1 className="hero-title">Start your journey today.</h1>
            <p className="hero-subtitle">
              Join thousands of teams scaling their productivity.
            </p>
          </div>

          <div className="panel-footer">
            <p className="copyright">© 2024 MindOrbit Inc.</p>
          </div>
        </div>
      </div>

      <div className="form-section">
        <div className="form-container">
          <div className="header">
            <h2 className="title">Create Account</h2>
            <p className="subtitle">Sign up to get started with MindOrbit.</p>
          </div>

          <div className="social-logins">
            <Button variant="outline" fullWidth icon={FcGoogle}></Button>
            <Button variant="outline" fullWidth icon={SiSlack}></Button>
          </div>

          <div className="divider">
            <span className="divider-text">OR WITH EMAIL</span>
          </div>

          <form onSubmit={handleSubmit} className="form-content">
            <Input
              label="Full Name"
              type="text"
              placeholder="Your Name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            
            <Input
              label="Email"
              type="email"
              placeholder="name@company.com"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            
            <Input
              label="Password"
              type="password"
              placeholder="Minimum 8 characters"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <Button type="submit" variant="primary" fullWidth>
              <div className="btn-inner">
                Get Started <FiArrowRight className="arrow" />
              </div>
            </Button>
          </form>

          <p className="footer-text">
            Already have an account? <Link to="/">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
