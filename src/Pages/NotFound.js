import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <motion.div 
      className="notfound-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <Link to="/">Go Home</Link>
    </motion.div>
  );
};

export default NotFound;
