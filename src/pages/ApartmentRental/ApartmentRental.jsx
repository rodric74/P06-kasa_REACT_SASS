import { useParams } from 'react-router-dom';
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
    return <div>Property not found</div>;
  }

  return (
    <div className='apartement-rental'>
      <Slideshow images={property.pictures} />
      <div className='apartement-rental__property'>
      <Property property={property} />
      <div className='appartement-rental__owner'>
      <Owner host={property.host} />
      <Rating rating={property.rating} />
      </div>
      </div>
      <div className="apartement-rental__collapse">
        <Collapse title="Description" content={property.description} className="collapse collapse--apartement" />
        <Collapse title="Equipments" content={property.equipments.join(', ')} className="collapse collapse--apartement" />
      </div>
    </div>
  );
}

export default ApartmentRental;
