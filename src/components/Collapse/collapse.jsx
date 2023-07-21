import { useState } from "react";
import arrowIcon from '../../assets/arrow_back_ios-24px 2.svg'
import './Collapse.scss'

function Collapse({ title, content, className}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${className}`}>
      <div className={`collapse__title ${className}-title`}>
        <span>{title}</span>
        <img src={arrowIcon} 
      alt="flèche pour ouverture Collapse" 
      onClick={handleToggle} 
      className={`collapse__img ${isOpen ? 'rotate' : ''}`}
      />
      </div>
      <div className={`collapse__content ${className}-content ${isOpen ? 'open' : ''}`}>{content}</div>
    </div>
  );
}

export default Collapse;
