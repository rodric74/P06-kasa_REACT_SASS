import './Property.scss';

const Property = ({ property }) => {
  return (
    <div className="property">
      <h2 className="property__title">{property.title}</h2>
      <p className="property__location">{property.location}</p>
      <div className="property__tags">
        {property.tags.map((tag, index) => (
          <div key={index} className="property__tag">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Property;
