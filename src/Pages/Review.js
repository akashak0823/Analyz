// src/components/ReviewPage.js
import React from 'react';
import { ThumbsUp, Star, Quote, Sparkles } from 'lucide-react'; // Add one more icon
import '../Css/Review.css'; // Ensure this matches your structure

const reviews = [
  {
    name: 'Alice Johnson',
    title: 'CEO at TechNova',
    review: 'Their attention to detail and creative vision exceeded our expectations.',
    icon: <ThumbsUp size={26} color="#4ED7F1" />,
  },
  {
    name: 'Michael Lee',
    title: 'CTO at DevHouse',
    review: 'A premium service provider with a deep understanding of digital strategy.',
    icon: <Star size={26} color="#4ED7F1" />,
  },
  {
    name: 'Sara Kim',
    title: 'Marketing Manager at Cloudify',
    review: 'Professional, responsive, and always delivers top-tier quality.',
    icon: <Quote size={26} color="#4ED7F1" />,
  },
  {
    name: 'David Rivera',
    title: 'Product Designer at UXCraft',
    review: 'Smooth collaboration and an eye for modern design. Truly elite.',
    icon: <Sparkles size={26} color="#4ED7F1" />,
  },
];

const ReviewCard = ({ name, title, review, icon }) => (
  <div className="glass-card review-card">
    <div className="review-icon">{icon}</div>
    <p className="review-text">"{review}"</p>
    <div className="review-footer">
      <h4 className="review-name">{name}</h4>
      <span className="review-title">{title}</span>
    </div>
  </div>
);

const Review = () => {
  return (
    <div className="review-page">
      <div className="hero-text">
        <h2>Client <span className="highlight">Testimonials</span></h2>
        <p>What our partners say about working with us.</p>
      </div>
      <div className="review-grid">
        {reviews.map((rev, index) => (
          <ReviewCard key={index} {...rev} />
        ))}
      </div>
    </div>
  );
};

export default Review;
