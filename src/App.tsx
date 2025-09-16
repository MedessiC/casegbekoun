import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import History from './pages/History';
import Alphabet from './pages/Alphabet';
import VirtualKeyboard from './pages/VirtualKeyboard';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import './i18n';

function App() {
  const { i18n } = useTranslation();

  React.useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/alphabet" element={<Alphabet />} />
            <Route path="/keyboard" element={<VirtualKeyboard />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;