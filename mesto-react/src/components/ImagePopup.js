import React from 'react';

function ImagePopup(props) {
  return (
    <section className={`popup popup_overlay-black popup_type_image ${props.card.image ? 'popup_opened' : ''}`} onClick={props.handleClickClose}>
      <div className="popup__fullscreen">
      <button className="popup__close-button" type="button" onClick={props.onClose}></button>
          <img src={props.card.image} alt={props.card.alt} className="popup__image" />
          <p className="popup__image-subtitle">{props.card.alt}</p>
      </div>
    </section>
  );
}

export default ImagePopup;