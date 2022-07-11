import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({
  isOpen,
  onClose,
  handleClickClose,
  onUpdateAvatar,
}) {
  const ref = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: ref.current.value,
    });
  }
  React.useEffect(() => {
    ref.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      title="Обновить аватар"
      name="avatar"
      buttonText="Сохранить"
      onSubmit={handleSubmit}
      handleClickClose={handleClickClose}
      onClose={onClose}
    >
      <input
        className="popup__input"
        ref={ref}
        id="url-input"
        type="url"
        placeholder="Ссылка на аватарку"
        name="avatar"
        required
      />
      <span className="popup__error url-input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
