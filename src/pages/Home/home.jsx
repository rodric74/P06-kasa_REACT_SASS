import Banner from '../../components/Banner/banner';
import propertiesData from '../../datas/logements.json'
import homeImage from '../../assets/kasa-banner-ocean.jpg'
import Card from '../../components/Card/card';
import './Home.scss';

function Home() {
  
  return (
    <div className='home'>
      <Banner backgroundImage={homeImage} text={<span className="home__title">Chez vous,<br />partout et ailleurs</span>} className='home-banner' />
      <div className="card-container">
        {propertiesData.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default Home;
