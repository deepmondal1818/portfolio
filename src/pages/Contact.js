import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, GitBranch as Github, MapPin, Send, CheckCircle } from 'lucide-react';
import FlameBackground from '../components/FlameBackground';
import { contact } from '../data/portfolio';

const styles = `
.contact-page {
  min-height: 100vh;
  display: flex; align-items: center; justify-content: center;
  padding: 60px 90px 60px 60px;
  position: relative; overflow: hidden;
}
.contact-content { position: relative; z-index: 1; width: 100%; max-width: 940px; }
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
.section-label {
  font-size: 0.7rem; text-transform: uppercase;
  letter-spacing: 0.18em; color: #e85d04;
  font-weight: 700; margin-bottom: 10px;
}
.section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  line-height: 1.15; margin-bottom: 14px; color: #fff;
}
.contact-intro { color: #777; font-size: 0.87rem; line-height: 1.8; margin-bottom: 28px; }
.contact-item {
  display: flex; align-items: center; gap: 14px;
  padding: 14px 0; border-bottom: 1px solid #151515;
  font-size: 0.86rem;
}
.contact-icon {
  width: 40px; height: 40px; border-radius: 50%;
  background: rgba(232,93,4,0.07);
  border: 1px solid rgba(232,93,4,0.18);
  display: flex; align-items: center; justify-content: center;
  color: #e85d04; flex-shrink: 0; transition: background 0.25s;
}
.contact-item:hover .contact-icon { background: rgba(232,93,4,0.15); }
.contact-link { color: #888; text-decoration: none; transition: color 0.2s; }
.contact-link:hover { color: #e85d04; }

.contact-form { display: flex; flex-direction: column; gap: 14px; }
.form-input, .form-textarea {
  background: #0e0e0e; border: 1px solid #1e1e1e;
  border-radius: 10px; padding: 13px 16px;
  color: #ddd; font-family: 'Inter', sans-serif;
  font-size: 0.87rem; transition: border-color 0.3s, box-shadow 0.3s;
  outline: none; width: 100%;
}
.form-input:focus, .form-textarea:focus {
  border-color: #e85d04;
  box-shadow: 0 0 0 3px rgba(232,93,4,0.08);
}
.form-textarea { resize: vertical; min-height: 110px; }
.btn-send {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 13px 26px;
  background: linear-gradient(135deg, #e85d04, #c1121f);
  border: none; border-radius: 10px;
  color: #fff; font-size: 0.88rem; font-weight: 600;
  cursor: pointer; transition: all 0.3s; align-self: flex-start;
}
.btn-send:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(232,93,4,0.38); }
.btn-send:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
.success-msg {
  display: flex; align-items: center; gap: 10px;
  background: rgba(232,93,4,0.08); border: 1px solid rgba(232,93,4,0.2);
  border-radius: 10px; padding: 14px 18px;
  color: #e85d04; font-size: 0.86rem;
}
@media (max-width: 768px) {
  .contact-page { padding: 40px 60px 40px 20px; }
  .contact-grid { grid-template-columns: 1fr; gap: 36px; }
}
`;

const pageVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1200);
  };

  const contactItems = [
    { icon: Mail,   label: contact.email,    href: `mailto:${contact.email}` },
    { icon: Phone,  label: contact.phone,    href: `tel:${contact.phone}` },
    { icon: Github, label: contact.github,   href: contact.githubUrl },
    { icon: MapPin, label: contact.location, href: null },
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="contact-page">
        <FlameBackground />
        <motion.div className="contact-content" variants={pageVariants} initial="hidden" animate="visible">
          <div className="contact-grid">
            <div>
              <p className="section-label">Get In Touch</p>
              <h2 className="section-title">Let's Work<br />Together</h2>
              <p className="contact-intro">
                Open to internships, collaborations, and full-time opportunities in data engineering and web development.
              </p>
              {contactItems.map(({ icon: Icon, label, href }) => (
                <div className="contact-item" key={label}>
                  <div className="contact-icon"><Icon size={15} /></div>
                  {href
                    ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact-link">{label}</a>
                    : <span style={{color:'#888'}}>{label}</span>
                  }
                </div>
              ))}
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <input
                className="form-input" name="name" type="text"
                placeholder="Your Name" value={form.name} onChange={handleChange} required
              />
              <input
                className="form-input" name="email" type="email"
                placeholder="Your Email" value={form.email} onChange={handleChange} required
              />
              <input
                className="form-input" name="subject" type="text"
                placeholder="Subject" value={form.subject} onChange={handleChange}
              />
              <textarea
                className="form-textarea" name="message"
                placeholder="Your Message" value={form.message} onChange={handleChange} required
              />
              {sent ? (
                <div className="success-msg">
                  <CheckCircle size={16} /> Message sent! I'll get back to you soon.
                </div>
              ) : (
                <button className="btn-send" type="submit" disabled={sending}>
                  {sending ? 'Sending…' : <><Send size={14} /> Send Message</>}
                </button>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
}
