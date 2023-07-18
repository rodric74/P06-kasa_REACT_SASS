import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import propertiesData from '../../datas/logements.json';
import './Home.scss';

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <div className="card-container">
        {propertiesData.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
