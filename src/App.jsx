import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';
import {
  doc,
  setDoc,
  getDoc,
  updateDoc
} from 'firebase/firestore';

import { HashRouter as Router, Routes, Route, Navigate, Link, useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lock, CheckCircle, Play, ChevronRight, User, LogOut,
  Menu, X, BookOpen, Layers, Lightbulb, Workflow, Eye, Zap,
  ExternalLink, ArrowLeft, Trophy, Sun, Moon, Edit2, Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { courseData } from './data/courseData';
import './index.css';

// --- Authentication Mock ---
// --- Authentication Components ---
const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if user exists in Firestore, if not create
      const userDoc = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userDoc);

      let userData;
      if (!userSnap.exists()) {
        userData = {
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          progress: {
            completedWeeks: [],
            completedModules: [],
            quizScores: {}
          },
          createdAt: new Date().toISOString()
        };
        await setDoc(userDoc, userData);
      } else {
        userData = userSnap.data();
      }

      const sessionUser = {
        name: userData.name || user.displayName,
        email: user.email,
        uid: user.uid,
        photoURL: user.photoURL
      };

      setUser(sessionUser);
      navigate('/dashboard');
    } catch (err) {
      console.error("Login error:", err);
      setError("Failed to sign in. Please try again.");
    }
  };

  return (
    <div className="auth-container" style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)', color: 'var(--text)' }}>
      {/* Left Side: Brand & Visuals */}
      <div className="auth-visual-side" style={{
        flex: '1.2',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '60px',
        background: 'rgba(5, 5, 5, 0.4)'
      }}>
        <div className="glow-orb" style={{ top: '-10%', left: '-10%', width: '500px', height: '500px', opacity: 0.15 }}></div>
        <div className="glow-orb" style={{ bottom: '-10%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)', opacity: 0.1 }}></div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', zIndex: 10 }}
        >
          <img src="/logo_dark.png" alt="Logo" style={{ height: '80px', marginBottom: '40px', filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.2))' }} />
          <h1 style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1, marginBottom: '24px', letterSpacing: '-0.02em' }}>
            Elevate Your <br />
            <span className="premium-gradient">AI Intelligence.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '500px', lineHeight: 1.6 }}>
            Join the most comprehensive AI Generalist program designed for the next generation of industry leaders.
          </p>

          <div style={{ marginTop: '60px', display: 'flex', gap: '40px' }}>
            <div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 8px 0' }}>84+</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Curated Modules</p>
            </div>
            <div style={{ width: '1px', background: 'var(--glass-border)' }}></div>
            <div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 8px 0' }}>12</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Intense Weeks</p>
            </div>
            <div style={{ width: '1px', background: 'var(--glass-border)' }}></div>
            <div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 8px 0' }}>100%</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Hands-on Learning</p>
            </div>
          </div>
        </motion.div>

        <div style={{ position: 'absolute', bottom: '10%', right: '5%', opacity: 0.05, fontSize: '0.8rem', fontFamily: 'monospace', userSelect: 'none' }}>
          const program = "AI Generalist";<br />
          await master_the_future(you);
        </div>
      </div>

      {/* Right Side: Google Login */}
      <div className="auth-form-side" style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card"
          style={{ width: '100%', maxWidth: '440px', padding: '48px', border: '1px solid var(--glass-border)', textAlign: 'center' }}
        >
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '12px' }}>Welcome</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Sign in with Google to access the program and track your progress.
            </p>
          </div>

          {error && <p style={{ color: '#ef4444', marginBottom: '20px', fontSize: '0.9rem' }}>{error}</p>}

          <button
            onClick={handleGoogleLogin}
            className="btn-primary"
            style={{
              width: '100%',
              padding: '16px',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
              <path fill="#1976D2" d="M43.611,20.083L43.595,20L24,20v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            Sign in with Google
          </button>

          <p style={{ marginTop: '32px', color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: '1.6', textAlign: 'center' }}>
            By signing in, you agree to our Terms of Service.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

// --- Components ---

const Navbar = ({ user, handleLogout, theme, toggleTheme }) => (
  <nav className="glass-card" style={{
    margin: '20px',
    padding: '16px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: '20px',
    zIndex: 100,
    borderRadius: '20px',
    background: 'var(--nav-bg)',
    backdropFilter: 'blur(20px)'
  }}>
    <Link to="/dashboard" style={{
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '4px'
    }}>
      <div style={{ height: '40px', display: 'flex', alignItems: 'center' }}>
        <img
          src={theme === 'dark' ? '/logo_dark.png' : '/logo_light.png'}
          alt="Logo"
          style={{ height: '100%', width: 'auto', borderRadius: '4px' }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text)', margin: 0, letterSpacing: '-0.03em', lineHeight: 0.9 }}>Lets</h2>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text)', margin: 0, letterSpacing: '-0.03em', lineHeight: 0.9 }}>Upgrade</h2>
      </div>
    </Link>

    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <button
        onClick={toggleTheme}
        className="btn-outline"
        style={{ padding: '8px', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <Link to="/profile" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '2px' }} className="nav-user-info">
          <p style={{ fontSize: '0.875rem', fontWeight: 600, margin: 0, color: 'var(--text)' }}>{user?.name}</p>
          <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', margin: 0 }}>View Profile</p>
        </div>

        <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, var(--secondary), var(--primary))', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700 }}>
          {user?.name?.charAt(0).toUpperCase()}
        </div>
      </Link>

      <button onClick={handleLogout} className="btn-outline" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <LogOut size={16} /> Logout
      </button>
    </div>
  </nav>
);

