import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Property from './pages/Property';
import Error from './pages/Error';
import Collapse from './components/Collapse';
import Slideshow from './components/Slideshow';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/property/:id" element={<Property />} />
                <Route path="/collapse" element={<Collapse />} />
                <Route path="/slideshow" element={<Slideshow />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
