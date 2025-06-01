import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
// Optional: Uncomment if you're using an icon library like Lucide or react-icons
// import { Quote } from 'lucide-react';

import '../Css/About.css';

const About = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      id="about"
      className="about-hero"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="about-left">
        {/* Use icon component or emoji fallback */}
        <div className="quote-icon-large">❝</div>
        <h2 className="about-title">About Luthen Analytics</h2>
        <p className="about-description">
          Data isn't just collected. It’s understood. Predicted. Empowered.
        </p>

        <motion.button
          className="discover-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/about-detail')}
        >
          Discover More
        </motion.button>
      </div>

      <motion.div
        className="about-right"
        initial={{ scale: 0.85, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <img
          src="/Assets/AI.jpeg"
          alt="Luthen Analytics AI Overview"
          className="about-image"
        />
      </motion.div>
    </motion.section>
  );
};

export default About;
