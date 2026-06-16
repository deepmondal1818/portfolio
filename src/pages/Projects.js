import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import FlameBackground from '../components/FlameBackground';
import { projects } from '../data/portfolio';

const styles = `
.projects-page {
  min-height: 100vh;
  display: flex; align-items: center; justify-content: center;
  padding: 60px 90px 60px 60px;
  position: relative; overflow: hidden;
}
.projects-content { position: relative; z-index: 1; width: 100%; max-width: 940px; }
.section-label {
  font-size: 0.7rem; text-transform: uppercase;
  letter-spacing: 0.18em; color: #e85d04;
  font-weight: 700; margin-bottom: 10px;
}
.section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  line-height: 1.15; margin-bottom: 36px; color: #fff;
}
.projects-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
.project-card {
  background: #0e0e0e; border: 1px solid #1a1a1a;
  border-radius: 18px; overflow: hidden;
  cursor: pointer; position: relative;
  transition: border-color 0.3s, box-shadow 0.3s;
  text-align: left;
}
.project-card:hover {
  border-color: rgba(232,93,4,0.5);
  box-shadow: 0 20px 60px rgba(232,93,4,0.12);
}
.project-arrow {
  position: absolute; top: 14px; right: 14px;
  opacity: 0; transition: opacity 0.25s; color: #e85d04;
}
.project-card:hover .project-arrow { opacity: 1; }
.project-thumb {
  height: 130px; display: flex; align-items: center;
  justify-content: center; font-size: 44px; position: relative; overflow: hidden;
}
.project-thumb::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(to bottom, transparent 40%, #0e0e0e);
}
.project-body { padding: 18px; }
.project-cat {
  font-size: 0.68rem; text-transform: uppercase;
  letter-spacing: 0.12em; color: #e85d04; font-weight: 600; margin-bottom: 6px;
}
.project-title { font-size: 0.97rem; font-weight: 600; color: #eee; margin-bottom: 8px; }
.project-desc { font-size: 0.78rem; color: #666; line-height: 1.6; margin-bottom: 12px; }
.project-tags { display: flex; gap: 6px; flex-wrap: wrap; }
.project-tag {
  font-size: 0.7rem; padding: 3px 10px; border-radius: 12px;
  background: rgba(232,93,4,0.07); color: #e85d04;
  border: 1px solid rgba(232,93,4,0.18);
}
@media (max-width: 768px) {
  .projects-page { padding: 40px 60px 40px 20px; }
  .projects-grid { grid-template-columns: 1fr; }
}
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function Projects() {
  const navigate = useNavigate();

  return (
    <>
      <style>{styles}</style>
      <div className="projects-page">
        <FlameBackground />
        <div className="projects-content">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Selected Projects</h2>
          <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map(p => (
              <motion.div
                key={p.id}
                className="project-card"
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onClick={() => navigate(`/projects/${p.id}`)}
              >
                <ArrowUpRight size={18} className="project-arrow" />
                <div className="project-thumb" style={{ background: p.gradient }}>
                  {p.emoji}
                </div>
                <div className="project-body">
                  <div className="project-cat">{p.category}</div>
                  <div className="project-title">{p.title}</div>
                  <div className="project-desc">{p.shortDesc}</div>
                  <div className="project-tags">
                    {p.stack.slice(0, 3).map(t => (
                      <span key={t} className="project-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
