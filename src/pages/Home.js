import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GitBranch as Github, Mail, Phone, ArrowRight } from 'lucide-react';
import FlameBackground from '../components/FlameBackground';
import { contact } from '../data/portfolio';

const styles = `
.home-page {
  min-height: 100vh;
  display: flex; align-items: center; justify-content: center;
  padding: 60px 90px 60px 60px;
  position: relative; overflow: hidden;
}
.home-content {
  position: relative; z-index: 1;
  display: flex; flex-direction: column;
  align-items: center; text-align: center; gap: 20px;
}
.photo-frame {
  width: 300px; height: 300px;
  border-radius: 20px; overflow: hidden;
  border: 1px solid rgba(232,93,4,0.35);
  box-shadow: 0 0 60px rgba(232,93,4,0.4), 0 0 130px rgba(193,18,31,0.18);
}
.photo-frame img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }
.script-name {
  font-family: 'Dancing Script', cursive;
  font-size: clamp(3rem, 7vw, 5rem);
  color: #fff;
  text-shadow: 0 0 40px rgba(232,93,4,0.5);
  line-height: 1; margin-top: -8px;
}
.home-tagline { font-size: 0.97rem; color: #999; letter-spacing: 0.02em; }
.home-tagline strong { color: #e85d04; font-weight: 600; }
.home-social { display: flex; gap: 10px; margin-top: 4px; }
.social-btn {
  width: 40px; height: 40px; border-radius: 50%;
  background: #161616; border: 1px solid #252525;
  color: #777; display: flex; align-items: center; justify-content: center;
  font-size: 15px; cursor: pointer; transition: all 0.3s; text-decoration: none;
}
.social-btn:hover { background: #e85d04; border-color: #e85d04; color: #fff; transform: translateY(-3px); }
.home-cta-row { display: flex; gap: 12px; margin-top: 6px; flex-wrap: wrap; justify-content: center; }
.btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #e85d04, #c1121f);
  border: none; border-radius: 10px;
  color: #fff; font-size: 0.88rem; font-weight: 600;
  cursor: pointer; transition: all 0.3s;
  letter-spacing: 0.03em;
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(232,93,4,0.4); }
.btn-secondary {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 24px;
  background: transparent;
  border: 1px solid #2a2a2a; border-radius: 10px;
  color: #aaa; font-size: 0.88rem; font-weight: 500;
  cursor: pointer; transition: all 0.3s;
}
.btn-secondary:hover { border-color: #e85d04; color: #e85d04; }
.glow-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 18px 7px rgba(255,255,255,0.1);
  position: absolute; top: 20%; left: 14%;
}
@media (max-width: 640px) {
  .home-page { padding: 40px 60px 40px 20px; }
  .photo-frame { width: 240px; height: 240px; }
}
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <style>{styles}</style>
      <div className="home-page">
        <FlameBackground />
        <div className="glow-dot" />
        <motion.div
          className="home-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="photo-frame" variants={itemVariants}>
            <img src="/photo.png" alt="Deep Mondal" />
          </motion.div>

          <motion.div className="script-name" variants={itemVariants}>
            Deep Mondal
          </motion.div>

          <motion.p className="home-tagline" variants={itemVariants}>
            Hi, I'm <strong>Deep Mondal</strong> — <strong>Full-Stack Developer</strong> &amp; <strong>AIML Enthusiast</strong>
          </motion.p>

          <motion.div className="home-social" variants={itemVariants}>
            <a href={contact.githubUrl} target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
              <Github size={16} />
            </a>
            <a href={`mailto:${contact.email}`} className="social-btn" aria-label="Email">
              <Mail size={16} />
            </a>
            <a href={`tel:${contact.phone}`} className="social-btn" aria-label="Phone">
              <Phone size={16} />
            </a>
          </motion.div>

          <motion.div className="home-cta-row" variants={itemVariants}>
            <button className="btn-primary" onClick={() => navigate('/projects')}>
              View Projects <ArrowRight size={15} />
            </button>
            <button className="btn-secondary" onClick={() => navigate('/contact')}>
              Get In Touch
            </button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
