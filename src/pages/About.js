import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FlameBackground from '../components/FlameBackground';
import { skills, education } from '../data/portfolio';

const categories = ['All', ...Array.from(new Set(skills.map(s => s.category)))];

const styles = `
.about-page {
  min-height: 100vh;
  display: flex; align-items: center; justify-content: center;
  padding: 60px 90px 60px 60px;
  position: relative; overflow: hidden;
}
.about-content { position: relative; z-index: 1; width: 100%; max-width: 940px; }
.about-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 60px; align-items: start; }
.about-photo {
  width: 100%; aspect-ratio: 3/4;
  border-radius: 20px; overflow: hidden;
  box-shadow: 0 0 50px rgba(232,93,4,0.25);
  border: 1px solid rgba(232,93,4,0.15);
  position: sticky; top: 60px;
}
.about-photo img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }
.section-label {
  font-size: 0.7rem; text-transform: uppercase;
  letter-spacing: 0.18em; color: #e85d04;
  font-weight: 700; margin-bottom: 10px;
}
.section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  line-height: 1.15; margin-bottom: 18px; color: #fff;
}
.about-text { color: #888; line-height: 1.85; font-size: 0.9rem; margin-bottom: 16px; }

.skill-filter { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 18px; }
.filter-btn {
  padding: 5px 14px; border-radius: 20px;
  border: 1px solid #252525; background: transparent;
  font-size: 0.75rem; color: #666; cursor: pointer; transition: all 0.25s;
}
.filter-btn.active, .filter-btn:hover {
  background: rgba(232,93,4,0.1); border-color: rgba(232,93,4,0.4); color: #e85d04;
}
.skills-grid { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 36px; }
.skill-tag {
  padding: 5px 14px; border-radius: 20px;
  background: #141414; border: 1px solid #242424;
  font-size: 0.78rem; color: #bbb; transition: all 0.25s; cursor: default;
}
.skill-tag:hover { border-color: #e85d04; color: #e85d04; background: rgba(232,93,4,0.07); }

.edu-card {
  border: 1px solid #1a1a1a; border-radius: 14px;
  padding: 16px 20px; margin-bottom: 10px;
  background: #0d0d0d; transition: border-color 0.25s;
}
.edu-card:hover { border-color: rgba(232,93,4,0.3); }
.edu-inst { font-size: 0.88rem; font-weight: 600; color: #ddd; margin-bottom: 4px; }
.edu-deg { font-size: 0.8rem; color: #777; margin-bottom: 6px; }
.edu-meta { display: flex; gap: 12px; }
.edu-period { font-size: 0.75rem; color: #555; }
.edu-score {
  font-size: 0.75rem; color: #e85d04; font-weight: 600;
  background: rgba(232,93,4,0.08); padding: 1px 8px; border-radius: 10px;
}

.leetcode-bar {
  background: #0d0d0d; border: 1px solid #1a1a1a;
  border-radius: 14px; padding: 18px 20px; margin-top: 10px;
}
.lc-label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.12em; color: #555; margin-bottom: 10px; }
.lc-stat { font-size: 1.5rem; font-weight: 700; color: #e85d04; }
.lc-sub { font-size: 0.78rem; color: #666; margin-top: 2px; }
.progress-track { height: 4px; background: #1e1e1e; border-radius: 2px; margin-top: 12px; }
.progress-fill {
  height: 100%; background: linear-gradient(90deg, #e85d04, #c1121f);
  border-radius: 2px; width: 0;
  animation: fillBar 1.2s ease-out 0.4s forwards;
}
@keyframes fillBar { to { width: 33%; } }

@media (max-width: 768px) {
  .about-page { padding: 40px 60px 40px 20px; }
  .about-grid { grid-template-columns: 1fr; gap: 30px; }
  .about-photo { aspect-ratio: 1; position: static; }
}
`;

const pageVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function About() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = activeFilter === 'All' ? skills : skills.filter(s => s.category === activeFilter);

  return (
    <>
      <style>{styles}</style>
      <div className="about-page">
        <FlameBackground />
        <motion.div className="about-content" variants={pageVariants} initial="hidden" animate="visible">
          <div className="about-grid">
            <div className="about-photo">
              <img src="/photo.png" alt="Deep Mondal" />
            </div>
            <div>
              <p className="section-label">About Me</p>
              <h2 className="section-title">Full-Stack Developer &amp;<br />AIML Enthusiast</h2>
              <p className="about-text">
<p>
I'm Deep Mondal, a B.Tech CSE student at Kalyani Government Engineering College (2022–2026), passionate about building modern MERN stack applications and creating responsive user experiences. I'm also an ML enthusiast with a keen interest in predictive analytics and sports data modeling.
</p>              </p>
              <p className="about-text">
I'm a Full Stack Developer specializing in the MERN stack and passionate about building modern, scalable web applications. Alongside web development, I'm an ML enthusiast with experience in predictive analytics and sports data modeling. One of my notable projects is a LaLiga Match Prediction Model built using machine learning techniques such as XGBoost, Random Forest, Poisson Distribution, and Stacking Ensembles to analyze football match outcomes.
           </p>

              <p className="section-label" style={{marginTop: '24px'}}>Skills</p>
              <div className="skill-filter">
                {categories.map(cat => (
                  <button
                    key={cat}
                    className={`filter-btn${activeFilter === cat ? ' active' : ''}`}
                    onClick={() => setActiveFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <motion.div className="skills-grid" layout>
                {filtered.map(s => (
                  <motion.span
                    key={s.name}
                    className="skill-tag"
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {s.name}
                  </motion.span>
                ))}
              </motion.div>

              <p className="section-label">Education</p>
              {education.map((e, i) => (
                <div className="edu-card" key={i}>
                  <div className="edu-inst">{e.institution}</div>
                  <div className="edu-deg">{e.degree}</div>
                  <div className="edu-meta">
                    <span className="edu-period">{e.period}</span>
                    {e.score && <span className="edu-score">{e.score}</span>}
                  </div>
                </div>
              ))}

              <div className="leetcode-bar">
                <div className="lc-label">Problem Solving</div>
                <div className="lc-stat">100+</div>
                <div className="lc-sub">LeetCode problems — arrays, trees, DP, greedy</div>
                <div className="progress-track"><div className="progress-fill" /></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
