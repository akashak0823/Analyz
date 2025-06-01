import React, { useEffect, useRef } from 'react';
import '../Css/Services.css';
import { FaChartLine, FaCogs, FaRocket, FaBrain, FaServer } from 'react-icons/fa';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <FaChartLine />,
    title: 'Data Analytics',
    description: 'Unlock insights from your data with cutting-edge analytics solutions.',
    image: '/Assets/1.jpeg',
  },
  {
    icon: <FaBrain />,
    title: 'AI & ML Solutions',
    description: 'Predict trends, automate decisions, and drive innovation using AI.',
    image: '/Assets/2.jpeg',
  },
  {
    icon: <FaCogs />,
    title: 'Engineering Systems',
    description: 'Build robust, scalable architectures and seamless pipelines.',
    image: '/Assets/3.jpeg',
  },
  {
    icon: <FaRocket />,
    title: 'Business Growth',
    description: 'Optimize your strategy and grow your business intelligently.',
    image: '/Assets/4.jpeg',
  },
  {
    icon: <FaServer />,
    title: 'Infrastructure',
    description: 'Ensure your data is secure, fast, and always available.',
    image: '/Assets/5.jpeg',
  },
];

const Services = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Our <span className="highlight">Services</span></h1>
        <p>Empowering your business with data-driven solutions.</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-content">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
