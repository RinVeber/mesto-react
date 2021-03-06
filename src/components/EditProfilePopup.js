import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, handleClickClose, onUpdateUser }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (currentUser.name && currentUser.about) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, isOpen]);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeAbout(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      title="Редактировать профиль"
      name="profile"
      buttonText="Сохранить"
      handleClickClose={handleClickClose}
      onSubmit={handleSubmit}
      onClose={onClose}
    >
      <input
        className="popup__input popup__input popup__input_type_name"
        onChange={handleChangeName}
        value={name}
        id="name-input"
        type="text"
        placeholder="Имя"
        name="name"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__input-error name-input-error"></span>

      <input
        className="popup__input popup__input_type_bottom"
        onChange={handleChangeAbout}
        value={description}
        id="about-input"
        type="text"
        placeholder="О себе"
        name="about"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="popup__input-error about-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
