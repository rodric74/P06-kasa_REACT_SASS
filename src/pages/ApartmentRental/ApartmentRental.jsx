import { useParams, Navigate } from 'react-router-dom';
import propertiesData from '../../datas/logements.json';
import Slideshow from '../../components/Slideshow/slideshow';
import Rating from '../../components/Rating/rating';
import Owner from '../../components/Owner/owner';
import Property from '../../components/Property/property';
import Collapse from '../../components/Collapse/collapse';
import './ApartmentRental.scss'

function ApartmentRental() {
  const { id } = useParams(); 
  const property = propertiesData.find(p => p.id === id);
  
  if (!property) {
    return <Navigate to="/error" />;
  }

  return (
    <div className='apartement-rental'>
      <Slideshow images={property.pictures} />
      <div className='apartement-rental__property'>
        <Property property={property} />
        <div className='apartement-rental__owner'>
          <div className='apartement-rental__owner__rating'>
            <Rating rating={property.rating} className='apartement-rental__rating' />
          </div>
          <div className='apartement-rental__owner__host'>
            <Owner host={property.host} />
          </div>
        </div>
      </div>
      <div className="apartement-rental__collapse">
        <Collapse title="Description" content={property.description} className="collapse collapse--apartement" />
        <Collapse 
          title="Equipments" 
          content={property.equipments.map((equipment, index) => <span key={index} className="equipment-item">{equipment}</span>)} 
          className="collapse collapse--apartement" 
        />
      </div>
    </div>
  );
}

export default ApartmentRental;
