import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleChangeNamePlace(evt) {
    setName(evt.target.value);
  }

  function handleChangeLinkPlace(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      name: name,
      link: link,
    });
  }

  React.useEffect(() => {
    if (isOpen) {
      setName("");
      setLink("");
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      title="Новое место"
      name="mesto"
      buttonText="Создать"
      onSubmit={handleSubmit}
      onClose={onClose}
    >
      <input
        className="popup__input popup__input_type_name"
        onChange={handleChangeNamePlace}
        value={name}
        id="place-input"
        type="text"
        placeholder="Название"
        name="name"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="popup__error place-input-error"></span>

      <input
        className="popup__input popup__input_type_link"
        onChange={handleChangeLinkPlace}
        value={link}
        id="link-input"
        type="url"
        placeholder="Ссылка на картинку"
        name="link"
        required
      />
      <span className="popup__error link-input-error"></span>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
