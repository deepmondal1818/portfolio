import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, User, Monitor, Mail } from 'lucide-react';

const navItems = [
  { id: 'home',     label: 'Home',     icon: Home,    path: '/' },
  { id: 'about',    label: 'About',    icon: User,    path: '/about' },
  { id: 'projects', label: 'Projects', icon: Monitor, path: '/projects' },
  { id: 'contact',  label: 'Contact',  icon: Mail,    path: '/contact' },
];

const styles = `
.nav-right {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 50px;
  padding: 14px 8px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06);
}
.nav-btn {
  position: relative;
  width: 42px; height: 42px;
  border-radius: 50%;
  border: 1px solid transparent;
  background: transparent;
  color: #555;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: color 0.25s, background 0.25s, border-color 0.25s, box-shadow 0.25s, transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
}
.nav-btn:hover {
  background: rgba(232,93,4,0.15);
  border-color: rgba(232,93,4,0.4);
  color: #e85d04;
  transform: scale(1.15);
}
.nav-btn.active {
  background: linear-gradient(135deg, #e85d04, #c1121f);
  border-color: transparent;
  color: #fff;
  box-shadow: 0 4px 20px rgba(232,93,4,0.5);
  transform: scale(1.08);
}
.nav-tooltip {
  position: absolute;
  right: 52px;
  background: rgba(12,12,12,0.96);
  border: 1px solid #2a2a2a;
  color: #ddd;
  padding: 5px 12px;
  border-radius: 8px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
}
.nav-btn:hover .nav-tooltip { opacity: 1; }

@media (max-width: 640px) {
  .nav-right {
    right: 10px;
    padding: 10px 6px;
  }
  .nav-btn { width: 36px; height: 36px; }
}
`;

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState('home');

  useEffect(() => {
    const path = location.pathname;
    const found = navItems.find(n => n.path === path);
    if (found) setActive(found.id);
    else if (path.startsWith('/projects/')) setActive('projects');
  }, [location]);

  return (
    <>
      <style>{styles}</style>
      <nav className="nav-right" role="navigation" aria-label="Main navigation">
        {navItems.map(({ id, label, icon: Icon, path }) => (
          <button
            key={id}
            className={`nav-btn${active === id ? ' active' : ''}`}
            onClick={() => { navigate(path); setActive(id); }}
            aria-label={label}
            aria-current={active === id ? 'page' : undefined}
          >
            <Icon size={18} strokeWidth={2} />
            <span className="nav-tooltip">{label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
