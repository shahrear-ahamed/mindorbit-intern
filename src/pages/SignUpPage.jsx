import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FcGoogle } from 'react-icons/fc';
import { SiSlack } from 'react-icons/si';
import { FiArrowRight } from 'react-icons/fi';
import { FaRocket } from 'react-icons/fa';
import { HiOutlineMap, HiOutlineSparkles, HiOutlineUsers } from 'react-icons/hi';
import Button from '../components/Button';
import Input from '../components/Input';
import PasswordStrength from '../components/PasswordStrength';
import { signUpSchema } from '../schemas/authSchemas';
import '../App.css';

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signUpSchema) });

  const password = watch('password', '');

  const onSubmit = (data) => {
    let users;
    try {
      users = JSON.parse(localStorage.getItem('users') || '[]');
    } catch {
      users = [];
    }
    const emailExists = users.some(u => u.email === data.email);

    if (emailExists) {
      alert('An account with this email already exists.');
      return;
    }

    const userData = { name: data.name, email: data.email, password: data.password };
    const updatedUsers = [...users, userData];
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    const expiresAt = Date.now() + 24 * 60 * 60 * 1000;
    localStorage.setItem('activeSession', JSON.stringify({ email: data.email, expiresAt }));
    navigate('/dashboard');
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

          <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Full Name"
              placeholder="John Doe"
              error={errors.name}
              {...register('name')}
            />
            <Input
              label="Email"
              type="email"
              placeholder="name@company.com"
              error={errors.email}
              {...register('email')}
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              error={errors.password}
              {...register('password')}
            />

            <PasswordStrength password={password} />

            <Input
              label="Confirm Password"
              type="password"
              placeholder="••••••••"
              error={errors.confirm}
              {...register('confirm')}
            />

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