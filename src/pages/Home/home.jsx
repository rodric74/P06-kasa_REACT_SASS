import React from 'react';
import Banner from '../../components/Banner/banner';
import Card from '../../components/Card/card';
import propertiesData from '../../datas/logements.json';
import './Home.scss';

function Home() {
  return (
    <div>
      <Banner />
      <div className="card-container">
        {propertiesData.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default Home;