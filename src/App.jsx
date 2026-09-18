import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetail from './pages/ProjectDetail';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // If not an anchor link, scroll to top on page change
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/attendance" element={<ProjectDetail />} />
        <Route path="/projects/ai-voice-assistant" element={<ProjectDetail />} />
        <Route path="/projects/dev-ai" element={<ProjectDetail />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
