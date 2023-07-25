import Banner from '../../components/Banner/banner';
import propertiesData from '../../datas/logements.json'
import homeImage from '../../assets/kasa-banner-ocean.jpg'
import Card from '../../components/Card/card';
import './Home.scss';

function Home() {
  
  return (
    <div>
      <Banner backgroundImage={homeImage} />
      <div className="card-container">
        {propertiesData.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default Home;
