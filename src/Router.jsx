import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import About from './pages/About/About';
import ApartmentRental from './pages/ApartmentRental/ApartmentRental';
import Error from './pages/Error/error';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

function AppRouter() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property/:id" element={<ApartmentRental />} />
        <Route path="*" element={<Error />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
