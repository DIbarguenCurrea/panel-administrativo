import { useState } from "react";
import "./ButtonBurger.css";

function ButtonBurger() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="m-2" onClick={handleClick}>
      <div className={`hamburger ${isOpen ? "is-active" : ""}`}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </div>
  );
}

export default ButtonBurger;
