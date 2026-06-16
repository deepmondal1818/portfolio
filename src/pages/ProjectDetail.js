import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import FlameBackground from '../components/FlameBackground';
import { projects } from '../data/portfolio';

const styles = `
.detail-page {
  min-height: 100vh;
  padding: 60px 100px 80px 60px;
  position: relative; overflow: hidden;
}
.detail-inner { position: relative; z-index: 1; max-width: 940px; margin: 0 auto; }
.back-btn {
  display: inline-flex; align-items: center; gap: 8px;
  color: #e85d04; font-size: 0.85rem; font-weight: 500;
  cursor: pointer; border: none; background: none;
  padding: 0; margin-bottom: 36px; transition: gap 0.2s;
}
.back-btn:hover { gap: 12px; }
.detail-label {
  font-size: 0.7rem; text-transform: uppercase;
  letter-spacing: 0.18em; color: #e85d04;
  font-weight: 700; margin-bottom: 10px;
}
.detail-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3.2rem);
  color: #fff; line-height: 1.1; margin-bottom: 14px;
}
.detail-sub { color: #777; font-size: 0.9rem; line-height: 1.75; max-width: 680px; margin-bottom: 36px; }
.detail-hero {
  width: 100%; height: 280px; border-radius: 18px;
  display: flex; align-items: center; justify-content: center;
  font-size: 80px; margin-bottom: 40px;
  border: 1px solid #1e1e1e;
}
.detail-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 48px; }
.subsection-label {
  font-size: 0.68rem; text-transform: uppercase;
  letter-spacing: 0.15em; color: #e85d04;
  font-weight: 700; margin-bottom: 16px;
}
.detail-desc { color: #888; font-size: 0.88rem; line-height: 1.85; margin-bottom: 28px; }
.feature-item {
  display: flex; align-items: flex-start; gap: 12px;
  padding: 10px 0; border-bottom: 1px solid #141414;
  font-size: 0.84rem; color: #999;
}
.feature-dot {
  width: 5px; height: 5px; border-radius: 50%;
  background: #e85d04; margin-top: 7px; flex-shrink: 0;
}
.badge-group { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px; }
.badge-orange {
  padding: 6px 16px; border-radius: 20px;
  background: rgba(232,93,4,0.08);
  border: 1px solid rgba(232,93,4,0.2);
  color: #e85d04; font-size: 0.77rem; font-weight: 500;
}
.badge-muted {
  padding: 6px 16px; border-radius: 20px;
  background: rgba(255,255,255,0.03);
  border: 1px solid #222;
  color: #888; font-size: 0.77rem;
}
.not-found {
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  flex-direction: column; gap: 16px;
  font-family: 'Playfair Display', serif; color: #444;
}
@media (max-width: 768px) {
  .detail-page { padding: 40px 60px 60px 20px; }
  .detail-grid { grid-template-columns: 1fr; }
  .detail-hero { height: 200px; font-size: 56px; }
}
`;

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.25 } },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="not-found">
        <style>{styles}</style>
        <FlameBackground />
        <span style={{fontSize:'3rem'}}>🔍</span>
        <p>Project not found.</p>
        <button className="back-btn" onClick={() => navigate('/projects')}>
          <ArrowLeft size={14} /> Back to Projects
        </button>
      </div>
    );
  }

  return (
    <>
      <style>{styles}</style>
      <div className="detail-page">
        <FlameBackground />
        <motion.div
          className="detail-inner"
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <button className="back-btn" onClick={() => navigate('/projects')}>
            <ArrowLeft size={14} /> Back to Projects
          </button>

          <p className="detail-label">{project.category}</p>
          <h1 className="detail-title">{project.title}</h1>
          <p className="detail-sub">{project.longDesc}</p>

          <div className="detail-hero" style={{ background: project.gradient }}>
            {project.emoji}
          </div>

          <div className="detail-grid">
            <div>
              <p className="subsection-label">Key Features</p>
              {project.features.map((f, i) => (
                <div className="feature-item" key={i}>
                  <div className="feature-dot" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div>
              <p className="subsection-label">Tech Stack</p>
              <div className="badge-group">
                {project.stack.map(t => (
                  <span className="badge-orange" key={t}>{t}</span>
                ))}
              </div>

              <p className="subsection-label">Concepts Applied</p>
              <div className="badge-group">
                {project.concepts.map(c => (
                  <span className="badge-muted" key={c}>{c}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
