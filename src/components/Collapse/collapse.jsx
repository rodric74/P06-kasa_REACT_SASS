import { useState } from "react";
import arrowIcon from '../../assets/arrow_back_ios-24px 2.svg'

function Collapse({ title, content}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);

  };

  return (
    <div className="collapse">
      <div className="collapse__title">
        {title}
        <img src={arrowIcon} 
              alt="flèche pour ouverture Collapse" 
              onClick={handleToggle} 
              style={{transform: isOpen ? 'rotate(90deg)' : 'none'}} 
              className="collapse__img"
        />
      </div>
      {isOpen && <div className="collapse__content">{content}</div> }
    </div>
  );
}

export default Collapse;
