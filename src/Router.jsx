import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import About from './pages/About/About';
import ApartmentRental from './pages/ApartmentRental/ApartmentRental';
import Error from './pages/Error/error';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/property/:id" element={<ApartmentRental />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Router;
