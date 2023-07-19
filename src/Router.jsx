import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import About from './pages/About';
import Property from './pages/Property/property';
import Error from './pages/Error/error';
import Collapse from './components/Collapse/collapse';
import Slideshow from './components/Slideshow/slideshow';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

function AppRouter() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="/collapse" element={<Collapse />} />
        <Route path="/slideshow" element={<Slideshow />} />
        <Route path="*" element={<Error />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
