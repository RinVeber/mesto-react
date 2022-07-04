import React from 'react';

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="element">
        <button className="element__delete element__delete_active" type="button"></button>
        <img className="element__photo" src={props.card.image} alt={props.card.alt} onClick={handleClick}/>
      <div className="element__text">
        <h3 className="element__title">{props.card.alt}</h3>
        <div className="element__likes">
          <button className="element__heart" type="button"></button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;