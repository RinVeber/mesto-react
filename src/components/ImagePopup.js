import React from "react";

function ImagePopup(props) {
  return (
    <section
      className={`popup popup_overlay-black popup_type_image ${
        props.card.link && "popup_opened"
      }`}
      onClick={() => {
        props.onClose();
      }}
    >
      <div
        className="popup__fullscreen"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          className="popup__close-button"
          type="button"
          onClick={props.onClose}
        ></button>
        <img
          src={props.card.link}
          alt={props.card.name}
          className="popup__image"
        />
        <p className="popup__image-subtitle">{props.card.name}</p>
      </div>
    </section>
  );
}
export default ImagePopup;
