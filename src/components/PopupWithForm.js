import React from "react";

function PopupWithForm({ name, isOpen, onClose, buttonText, children, title, onSubmit }) {
  return (
    <section
      className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}
      onClick={onClose}
    >
      <div
        className={`popup__window popup__window_type-${name}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <form
          className={`popup__form popup__form_type_${name}`}
          name={`popup_form_${name}`}
          noValidate
          onSubmit={onSubmit}
        >
          <h2 className="popup__title">{title}</h2>
          {children}
          <button className="popup__submit-button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
export default PopupWithForm;
