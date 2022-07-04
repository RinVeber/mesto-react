import React from 'react';

function PopupWithForm(props) {

  return (
      <section className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}  onClick={props.handleClickClose}>
        <div className="popup__window">
        <button className="popup__close-button" type="button" onClick={props.onClose}></button>
          <form className={`popup__form popup__form_type_${props.name}`} name={`popup_form_${props.name}`} noValidate>
          <h2 className="popup__title">{props.name}</h2>
            {props.children}
            <button className="popup__submit-button" type="submit">{props.buttonText}</button>
          </form>
        </div>
      </section>
  )
}

export default PopupWithForm;