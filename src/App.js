import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import './App.css';

// Lazy load pages
const Home = lazy(() => import('./Pages/Home'));
const Services = lazy(() => import('./Pages/Services'));
const Industries = lazy(() => import('./Pages/Industries'));
const About = lazy(() => import('./Pages/About'));
const AboutDetail = lazy(() => import('./Pages/AboutDetail'));
const Contact = lazy(() => import('./Pages/Contact'));
const NotFound = lazy(() => import('./Pages/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <div className="background-image-layer"></div>
      <Navbar />
      <div className="App">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/about" element={<About />} />
            <Route path="/about-detail" element={<AboutDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
