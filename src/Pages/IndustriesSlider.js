import React, { useEffect, useRef } from 'react';
import '../Css/IndustriesSlider.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    label: 'Retail & E-Commerce',
    image: '/Assets/IR.jpeg',
    description: 'Transforming customer experience with predictive insights and personalized marketing.',
  },
  {
    label: 'Healthcare & Life Sciences',
    image: '/Assets/IH.jpeg',
    description: 'Improving patient care with AI-powered diagnostics and treatment plans.',
  },
  {
    label: 'Education & EdTech',
    image: '/Assets/IE.jpeg',
    description: 'Revolutionizing learning with adaptive content and performance analytics.',
  },
  {
    label: 'Manufacturing & Supply Chain',
    image: '/Assets/IM.jpeg',
    description: 'Optimizing operations with smart automation and demand forecasting.',
  },
  {
    label: 'Finance & FinTech',
    image: '/Assets/IF3.jpeg',
    description: 'Ensuring smarter investment, fraud detection, and real-time risk analysis.',
  },
  {
    label: 'Real Estate & Infrastructure',
    image: '/Assets/IR@.jpeg',
    description: 'Driving intelligent planning, property valuation, and market forecasting.',
  },
];

const IndustriesGSAP = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      // Scroll animation: fade in + slide up + rotate
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, rotationY: 45 },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Mouse move parallax tilt effect
      const handleMouseMove = (e) => {
        const bounds = card.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;
        const centerX = bounds.width / 2;
        const centerY = bounds.height / 2;

        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(card, { rotationX: -rotateX, rotationY: rotateY, ease: 'power1.out', duration: 0.3 });
      };

      const handleMouseLeave = () => {
        gsap.to(card, { rotationX: 0, rotationY: 0, ease: 'power1.out', duration: 0.5 });
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup on unmount
      return () => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  return (
    <section className="gsap-industries-container">
      <h2 className="gsap-industries-heading">Industries We Empower</h2>
      <div className="gsap-industries-grid">
        {industries.map((industry, i) => (
          <div
            key={i}
            className="gsap-industry-card"
            ref={(el) => (cardsRef.current[i] = el)}
            style={{ backgroundImage: `url(${industry.image})` }}
          >
            <div className="gsap-overlay">
              <h3>{industry.label}</h3>
              <p>{industry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesGSAP;
