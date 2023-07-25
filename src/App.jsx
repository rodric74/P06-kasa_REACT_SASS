import { BrowserRouter } from 'react-router-dom';
import Router from './Router'; // Assurez-vous que le chemin d'accès est correct
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import './App.scss'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <div className='app__container'>
          <Header />
          <Router />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
