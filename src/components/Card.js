import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const isOwn = card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = `element__delete ${
    isOwn ? "element__delete_active" : ""
  }`;
  const cardLikeButtonClassName = `element__heart ${
    isLiked ? "element__heart_active" : ""
  }`;

  function handleLike() {
    onCardLike(card);
  }

  function handleDelete() {
    onCardDelete(card);
  }
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="element">
      <button
        className={cardDeleteButtonClassName}
        onClick={handleDelete}
        type="button"
      ></button>
      <img
        className="element__photo"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="element__text">
        <h3 className="element__title">{card.name}</h3>
        <div className="element__likes">
          <button
            className={cardLikeButtonClassName}
            onClick={handleLike}
            type="button"
          ></button>
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
