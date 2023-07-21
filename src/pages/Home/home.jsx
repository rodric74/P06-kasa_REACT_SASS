import React from 'react';
import Banner from '../../components/Banner/banner';
import homeImage from '../../assets/kasa-banner-ocean.jpg'
import Card from '../../components/Card/card';
import propertiesData from '../../datas/logements.json';
import Slideshow from '../../components/Slideshow/slideshow';
import Rating from '../../components/Rating/rating';
import Owner from '../../components/Owner/owner';
import Property from '../../components/Property/property';
import './Home.scss';

function Home() {
  const images = [
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-2.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-4.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-5.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-6.jpg"
  ];
  const mockHost = {
    name: 'Rodric Rambosson',
    picture: 'https://avatars.githubusercontent.com/u/124832324?v=4',
  };
  const firstProperty = propertiesData[0]; // Prendre la première propriété du tableau JSON

  return (
    <div>
      <Banner backgroundImage={homeImage} />
      <Slideshow images={images} />
      <Owner host={mockHost} />
      <Rating rating={2} />
      <Property property={firstProperty} /> {/* Passer la première propriété en tant que prop */}
      <div className="card-container">
        {propertiesData.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default Home;
