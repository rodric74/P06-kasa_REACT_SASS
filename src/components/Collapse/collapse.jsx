import { useState } from "react";
import arrowIcon from '../../assets/arrow_back_ios-24px 2.svg'

function Collapse({ title, content}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);

  };

  return (
    <div>
      <div>
        {title}
        <img src={arrowIcon} 
              alt="flèche pour ouverture Collapse" 
              onClick={handleToggle} 
              style={{transform: isOpen ? 'rotate(90deg)' : 'none'}} 
        />
      </div>
      {isOpen && <div>{content}</div> }
    </div>
  );
}

export default Collapse;
