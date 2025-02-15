import "../App.css";
import PropTypes from "prop-types";

const Card = ({ sorc, title, price, message }) => {
  const msg = () => {
    return window.alert(message);
  };
  return (
    <div className="container">
      <img className="Imeg" src={sorc} alt="an img" />
      <h4 className="Title">{title}</h4>
      <p className="Price">{price}</p>
      <button className="Buy" onClick={msg}>
        Buy
      </button>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  sorc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Card;
