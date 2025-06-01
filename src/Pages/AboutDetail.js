import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaRocket, FaLightbulb, FaQuoteLeft } from 'react-icons/fa';
import '../Css/AboutDetails.css';
import { useNavigate } from 'react-router-dom';

const cardData = [
  {
    icon: <FaBullseye className="industry-icon" />,
    title: 'Mission',
    image: '/Assets/M1.jpeg',
    text: `Deliver high-impact data intelligence solutions\nthat drive growth, efficiency, and decision-making.`,
  },
  {
    icon: <FaLightbulb className="industry-icon" />,
    title: 'Vision',
    image: '/Assets/V1.jpeg',
    text: `To become India’s top business analytics partner.`,
  },
  {
    icon: <FaRocket className="industry-icon" />,
    title: 'Competitive Edge',
    image: '/Assets/C1.jpeg',
    text: `Accurate AI models\nFull data ownership\nScalable & minimal-disruption implementation`,
  },
];

const founderNote = {
  icon: <FaQuoteLeft className="quote-icon" />,
  image: '/Assets/Ai.jpeg',
  text: `“I believe the future of business lies in how well we\nread the data today. Luthen is my answer to that future.”`,
  author: '~ Fayaz',
};

const AboutDetail = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      id="about"
      className="about-container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="about-content">
        <h2>
          Behind the Data, There’s <span className="highlight">Vision.</span>
        </h2>

        <div className="about-grid">
          {cardData.map((card, i) => (
            <motion.div
              key={i}
              className="about-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="card-content">
                <img src={card.image} alt={card.title} className="card-image" />
                <div className="card-text-area">
                  {card.icon}
                  <div className="card-title">{card.title}</div>
                  <div className="card-text">
                    {card.text.split('\n').map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            className="about-card quote-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: cardData.length * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="card-content">
              <img src={founderNote.image} alt="Founder" className="card-image" />
              <div className="card-text-area">
                {founderNote.icon}
                <blockquote className="card-text">
                  {founderNote.text.split('\n').map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </blockquote>
                <cite className="card-title">{founderNote.author}</cite>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.button
          className="discover-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
        >
          ← Back
        </motion.button>
      </div>
    </motion.section>
  );
};

export default AboutDetail;
