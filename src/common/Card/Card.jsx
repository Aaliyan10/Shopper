import React from "react";
import "./Card.css";
import {Link} from "react-router-dom";

const Card = (props) => {
  const fullStars = Math.floor(props.rating.rate);
  const emptyStars = 5 - fullStars;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={`full-star-${i}`} className="fullStar star">
        ★
      </span>
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span key={`empty-star-${i}`} className="emptyStar star">
        ☆
      </span>
    );
  }

  const formattedPrice = props.price.toFixed(2);

  return (
    <Link to={`/Product/${props.id}`}>
      <div className="card">
        <img src={props.imgUrl} alt="product's image" />
        <h1>{props.title}</h1>
        <p id="rating">
          <span id="sold">{props.rating.count} sold</span> <span>{stars}</span>
        </p>
        <p id="price">$ {formattedPrice}</p>
      </div>
    </Link>
  );
};

export default Card;
