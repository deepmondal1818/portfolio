import React from 'react';

const styles = `
.flame-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}
.flame-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  animation: flamePulse 7s ease-in-out infinite alternate;
}
.flame-orb-1 {
  width: 550px; height: 550px;
  background: radial-gradient(circle, rgba(232,93,4,0.22), transparent 70%);
  bottom: -120px; left: -80px;
}
.flame-orb-2 {
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(193,18,31,0.18), transparent 70%);
  top: -60px; right: 80px;
  animation-delay: -3.5s;
}
.flame-orb-3 {
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(255,106,0,0.12), transparent 70%);
  top: 40%; left: 40%;
  animation-delay: -1.5s;
}
@keyframes flamePulse {
  from { transform: scale(1); opacity: 0.8; }
  to   { transform: scale(1.4) rotate(8deg); opacity: 1; }
}
`;

export default function FlameBackground() {
  return (
    <>
      <style>{styles}</style>
      <div className="flame-bg">
        <div className="flame-orb flame-orb-1" />
        <div className="flame-orb flame-orb-2" />
        <div className="flame-orb flame-orb-3" />
      </div>
    </>
  );
}
