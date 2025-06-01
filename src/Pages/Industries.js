import React from 'react';
import '../Css/Industries.css';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';


const industries = [
  {
    label: 'Retail & E-Commerce',
    image: '/Assets/IR.jpeg',
    description: 'Transforming customer experience with predictive insights and personalized marketing.'
  },
  {
    label: 'Healthcare & Life Sciences',
    image: '/Assets/IH.jpeg',
    description: 'Improving patient care with AI-powered diagnostics and treatment plans.'
  },
  {
    label: 'Education & EdTech',
    image: '/Assets/IE.jpeg',
    description: 'Revolutionizing learning with adaptive content and performance analytics.'
  },
  {
    label: 'Manufacturing & Supply Chain',
    image: '/Assets/IM.jpeg',
    description: 'Optimizing operations with smart automation and demand forecasting.'
  },
  {
    label: 'Finance & FinTech',
    image: '/Assets/IF.jpeg',
    description: 'Ensuring smarter investment, fraud detection, and real-time risk analysis.'
  },
  {
    label: 'Real Estate & Infrastructure',
    image: '/Assets/IR@.jpeg',
    description: 'Driving intelligent planning, property valuation, and market forecasting.'
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: 'easeOut' },
  }),
};

const Industries = () => {
  return (
    <motion.div
      className="industries-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="industries-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Industries We Empower
      </motion.h2>

      <div className="industries-grid">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.25}
              scale={1.03}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              transitionSpeed={400}
              className="industry-tile-tilt"
            >
              <div
                className="industry-tile"
                style={{ backgroundImage: `url(${industry.image})` }}
              >
                <div className="industry-overlay">
                  <h3>{industry.label}</h3>
                  <p>{industry.description}</p>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="industries-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <button className="demo-button">Request a Demo</button>
      </motion.div>
    </motion.div>
  );
};

export default Industries;
