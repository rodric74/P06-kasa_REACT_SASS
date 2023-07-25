import './Rating.scss';
import star from '../../assets/star.svg';
import starGrey from '../../assets/Star_Grey.svg'

const Rating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <img
        key={i}
        src={i < rating ? star : starGrey}
        alt="star"
        className="star"
      />
    );
  }
  
  return <div className="rating">{stars}</div>;
};

export default Rating;
