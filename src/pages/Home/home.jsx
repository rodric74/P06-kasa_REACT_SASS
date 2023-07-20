import React from 'react';
import Banner from '../../components/Banner/banner';
import homeImage from '../../assets/kasa-banner-ocean.jpg'
import Card from '../../components/Card/card';
import propertiesData from '../../datas/logements.json';
import Slideshow from '../../components/Slideshow/slideshow';
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
  return (
    <div>
      <Banner backgroundImage={homeImage} />
      <Slideshow images={images} />
      <div className="card-container">
        {propertiesData.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default Home;
