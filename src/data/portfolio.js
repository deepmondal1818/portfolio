export const skills = [
  // Languages
  { name: 'JavaScript', category: 'Languages' },
  { name: 'TypeScript', category: 'Languages' },
  { name: 'Python', category: 'Languages' },
  { name: 'Java', category: 'Languages' },
  { name: 'C', category: 'Languages' },

  // Frontend
  { name: 'HTML5', category: 'Frontend' },
  { name: 'CSS3', category: 'Frontend' },
  { name: 'React.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Bootstrap', category: 'Frontend' },

  // Backend
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'JWT Authentication', category: 'Backend' },

  // Databases
  { name: 'MongoDB', category: 'Databases' },
  { name: 'MySQL', category: 'Databases' },
  { name: 'SQL', category: 'Databases' },

  // MERN Stack
  { name: 'MERN Stack', category: 'Full Stack Development' },
  { name: 'Responsive Web Design', category: 'Full Stack Development' },
  { name: 'CRUD Applications', category: 'Full Stack Development' },

  // Machine Learning & Analytics
  { name: 'Scikit-Learn', category: 'ML / Analytics' },
  { name: 'Pandas', category: 'ML / Analytics' },
  { name: 'NumPy', category: 'ML / Analytics' },
  { name: 'XGBoost', category: 'ML / Analytics' },
  { name: 'Random Forest', category: 'ML / Analytics' },
  { name: 'Poisson Distribution', category: 'ML / Analytics' },
  { name: 'Stacking Ensembles', category: 'ML / Analytics' },
  { name: 'Feature Engineering', category: 'ML / Analytics' },
  { name: 'Model Evaluation', category: 'ML / Analytics' },

  
  // Tools
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },
  { name: 'Postman', category: 'Tools' },
  { name: 'Vercel', category: 'Deployment' }
];

export const education = [
  {
    institution: 'Kalyani Government Engineering College',
    degree: 'B.Tech, Computer Science & Engineering',
    period: '2022 – 2026',
    score: null,
  },
  {
    institution: 'Maliara R. N. High School',
    degree: 'Higher Secondary (WBCHSE)',
    period: '2019 – 2021',
    score: '88.4%',
  },
  {
    institution: 'Nityanandapur High School',
    degree: 'Secondary (WBBSE)',
    period: '2018 – 2019',
    score: '80.2%',
  },
];

export const projects = [
  {
    id: 'laliga',
    title: 'LaLiga Match Prediction System',
    emoji: '⚽',
    category: 'Data Engineering · ML',
    shortDesc: '3-phase ML platform with Poisson, Random Forest & XGBoost stacking ensemble.',
    longDesc:
      'An end-to-end prediction platform that ingests multi-source match data, engineers features, and passes them through a stacking ensemble of Poisson + Dixon-Coles and XGBoost models. The system uses isotonic calibration and walk-forward cross-validation to produce well-calibrated probability outputs.',
    gradient: 'linear-gradient(135deg, #0a1a0a, #0d3b1a, #12522a)',
    features: [
      '3-phase architecture: data ingestion → feature engineering → ensemble prediction',
      'Dixon-Coles + XGBoost stacking ensemble with isotonic calibration',
      'Walk-forward cross-validation respecting temporal data structure',
      'Feature engineering: H2H stats, injury-adjusted parameters, form metrics',
      'React front-end dashboard served via FastAPI backend',
      'Model evaluation with Log Loss and Ranked Probability Score (RPS)',
    ],
    stack: ['Python', 'FastAPI', 'React', 'XGBoost', 'Random Forest', 'Dixon-Coles', 'Scikit-learn', 'Pandas'],
    concepts: ['ETL Pipelines', 'Data Cleaning', 'Stacking Ensembles', 'Isotonic Calibration', 'Walk-forward CV'],
  },
  {
    id: 'spotify',
    title: 'Spotify Clone',
    emoji: '🎵',
    category: 'Full-Stack Development',
    shortDesc: 'Full-featured Spotify UI clone with custom audio controls and responsive design.',
    longDesc:
      'A pixel-faithful Spotify clone that replicates the core listening experience including a music player with custom controls, playlist management, and a fully responsive interface built from scratch using vanilla web technologies.',
    gradient: 'linear-gradient(135deg, #0a1a0a, #0d2b1a)',
    features: [
      'Custom HTML5 audio player with playback controls and seek bar',
      "Pixel-faithful recreation of Spotify's sidebar, nav, and player UI",
      'Responsive layout across desktop and mobile breakpoints',
      'Dynamic track queue and playlist rendering via JavaScript DOM',
      'Back-end integration for serving tracks and metadata',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    concepts: ['DOM Manipulation', 'Web Audio API', 'Responsive Design', 'CSS Flexbox/Grid'],
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    emoji: '🧑‍💻',
    category: 'Design · Front-End · React',
    shortDesc: 'This very site — dark flame-themed portfolio with React Router, Framer Motion, and dynamic routing.',
    longDesc:
      'Designed and built a custom portfolio with a distinctive dark flame aesthetic. Features React Router-powered navigation, Framer Motion page transitions, animated glass morphism navbar, and fully responsive layout with project detail pages.',
    gradient: 'linear-gradient(135deg, #0a0a1a, #1a0d2e, #2d1550)',
    features: [
      'React Router DOM for client-side routing to each section and project',
      'Framer Motion for page transitions and scroll-triggered animations',
      'Frosted glass vertical navbar with spring-physics hover',
      'Intersection Observer for automatic active nav state on scroll',
      'Photo colour-graded with Python Pillow to warm orange-red tone',
      'Fully responsive with zero UI library dependencies',
    ],
    stack: ['React', 'React Router', 'Framer Motion', 'CSS3', 'Python/Pillow'],
    concepts: ['Glass Morphism', 'Page Transitions', 'Dark Theme', 'Component Architecture'],
  },
];

export const contact = {
  email: 'deepmndl2003@gmail.com',
  phone: '+91 86957 81924',
  github: 'github.com/deepmondal1818',
  githubUrl: 'https://github.com/deepmondal1818',
  location: 'West Bengal, India',
};
