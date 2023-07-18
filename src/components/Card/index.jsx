import React from 'react';
import './Card.scss';

const Card = ({ property }) => {
  return (
    <div className="card">
      <img src={property.cover} alt={property.title} className="card__image" />
      <div className="card__content">
        <h2 className="card__title">{property.title}</h2>
      </div>
    </div>
  );
};

export default Card;
