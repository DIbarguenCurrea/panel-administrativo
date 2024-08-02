import "./ButtonBurger.css";

// eslint-disable-next-line react/prop-types
function ButtonBurger({ isOpen, handleClick }) {
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