const Profile = ({ user, progress, setUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(user?.name || '');
  const [isSaving, setIsSaving] = useState(false);

  const totalWeeks = 12;
  const totalModules = courseData.reduce((acc, week) => acc + (week.modules?.length || 0), 0);

  const completedModulesCount = Object.keys(progress.quizScores || {}).length;
  const totalCorrect = Object.values(progress.quizScores || {}).reduce((acc, score) => acc + score, 0);
  const totalTested = completedModulesCount * 5;
  const overallScore = totalTested > 0 ? Math.round((totalCorrect / totalTested) * 100) : 0;

  const handleSaveName = async () => {
    if (!tempName.trim()) return;
    setIsSaving(true);
    try {
      const userDoc = doc(db, 'users', user.uid);
      await updateDoc(userDoc, { name: tempName });
      setUser({ ...user, name: tempName });
      setIsEditing(false);
    } catch (err) {
      console.error("Error updating name:", err);
    } finally {
      setIsSaving(false);
    }
  };

  const stats = [
    { label: 'Overall Score', value: `${overallScore}%`, sub: 'Average Performance', icon: <Trophy size={20} color="#f59e0b" />, color: '#f59e0b' },
    { label: 'Correct Answers', value: totalCorrect, sub: 'Total Knowledge Hits', icon: <CheckCircle size={20} color="#10b981" />, color: '#10b981' },
    { label: 'Learning Gaps', value: totalTested - totalCorrect, sub: 'Growth Opportunities', icon: <X size={20} color="#ef4444" />, color: '#ef4444' },
    { label: 'Course Progress', value: `${Math.round((completedModulesCount / totalModules) * 100)}%`, sub: `${completedModulesCount} / ${totalModules} Modules`, icon: <Zap size={20} color="#6366f1" />, color: '#6366f1' },
  ];

  const badges = [
    { title: 'LMS Pioneer', desc: 'First step into the AI journey', icon: '🚀', achieved: completedModulesCount > 0 },
    { title: 'Fast Learner', desc: 'Completed 5+ modules', icon: '⚡', achieved: completedModulesCount >= 5 },
    { title: 'Prompt Master', desc: 'Achieved 80%+ average', icon: '🪄', achieved: overallScore >= 80 && completedModulesCount >= 3 }
  ];

  // Map progress to chart heights using real data ratios - using hex for better CSS manipulation
  const chartData = [
    { label: 'Goal', value: totalModules, max: totalModules || 1, color: '#6366f1', sub: 'Modules' },
    { label: 'Comp', value: completedModulesCount, max: totalModules || 1, color: '#a855f7', sub: 'Finished' },
    { label: 'Corr', value: totalCorrect, max: (totalModules * 5) || 1, color: '#10b981', sub: 'Correct' },
    { label: 'Incorr', value: totalTested - totalCorrect, max: (totalModules * 5) || 1, color: '#ef4444', sub: 'Wrong' },
    { label: 'Points', value: totalCorrect * 10, max: (totalModules * 50) || 1, color: '#f59e0b', sub: 'XP' }
  ];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <Link to="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '24px', width: 'fit-content', padding: '8px 16px', borderRadius: '12px' }} className="edit-hover">
        <ArrowLeft size={16} /> Back to Dashboard
      </Link>
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card profile-header"
        style={{ padding: '40px', display: 'flex', alignItems: 'center', gap: '32px', marginBottom: '32px' }}
      >
        <div style={{
          width: '100px',
          height: '100px',
          background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
          borderRadius: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem',
          fontWeight: 800,
          color: 'white',
          boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)'
        }}>
          {user?.name?.charAt(0).toUpperCase()}
        </div>
        <div style={{ flex: 1 }}>
          {isEditing ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '12px',
                  color: 'var(--text)',
                  padding: '8px 16px',
                  width: '100%',
                  outline: 'none'
                }}
                autoFocus
              />
              <button
                onClick={handleSaveName}
                disabled={isSaving}
                className="btn-primary"
                style={{ padding: '12px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {isSaving ? <div className="loader" style={{ width: '20px', height: '20px' }}></div> : <Check size={24} />}
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0 }}>{user?.name || 'Ayush Aryan'}</h1>
              <button
                onClick={() => setIsEditing(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '8px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                className="edit-hover"
              >
                <Edit2 size={20} />
              </button>
            </div>
          )}
          <div className="profile-header-info" style={{ display: 'flex', gap: '24px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><User size={16} /> {user?.email || 'user@example.com'}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><BookOpen size={16} /> Member since 2025</span>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-muted)', marginBottom: '8px' }}>Access Level</p>
          <div className="glass-card" style={{ padding: '8px 24px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.1)', borderColor: 'rgba(99, 102, 241, 0.2)', color: '#818cf8', fontWeight: 600, letterSpacing: '1px' }}>
            USER
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="profile-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card"
            style={{ padding: '24px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ padding: '8px', background: `${stat.color}15`, borderRadius: '8px' }}>{stat.icon}</div>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>{stat.label}</span>
            </div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '8px' }}>{stat.value}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Zap size={12} color="#10b981" /> {stat.sub}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="profile-bottom-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        {/* Performance Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card"
          style={{ padding: '32px', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', position: 'relative', zIndex: 11 }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0 }}>Performance Overview</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Dynamic growth tracking based on module activity</p>
            </div>
            <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <motion.div
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981' }}
                />
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '2px', fontWeight: 700 }}>REAL-TIME</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 700 }}>ANALYTICS VERIFIED</span>
            </div>
          </div>

          <div style={{ height: '300px', position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', padding: '0 20px 40px' }}>
            {/* Background Grid Lines */}
            {[0, 25, 50, 75, 100].map((level) => (
              <div key={level} style={{
                position: 'absolute',
                bottom: `${level}%`,
                left: 0,
                right: 0,
                height: '1px',
                background: 'var(--glass-border)',
                opacity: 0.2,
                zIndex: 0
              }}>
                <span style={{ position: 'absolute', left: '-10px', top: '-8px', fontSize: '0.6rem', color: 'var(--text-muted)' }}>{level}%</span>
              </div>
            ))}

            {chartData.map((data, i) => {
              const percentage = Math.max((data.value / data.max) * 100, 5);
              return (
                <div key={i} className="chart-column" style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', gap: '16px', zIndex: 10 }}>
                  <div style={{ position: 'relative', width: '60%', height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: `${percentage}%`, opacity: 1 }}
                      transition={{ duration: 1.2, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                      whileHover={{ scaleX: 1.1, filter: 'brightness(1.3)' }}
                      className="chart-bar"
                      style={{
                        width: '100%',
                        background: `linear-gradient(to top, ${data.color}, ${data.color}aa)`,
                        borderRadius: '12px 12px 6px 6px',
                        cursor: 'pointer',
                        boxShadow: `0 10px 30px ${data.color}33`,
                        position: 'relative'
                      }}
                    >
                      {/* Tooltip on hover */}
                      <div className="chart-tooltip">
                        <div style={{ fontSize: '0.7rem', opacity: 0.7, marginBottom: '2px' }}>{data.label}</div>
                        <div style={{ fontSize: '1rem', fontWeight: 800 }}>{data.value} <span style={{ fontSize: '0.7rem' }}>{data.sub}</span></div>
                      </div>
                    </motion.div>
                  </div>
                  <div className="chart-label-container">
                    <div style={{ fontSize: '0.8rem', color: 'var(--text)', fontWeight: 800 }}>{data.label}</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>{data.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chart Glow Effect */}
          <div style={{
            position: 'absolute',
            bottom: '-20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%',
            height: '40%',
            background: `radial-gradient(ellipse at center, ${chartData[0].color}33 0%, transparent 70%)`,
            opacity: 0.2,
            pointerEvents: 'none',
            zIndex: 1
          }}></div>
        </motion.div>


        {/* Mastery Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card"
          style={{ padding: '32px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <Trophy size={20} color="var(--primary)" />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Mastery Badges</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {badges.map((badge, i) => (
              <div key={i} style={{
                padding: '16px',
                background: badge.achieved ? 'rgba(168, 85, 247, 0.05)' : 'transparent',
                border: '1px solid',
                borderColor: badge.achieved ? 'var(--accent)' : 'var(--glass-border)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                opacity: badge.achieved ? 1 : 0.4,
                transition: 'all 0.3s ease'
              }}>
                <span style={{ fontSize: '1.5rem' }}>{badge.icon}</span>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>{badge.title}</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>{badge.desc}</p>
                </div>
                {badge.achieved && <CheckCircle size={16} color="var(--success)" style={{ marginLeft: 'auto' }} />}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
const AIEcosystem = () => {
  const tools = [
    // Text & Chat
    { name: 'ChatGPT', url: 'https://chat.openai.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png' },
    { name: 'Claude', url: 'https://claude.ai', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Claude_AI_logo.svg/1024px-Claude_AI_logo.svg.png' },
    { name: 'Gemini', url: 'https://gemini.google.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/1024px-Google_Gemini_logo.svg.png' },
    { name: 'Jasper', url: 'https://jasper.ai', logo: 'https://www.google.com/s2/favicons?domain=jasper.ai&sz=64' },
    { name: 'Writesonic', url: 'https://writesonic.com', logo: 'https://www.google.com/s2/favicons?domain=writesonic.com&sz=64' },
    { name: 'Copy.ai', url: 'https://copy.ai', logo: 'https://www.google.com/s2/favicons?domain=copy.ai&sz=64' },
    { name: 'Grammarly', url: 'https://grammarly.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Grammarly_logo.svg' },

    // Image Generation
    { name: 'Midjourney', url: 'https://midjourney.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.svg' },
    { name: 'DALL-E', url: 'https://openai.com/dall-e-3', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1024px-OpenAI_Logo.svg.png' },
    { name: 'Firefly', url: 'https://firefly.adobe.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Creative_Cloud_logo_2020.svg' },
    { name: 'Leonardo', url: 'https://leonardo.ai', logo: 'https://www.google.com/s2/favicons?domain=leonardo.ai&sz=64' },
    { name: 'Canva AI', url: 'https://canva.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg' },

    // Video AI
    { name: 'Synthesia', url: 'https://synthesia.io', logo: 'https://www.google.com/s2/favicons?domain=synthesia.io&sz=64' },
    { name: 'Pika', url: 'https://pika.art', logo: 'https://www.google.com/s2/favicons?domain=pika.art&sz=64' },
    { name: 'Runway', url: 'https://runwayml.com', logo: 'https://www.google.com/s2/favicons?domain=runwayml.com&sz=64' },
    { name: 'VEED', url: 'https://veed.io', logo: 'https://www.google.com/s2/favicons?domain=veed.io&sz=64' },

    // Audio & Voice
    { name: 'ElevenLabs', url: 'https://elevenlabs.io', logo: 'https://www.google.com/s2/favicons?domain=elevenlabs.io&sz=64' },
    { name: 'Murf', url: 'https://murf.ai', logo: 'https://www.google.com/s2/favicons?domain=murf.ai&sz=64' },
    { name: 'Soundraw', url: 'https://soundraw.io', logo: 'https://www.google.com/s2/favicons?domain=soundraw.io&sz=64' },

    // Data & Code
    { name: 'Copilot', url: 'https://github.com/features/copilot', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
    { name: 'Replit', url: 'https://replit.com', logo: 'https://www.google.com/s2/favicons?domain=replit.com&sz=64' },
    { name: 'Tableau', url: 'https://tableau.com', logo: 'https://www.google.com/s2/favicons?domain=tableau.com&sz=64' },
    { name: 'H2O.ai', url: 'https://h2o.ai', logo: 'https://www.google.com/s2/favicons?domain=h2o.ai&sz=64' },

    // Productivity & Business
    { name: 'Notion AI', url: 'https://notion.so', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' },
    { name: 'Zapier', url: 'https://zapier.com', logo: 'https://www.google.com/s2/favicons?domain=zapier.com&sz=64' },
    { name: 'Salesforce', url: 'https://salesforce.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
    { name: 'HubSpot', url: 'https://hubspot.com', logo: 'https://www.google.com/s2/favicons?domain=hubspot.com&sz=64' }
  ];

  return (
    <div className="marquee-container">
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h3 className="premium-gradient" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '2px' }}>AI ECOSYSTEM MAP</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Direct access to the world's most powerful AI models</p>
      </div>
      <div className="marquee-content">
        {[...tools, ...tools].map((tool, idx) => (
          <a
            key={idx}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="marquee-item"
          >
            <img src={tool.logo} alt={tool.name} onError={(e) => e.target.style.display = 'none'} />
            <span>{tool.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

const Dashboard = ({ progress }) => {
  return (
    <div style={{ padding: '0 20px 40px' }}>
      <header style={{ textAlign: 'center', padding: '80px 0 40px' }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="premium-gradient"
          style={{ fontSize: '4.5rem', fontWeight: 800, marginBottom: '24px' }}
        >
          Your Journey Begins
        </motion.h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
          Transform your understanding of Generative AI through our immersive, hands-on workshop modules.
        </p>
      </header>

      <div className="dashboard-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        {courseData.map((week, idx) => {
          const isUnlocked = idx === 0 || progress.completedWeeks.includes(courseData[idx - 1].id);
          const isCompleted = progress.completedWeeks.includes(week.id);
          const weekNumber = week.id.toString().padStart(2, '0');

          return (
            <motion.div
              layout
              key={week.id}
              whileHover={isUnlocked ? { y: -10 } : {}}
              className={`glass-card ${!isUnlocked ? 'locked-week' : ''}`}
              style={{ padding: '40px', position: 'relative' }}
            >
              <div className="card-number">{weekNumber}</div>

              <div style={{
                width: '48px',
                height: '48px',
                background: isUnlocked ? 'rgba(168, 85, 247, 0.15)' : 'var(--glass)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                color: isUnlocked ? 'var(--accent)' : 'var(--text-muted)'
              }}>
                {isUnlocked ? (isCompleted ? <CheckCircle size={24} /> : <Zap size={24} />) : <Lock size={24} />}
              </div>

              <h3 style={{ marginBottom: '12px', fontSize: '1.75rem', fontWeight: 700 }}>{week.title.replace('Week ' + week.id + ': ', '')}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '24px', lineHeight: '1.6', minHeight: '3em' }}>{week.overview}</p>

              {isUnlocked && (
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                    <span>Progress</span>
                    <span>{(() => {
                      const weekModules = week.modules || [];
                      const completed = weekModules.filter(m => progress.quizScores && progress.quizScores[m.id] >= 3).length;
                      return weekModules.length > 0 ? Math.round((completed / weekModules.length) * 100) : 0;
                    })()}%</span>
                  </div>
                  <div style={{ height: '6px', background: 'var(--glass-border)', borderRadius: '3px', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${(() => {
                          const weekModules = week.modules || [];
                          const completed = weekModules.filter(m => progress.quizScores && progress.quizScores[m.id] >= 3).length;
                          return weekModules.length > 0 ? (completed / weekModules.length) * 100 : 0;
                        })()}%`
                      }}
                      style={{ height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }}
                    />
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', alignItems: 'center' }}>
                {isUnlocked ? (
                  <Link to={`/week/${week.id}`} style={{
                    textDecoration: 'none',
                    color: 'var(--text)',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '1rem'
                  }}>
                    Start Module <ChevronRight size={18} />
                  </Link>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                    <span>Locked</span> <Lock size={16} />
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const WeekView = ({ progress, setProgress }) => {
  const { weekId } = useParams();
  const week = courseData.find(w => w.id === parseInt(weekId));
  const navigate = useNavigate();

  if (!week) return <Navigate to="/dashboard" />;

  const handleCompleteWeek = () => {
    if (!progress.completedWeeks.includes(week.id)) {
      const newWeeks = [...progress.completedWeeks, week.id];
      setProgress({ ...progress, completedWeeks: newWeeks });
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#a855f7', '#22d3ee']
      });
    }
    navigate('/dashboard');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px' }}>
        <Link to="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '24px' }}>
          <ArrowLeft size={16} /> Back to Dashboard
        </Link>
        <h1 className="premium-gradient" style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{week.title}</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <p style={{ color: 'var(--text-muted)', margin: 0 }}>{week.overview} • 7 Days of Mastery</p>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent)' }}>
              {Math.round((week.modules.filter(m => progress.quizScores && progress.quizScores[m.id] >= 3).length / week.modules.length) * 100)}% Complete
            </span>
          </div>
        </div>
        <div style={{ height: '8px', background: 'var(--glass-border)', borderRadius: '4px', overflow: 'hidden', marginBottom: '40px' }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(week.modules.filter(m => progress.quizScores && progress.quizScores[m.id] >= 3).length / week.modules.length) * 100}%` }}
            style={{ height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }}
          />
        </div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {week.modules.map((module, idx) => {
          const isModuleUnlocked = idx === 0 || (progress.quizScores && (progress.quizScores[week.modules[idx - 1].id] >= 3));
          const isModuleCompleted = progress.quizScores && (progress.quizScores[module.id] >= 3);

          return (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={module.id}
              className={`glass-card ${!isModuleUnlocked ? 'locked-week' : ''}`}
              style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: isModuleUnlocked ? 1 : 0.6 }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', color: isModuleUnlocked ? 'var(--accent)' : 'var(--text-muted)', fontWeight: 700, marginBottom: '4px' }}>
                  DAY {idx + 1} • {module.id}
                  {isModuleCompleted && <span style={{ marginLeft: '12px', color: 'var(--success)' }}>✓ PASSED</span>}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{module.name}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{module.topic}: {module.subtopic}</p>
              </div>

              {isModuleUnlocked ? (
                <Link to={`/week/${weekId}/module/${module.id}`} className="btn-outline" style={{ textDecoration: 'none', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Study <Play size={14} fill="currentColor" />
                </Link>
              ) : (
                <div style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' }}>
                  <Lock size={14} /> Locked
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {week.modules.length > 0 && !progress.completedWeeks.includes(week.id) && (
        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <button
            onClick={handleCompleteWeek}
            disabled={week.modules.filter(m => progress.quizScores && progress.quizScores[m.id] >= 3).length < week.modules.length}
            className="btn-primary"
            style={{
              padding: '16px 40px',
              fontSize: '1.1rem',
              opacity: week.modules.filter(m => progress.quizScores && progress.quizScores[m.id] >= 3).length < week.modules.length ? 0.5 : 1,
              cursor: week.modules.filter(m => progress.quizScores && progress.quizScores[m.id] >= 3).length < week.modules.length ? 'not-allowed' : 'pointer'
            }}
          >
            {week.modules.filter(m => progress.quizScores && progress.quizScores[m.id] >= 3).length < week.modules.length
              ? 'Finish All Quizzes to Unlock Next Week'
              : 'Complete Week & Unlock Next'}
          </button>
        </div>
      )}
    </div>
  );
};

const QuizModal = ({ module, onComplete, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selected === module.quiz[currentStep].answer) {
      setScore(score + 1);
    }

    if (currentStep < module.quiz.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    const passed = score >= 3;
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>{passed ? '🎉' : '❌'}</div>
        <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>{passed ? 'Module Passed!' : 'Try Again'}</h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '32px' }}>
          You scored {score} out of {module.quiz.length}<br />
          {passed ? 'You can now proceed to the next day.' : 'You need at least 3 correct answers to pass.'}
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          {passed ? (
            <button onClick={() => onComplete(score)} className="btn-primary">Continue</button>
          ) : (
            <button onClick={onClose} className="btn-outline">Back to Study</button>
          )}
        </div>
      </div>
    );
  }

  const q = module.quiz[currentStep];

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>QUESTION {currentStep + 1} / {module.quiz.length}</span>
        <div style={{ height: '4px', background: 'var(--glass-border)', flex: 1, margin: '0 20px', borderRadius: '2px' }}>
          <div style={{ height: '100%', background: 'var(--accent)', width: `${((currentStep + 1) / module.quiz.length) * 100}%`, transition: 'width 0.3s ease' }}></div>
        </div>
      </div>

      <h3 style={{ fontSize: '1.5rem', marginBottom: '32px', lineHeight: '1.4' }}>{q.question}</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            style={{
              padding: '16px 24px',
              borderRadius: '12px',
              border: '1px solid',
              borderColor: selected === i ? 'var(--accent)' : 'var(--glass-border)',
              background: selected === i ? 'rgba(168, 85, 247, 0.1)' : 'var(--glass)',
              color: 'var(--text)',
              textAlign: 'left',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {opt}
          </button>
        ))}
      </div>

      <button
        disabled={selected === null}
        onClick={handleNext}
        className="btn-primary"
        style={{ width: '100%', opacity: selected === null ? 0.5 : 1 }}
      >
        {currentStep === module.quiz.length - 1 ? 'Finish Quiz' : 'Next Question'}
      </button>
    </div>
  );
};

const ModuleView = ({ progress, setProgress }) => {
  const { weekId, moduleId } = useParams();
  const [showQuiz, setShowQuiz] = useState(false);
  const week = courseData.find(w => w.id === parseInt(weekId));
  const module = week?.modules.find(m => m.id === moduleId);
  const navigate = useNavigate();

  if (!module) return <Navigate to={`/week/${weekId}`} />;

  const handleQuizComplete = (score) => {
    const newScores = { ...(progress.quizScores || {}), [module.id]: score };
    setProgress({ ...progress, quizScores: newScores });

    if (score >= 3) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
    setShowQuiz(false);
    navigate(`/week/${weekId}`);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px' }}>
        <Link to={`/week/${weekId}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '24px' }}>
          <ArrowLeft size={16} /> Back to Week {weekId}
        </Link>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 className="premium-gradient" style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{module.name}</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{module.topic} • {module.subtopic}</p>
          </div>
        </div>
      </header>

      {showQuiz ? (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <QuizModal module={module} onComplete={handleQuizComplete} onClose={() => setShowQuiz(false)} />
        </motion.div>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="video-container"
          >
            <iframe
              src="https://www.youtube.com/embed/gOwl8AbHo3w?start=234"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>

          {module.details ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {module.details.map((detail, idx) => (
                <motion.div
                  key={detail.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card"
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ background: 'var(--glass-border)', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2 style={{ fontSize: '1.25rem', margin: 0 }}>{detail.id} {detail.title}</h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                      <BookOpen size={14} /> 5 MIN READ
                    </div>
                  </div>

                  <div style={{ padding: '32px' }}>
                    <div className="topic-content-grid">
                      <div className="detail-section">
                        <h4><Lightbulb size={18} /> Concepts</h4>
                        <div style={{ whiteSpace: 'pre-wrap' }}>
                          {detail.concepts.split('\n').map((line, i) => (
                            <p key={i} style={{ marginBottom: '8px' }}>
                              {line.startsWith('- ') ? <span>• {line.slice(2)}</span> : line}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className="detail-section">
                        <h4><Layers size={18} /> Examples</h4>
                        <div style={{ whiteSpace: 'pre-wrap' }}>
                          {detail.examples.split('\n').map((line, i) => (
                            <p key={i} style={{ marginBottom: '8px' }}>
                              {line.startsWith('- ') ? <span>• {line.slice(2)}</span> : line}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className="detail-section">
                        <h4><Eye size={18} /> Visualization</h4>
                        <div style={{ whiteSpace: 'pre-wrap' }}>
                          {detail.visualization.split('\n').map((line, i) => (
                            <p key={i} style={{ marginBottom: '8px' }}>
                              {line.startsWith('- ') ? <span>• {line.slice(2)}</span> : line}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className="detail-section">
                        <h4><Workflow size={18} /> Practical Usage</h4>
                        <div style={{ whiteSpace: 'pre-wrap' }}>
                          {detail.practical.split('\n').map((line, i) => (
                            <p key={i} style={{ marginBottom: '8px', color: i % 2 === 0 ? 'var(--text)' : 'var(--text-muted)' }}>
                              {line.startsWith('- ') ? <span>• {line.slice(2)}</span> : line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div style={{ marginTop: '40px', textAlign: 'center' }}>
                <button onClick={() => setShowQuiz(true)} className="btn-primary" style={{ padding: '16px 48px', fontSize: '1.2rem' }}>
                  Take Module Quiz
                </button>
              </div>
            </div>
          ) : (
            <div className="glass-card" style={{ padding: '60px', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', background: 'var(--glass-border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                <Layers size={40} color="var(--text-muted)" />
              </div>
              <h2>Content Coming Soon</h2>
              <p style={{ color: 'var(--text-muted)' }}>We are currently crafting high-quality content for this module.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState({
    completedWeeks: [],
    completedModules: [],
    quizScores: {}
  });
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      if (fbUser) {
        // Fetch user data and progress from Firestore
        const userDoc = doc(db, 'users', fbUser.uid);
        const userSnap = await getDoc(userDoc);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          setUser({
            name: userData.name || fbUser.displayName,
            email: fbUser.email,
            uid: fbUser.uid,
            photoURL: fbUser.photoURL
          });
          setProgress(userData.progress || {
            completedWeeks: [],
            completedModules: [],
            quizScores: {}
          });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Sync progress to Firestore when it changes
  useEffect(() => {
    const syncProgress = async () => {
      if (user?.uid) {
        const userDoc = doc(db, 'users', user.uid);
        await updateDoc(userDoc, { progress });
      }
    };
    syncProgress();
  }, [progress, user]);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  if (loading) return <div style={{ minHeight: '100vh', background: 'var(--background)' }}></div>;

  return (
    <Router>
      <div className="grid-bg"></div>
      <div className="glow-orb" style={{ top: '-10%', right: '10%' }}></div>
      <div className="glow-orb" style={{ bottom: '20%', left: '5%', background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)', opacity: 0.2 }}></div>

      <AnimatePresence mode="wait">
        <Routes>
          {!user ? (
            <Route path="*" element={<Login setUser={setUser} />} />
          ) : (
            <Route path="*" element={
              <>
                <div className="top-blur-barrier"></div>
                <Navbar user={user} handleLogout={handleLogout} theme={theme} toggleTheme={toggleTheme} />
                <Routes>
                  <Route path="/dashboard" element={<Dashboard progress={progress} />} />
                  <Route path="/profile" element={<Profile user={user} progress={progress} setUser={setUser} />} />
                  <Route path="/week/:weekId" element={<WeekView progress={progress} setProgress={setProgress} />} />
                  <Route path="/week/:weekId/module/:moduleId" element={<ModuleView progress={progress} setProgress={setProgress} />} />
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </Routes>
                <AIEcosystem />
              </>
            } />
          )}
        </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;
